<?php
class AudigyLp_Api
{
    //var_dump(json_encode($data));

    public function create_subject($endpoint = "", $data, $token, $method)
    {
        $api_details = $this->api_details();

        $headers = [
            "Content-Type" => "application/json",
            "Authorization" => $token,
        ];

        $url = $api_details["lead_url"] . $endpoint;

        $response = $this->send_post_request($url, $data, $headers, $method);

        return $response;
    }

    public function save_data_to_lp()
    {
        // Add nonce verification
        if (!wp_verify_nonce($_POST["nonce"], "audigy_ajax_nonce")) {
            wp_die("Security check failed");
        }

        // Add capability check (or remove nopriv if auth required)
        // if (!current_user_can("edit_posts")) {
        //     wp_die("Insufficient permissions");
        // }

        if (wp_doing_ajax()) {
            global $wpdb;

            $response = [
                "success" => false,
            ];

            $data = $this->create_subject(
                "",
                sanitize_text_field($_POST["data"]),
                sanitize_text_field($_POST["token"]),
                "POST"
            );

            if (
                $data["response"] &&
                ($data["response"]["code"] === 200 ||
                    $data["response"]["code"] === 201)
            ) {
                $response["success"] = true;
                $this->send_email_for_lp_api(sanitize_text_field($_POST["data"]), true);
            } else {
                $this->send_email_for_lp_api(sanitize_text_field($_POST["data"]), false);
            }

            $apiEmail = new AudigyWp();

            $response["postalcode"] = sanitize_text_field($_POST["data"]["postalCode"]);

            wp_send_json($response);
            wp_die();
        }
    }

    public function fetch_location_data()
    {
        // Add nonce verification
        if (!wp_verify_nonce($_POST["nonce"], "audigy_ajax_nonce")) {
            wp_die("Security check failed");
        }

        // Add capability check (or remove nopriv if auth required)
        if (!current_user_can("edit_posts")) {
            wp_die("Insufficient permissions");
        }

        if (wp_doing_ajax()) {
            $locId = sanitize_text_field($_POST["locId"]);

            $sanitized_post = array_map('sanitize_text_field', $_POST);

            //Contact form data
            $lpData = $this->lp_form_data($sanitized_post);

            $this->insert_cp_data($sanitized_post);

            // Locations data
            $lpData["locationInfo"] = $this->fetch_location_info($locId);

            $practice = get_post_meta($locId, "external_practice_id", true);

            // Fetch practice data
            $lpData["practiceInfo"] = $this->fetch_practice_info($practice);

            // Generating token
            $token = $this->get_token();

            //Sending data into LP API
            $response = $this->send_data_to_lp($token, $lpData);

            wp_send_json($response);
            wp_die();
        }
    }

    public function get_lp_data_by_id()
    {
        if (wp_doing_ajax()) {
            global $wpdb;

            $token = $this->get_token();
            $temp = json_decode($token["body"]);

            $response = $this->create_subject(
                "/" . intval($_POST["id"]),
                null,
                $temp->access_token,
                "GET"
            );

            wp_send_json($response);
            wp_die();
        }
    }

    public function get_lp_token()
    {
        if (wp_doing_ajax()) {
            //var_dump(get_option('ghx_logo'));
            $response = $this->get_token();

            wp_send_json($response);
            wp_die();
        }
    }

    public function get_token()
    {
        $api_details = $this->api_details();

        $headers = [
            "Content-Type" => "application/x-www-form-urlencoded",
            "Authorization" => $api_details["token"],
        ];
        $response = $this->send_post_request(
            $api_details["lead_processer_url"],
            null,
            $headers
        );

        return $response;
    }

    public function api_details()
    {
        return [
            "lead_url" => constant("LP_LEAD_URL"),
            "lead_processer_url" => constant("LP_TOKEN_URL"),
            "token" => "Basic " . constant("LP_AUTH_TOKEN"),
        ];
    }

    private function send_post_request($url, $data, $headers, $method = "POST")
    {
        try {
            $response = $this->lp_api_request($url, $data, $headers, $method);
        } catch (Exception $e) {
            //catch exception and logs error
            $this->insert_api_error($e->getMessage());
        }

        return $response;
    }

    /** Send API request to GHX **/
    public function lp_api_request($url, $data, $headers, $method)
    {
        $args = [
            "method" => $method,
            "headers" => $headers,
            "body" => json_encode($data),
        ];

        if (empty($data)) {
            unset($args["body"]);
        }

        $response = wp_remote_post($url, $args);

        if (is_wp_error($response)) {
            throw new Exception($response->get_error_message());
        } elseif (
            !empty($response["response"]["code"]) &&
            $response["response"]["code"] == 400
        ) {
            throw new Exception($response["body"]);
        } elseif (!empty($response->errors)) {
            throw new Exception($response->errors["http_request_failed"][0]);
        }

        return $response;
    }

    /** Insert api errors into DB **/
    public function insert_api_error($error)
    {
        global $wpdb;

        $table_name = $wpdb->prefix . "ghx_api_error_logs";

		$sql = $wpdb->prepare(
			"INSERT INTO {$table_name} (errorMsg) VALUES (%s)",
			$error
		);

		$response = $wpdb->query($sql);
    }

    // Send data into LP API
    public function send_data_to_lp($token, $data)
    {
        global $wpdb;

        $apiToken = json_decode($token["body"]);

        $response = [
            "success" => false,
        ];

        $lp_data = $data;

        $data = $this->create_subject(
            "",
            $data,
            $apiToken->access_token,
            "POST"
        );

        if (
            !empty($data["response"]) &&
            ($data["response"]["code"] === 200 ||
                $data["response"]["code"] === 201)
        ) {
            $response["success"] = true;
            $response["error"] = 0;
            $this->send_email_for_lp_api($lp_data, true);
        } elseif (
            !empty($data["response"]) &&
            ($data["response"]["code"] == 400 ||
                $data["response"]["code"] == 401)
        ) {
            $response["success"] = false;
            $response["error"] = 1;

            $this->send_email_for_lp_api($lp_data, false);
        }

        $apiEmail = new AudigyWp();

        return $response;
    }

    // Fetching practice data
    public function fetch_practice_info($practice)
    {
        $args = [
            "post_type" => "practice",
            "post_status" => "publish",
            "meta_query" => [
                [
                    "key" => "external_id",
                    "value" => $practice,
                ],
            ],
        ];

        $querytwo = new WP_Query($args);
        if ($querytwo->have_posts()) {
            while ($querytwo->have_posts()) {
                $querytwo->the_post();
                $post_id = $querytwo->post->ID;

                $practice_email = get_post_meta($post_id, "email_to", true);

                if (get_post_meta($post_id, "email_cc", true)) {
                    $practice_email .=
                        "," . get_post_meta($post_id, "email_cc", true);
                }

                if (get_post_meta($post_id, "email_bcc", true)) {
                    $practice_email .=
                        "," . get_post_meta($post_id, "email_bcc", true);
                }

                $locationsinfo["email"] = $practice_email;
                $locationsinfo["name"] = get_the_title($post_id);
            }
        }

        wp_reset_postdata();

        return $locationsinfo;
    }

    public function fetch_location_info($locId)
    {
        $lpData["location_address_one"] = get_post_meta(
            $locId,
            "location_address_one",
            true
        );
        $lpData["location_city"] = get_post_meta($locId, "location_city", true);
        $lpData["location_state"] = get_post_meta(
            $locId,
            "location_state",
            true
        );
        $lpData["location_zip"] = get_post_meta($locId, "location_zip", true);
        $lpData["location_country"] = get_post_meta(
            $locId,
            "location_country",
            true
        );
        $lpData["Id"] = $locId;
        $lpData["externalID"] = get_post_meta(
            $locId,
            "external_location_id",
            true
        )
            ? get_post_meta($locId, "external_location_id", true)
            : "";
        $lpData["name"] = get_the_title($locId);

        return $lpData;
    }

    public function lp_form_data($postdata)
    {
        
        $locId = $postdata["locId"];
        $formData = $postdata["formData"];
        $api = new AudigyWp();
        $data = $api->get_user_meta($postdata["spot_id"]);

        foreach ($formData as $val) {
            if ($val["name"] == "balance") {
                $lpData["leadType"] = isset($val["value"])
                    ? sanitize_text_field($val["value"])
                    : "";
            }

            if ($val["name"] == "first-name") {
                $lpData["firstName"] = isset($val["value"])
                    ? sanitize_text_field($val["value"])
                    : "";
            }

            if ($val["name"] == "last-name") {
                $lpData["lastName"] = isset($val["value"])
                    ? sanitize_text_field($val["value"])
                    : "";
            }

            if ($val["name"] == "email-address") {
                $lpData["email"] =
                    isset($val["value"]) && is_email($val["value"])
                        ? sanitize_email($val["value"])
                        : "";
            }

            if ($val["name"] == "phone-number") {
                if (isset($val["value"]) && is_string($val["value"])) {
                    // Basic sanitization for phone numbers (removes anything except digits, +, -, and space)
                    $sanitized_phone = preg_replace(
                        "/[^0-9\+\-\s]/",
                        "",
                        $val["value"]
                    );
                    $lpData["phone"] = trim($sanitized_phone);
                }
            }
        }

        $ghxinfo = !empty($data)
            ? "ContactProviderWithGHXResults"
            : "ContactProvider";

        if (
            !empty($postdata["lp_data"]["postalCode"]) &&
            $postdata["lp_data"]["postalCode"] != ""
        ) {
            $postalCode = $postdata["lp_data"]["postalCode"];
        } elseif (
            empty($postdata["lp_data"]["postalCode"]) &&
            !empty($postdata["spot_id"])
        ) {
            $postalCode = $this->fetch_zipcode($postdata["spot_id"]);
        } else {
            $postalCode = "";
        }

        $lpId =
            isset($postdata["spot_id"]) && $postdata["spot_id"] != ""
                ? $postdata["spot_id"]
                : $postdata["lp_randId"];

        $lpData["id"] = $lpId;
        $lpData["message"] = "";
        $lpData["birthYear"] = "";
        $lpData["postalCode"] = $postalCode;
        $lpData["city"] = "";
        $lpData["state"] = "";
        $lpData["geoLatitude"] = 0;
        $lpData["geoLongtitude"] = 0;
        $lpData["timestamp"] = time();
        $lpData["origin"] = [
            "consentInfo" => [
                "firstName" => $lpData["firstName"],
                "lastName" => $lpData["lastName"],
            ],
            "submissionType" => $ghxinfo,
            "formName" => "ContactProvider",
            "formUrl" => get_permalink($locId),
        ];

        if (
            !empty($data) &&
            $data["userdata"]->lpData->questionnaireResults != ""
        ) {
            $lpData["questionnaireResults"] =
                $data["userdata"]->lpData->questionnaireResults;
        } else {
            $lpData["questionnaireResults"] = "";
        }

        if (!empty($data) && $data["userdata"]->lpData->screenerResults != "") {
            $lpData["screenerResults"] =
                $data["userdata"]->lpData->screenerResults;
        } else {
            $lpData["screenerResults"] = "";
        }

        return $lpData;
    }

    public function insert_cp_data($data)
    {
        global $wpdb;

        $api = new AudigyWp();
        $ghx_data = $api->get_user_meta($data["spot_id"]);
        $ghx_attached = !empty($ghx_data) ? 1 : 0;

        if (
            !empty($data["lp_data"]["postalCode"]) &&
            $data["lp_data"]["postalCode"] != ""
        ) {
            $postalCode = $data["lp_data"]["postalCode"];
        } elseif (
            empty($data["lp_data"]["postalCode"]) &&
            !empty($data["spot_id"])
        ) {
            $postalCode = $this->fetch_zipcode($data["spot_id"]);
        } else {
            $postalCode = "";
        }

        $table_name = $wpdb->prefix . "contact_provider_leads";

        $sql = $wpdb->prepare(
			"INSERT INTO {$table_name} (location_id, ghx_attached, ghx_lead_id, zip_code, origin) VALUES (%d, %s, %s, %s, %s)",
			$data["locId"],
			$ghx_attached,
			$data["spot_id"],
			$postalCode,
			get_permalink($data["locId"])
			);

		$response = $wpdb->query($sql);

    }

    /**
     * NOTE: This is tied to the SaveMySpot functionality in the GHX.
     * All data is saved into the database so a visitor can restore his position
     * in the GHX through a link sent via email.
     * Note that all data is saved EXCEPT FOR PII -- first name, last name,
     * and email is excluded.
     */
    public function save_spot()
    {
        // Add nonce verification
        /*if (!wp_verify_nonce($_POST["nonce"], "audigy_ajax_nonce")) {
            wp_die("Security check failed");
        }*/

        // Add capability check (or remove nopriv if auth required)
        // if (!current_user_can("edit_posts")) {
        //     wp_die("Insufficient permissions");
        // }

        if (wp_doing_ajax()) {

            $extract_data = array_map('sanitize_text_field', $_POST);

            // Extract form data
            $extract_data = $_POST;

            $ghxscrener_data = $this->remove_PIIinfo($extract_data["data"]);

            $api = new AudigyWp();

            $data = $api->get_user_meta($extract_data["id"]);

            // Save GHX data into database
            $this->saveorUpdateSpot($data, $ghxscrener_data, $extract_data);

            wp_send_json($data);
            wp_die();
        }
    }

    public function remove_PIIinfo($postData)
    {
        $postData["zipcode"] = sanitize_text_field($postData["userData"]["final"]["zip_code"]);

        unset($postData["userData"]["final"]);
        return $postData;
    }

    public function saveorUpdateSpot($data, $ghxscrener_data, $extract_data)
    {
        $api = new AudigyWp();

        if (count($data)) {
            $data = $api->update_user_meta(
                $extract_data["id"],
                $ghxscrener_data
            );
        } else {
            $data = $api->create_user_meta(
                $extract_data["id"],
                $ghxscrener_data
            );
        }

        $this->sendEmail($extract_data);
    }

    public function sendEmail($extract_data)
    {
        $api = new AudigyWp();

        if ($extract_data["resultPage"] === "true") {
            if ($extract_data["data"]["userData"]["type"] == "Me") {
                $subject = get_bloginfo("name") . " - Your results";
            } else {
                $subject =
                    get_bloginfo("name") .
                    " – Information for you and your loved one";
            }
        } else {
            $subject = get_bloginfo("name") . " - We saved your spot";
        }

        $api->send_email(
            $extract_data["email"],
            $subject,
            $this->getMessage(
                $extract_data["resultPage"],
                $extract_data["link"],
                $extract_data["queryStrings"],
                $extract_data["firstName"],
                $extract_data["email"],
                $extract_data["data"]["userData"]["type"]
            )
        );
    }

    public function getMessage(
        $resultPage,
        $link,
        $queryStrings,
        $fname,
        $to,
        $type
    ) {
        include dirname(plugin_dir_path(__FILE__)) .
            "/ghx-emailer/results-emails.php";
        include dirname(plugin_dir_path(__FILE__)) .
            "/ghx-emailer/results-for-loved-emails.php";
        include dirname(plugin_dir_path(__FILE__)) .
            "/ghx-emailer/save-my-spot.php";

        $fname = empty($fname) ? "HearingLoss.com visitor" : $fname;

        $get_guid = explode("=", $link);
        $message = "";
        $convertedQueryString = "";

        if ($resultPage === "true") {
            if ($queryStrings["left"] && $queryStrings["right"]) {
                $convertedQueryString .=
                    "&left=" .
                    $queryStrings["left"] .
                    "&right=" .
                    $queryStrings["right"];
            }

            $convertedQueryString .=
                "&postalcode=" . $queryStrings["postalcode"];

            $results_email = str_replace(
                "[view-my-results]",
                '<a href="' .
                    get_bloginfo("url") .
                    "/guided-hearing-experience/results/for-me/?guid=" .
                    $get_guid[1] .
                    '">VIEW MY RESULTS</a>',
                $results_email
            );
            $results_forloved_email = str_replace(
                "[view-my-results]",
                '<a href="' .
                    get_bloginfo("url") .
                    "/guided-hearing-experience/results/loved-one/?guid=" .
                    $get_guid[1] .
                    '">VIEW MY RESULTS</a>',
                $results_forloved_email
            );

            // get template
            if ($type == "Me") {
                $message = $results_email;
            } else {
                $message = $results_forloved_email;
            }

            $addLink = $link;
            $query_string =
                "?unsubscribe=" .
                urlencode("1") .
                "&e=" .
                encryptor("encrypt", $to);
            $unsubscribe_link =
                get_permalink(22183) . htmlentities($query_string);

            $search = [
                "{link}",
                "{FirstName}",
                "{unsubscribe_link}",
                "{zipcode}",
                "{siteurl}",
                "{SiteName}",
            ];
            $replace = [
                $addLink,
                $fname,
                $unsubscribe_link,
                $this->fetch_zipcode($get_guid[1]),
                get_site_url(),
                get_bloginfo("name"),
            ];

            // string replace
            $message = str_replace($search, $replace, $message);

            return $message;
        } else {
            // get template
            $message = $save_my_spot;

            $page_url = get_option("in_page_url");

            $query_string =
                "?unsubscribe=" .
                urlencode("1") .
                "&e=" .
                encryptor("encrypt", $to);
            $unsubscribe_link =
                get_permalink(22183) . htmlentities($query_string);

            $link1 = '<a href="' . $page_url . '?savedSpot='.$get_guid[1].'">Online Screener</a>';

            $search = [
                "{link}",
                "{FirstName}",
                "{unsubscribe_link}",
                "{siteurl}",
                "{SiteName}",
            ];
            $replace = [
                $link1,
                $fname,
                $unsubscribe_link,
                get_site_url(),
                get_bloginfo("name"),
            ];

            // string replace
            $message = str_replace($search, $replace, $message);

            return $message;
        }
    }

    public function get_spot_data()
    {
        // Add nonce verification
        // if (!wp_verify_nonce($_POST["nonce"], "audigy_ajax_nonce")) {
        //     wp_die("Security check failed");
        // }

        // // Add capability check (or remove nopriv if auth required)
        // if (!current_user_can("edit_posts")) {
        //     wp_die("Insufficient permissions");
        // }

        if (wp_doing_ajax()) {
            $api = new AudigyWp();

            $data = $this->nf_form_type();
            
            if ($data == "") {
                $data = $api->get_user_meta(intval($_POST["id"]));
            }

            wp_send_json($data);
            wp_die();
        }
    }

    public function clean_trial_array($trials)
    {
        $data = [];

        foreach ($trials as $trial) {
            $data[] = [
                "audible" => $trial["audible"] == "true" ? true : false,
                "tone" => [
                    "frequency" => (int) $trial["tone"]["frequency"],
                    "intensityDbHL" => (int) $trial["tone"]["intensityDbHL"],
                ],
            ];
        }

        return $data;
    }

    public function nf_form_type()
    {
        global $wpdb;

        if (isset($_POST["id"])) {

            $guid = intval($_POST["id"]); // basic sanitization

            $prepare_guery = $wpdb->prepare( "SELECT post_id FROM $wpdb->postmeta where meta_key ='guid' and meta_value = '".$guid."'");
	    
            $get_values    = $wpdb->get_col( $prepare_guery );

            if (!empty($get_values)) {
                $ghx_data = get_post_meta($get_values[0]);

                foreach ($ghx_data as $key => $data) {
                    $check_json = json_decode($data[0]);

                    if ($check_json->data) {
                        $field_id = $key;
                    }
                }

                if (!empty($ghx_data[$field_id])) {
                    $pr_data = json_decode($ghx_data[$field_id][0]);
                    $userData = $pr_data->data;
                }

                $retVal = [
                    "id" => $guid,
                    "userdata" => $userData,
                    "fname" => sanitize_text_field($ghx_data["_field_138"][0]),
                    "sname" => sanitize_text_field($ghx_data["_field_139"][0]),
                    "email" => sanitize_text_field($ghx_data["_field_137"][0]),
                    "phone" => sanitize_text_field($ghx_data["_field_107"][0]),
                    "zipcode" => sanitize_text_field(
                        $ghx_data["_field_140"][0]
                    ),
                ];

                return $retVal;
            } else {
                return "";
            }
        }
    }

    /*
     *Send email to the admin ti notify the there is
     *failed api request
     */
    public function lp_api_failed_to_save()
    {
        if (!wp_verify_nonce($_POST["nonce"], "audigy_ajax_nonce")) {
            wp_die("Security check failed");
        }

        $post_data = sanitize_text_field($_POST["data"]);

        if (wp_doing_ajax()) {
            if (isset($post_data) && !empty($post_data)) {
                $res = $this->send_email_for_lp_api($post_data, false);
            }
            wp_send_json($res);
            wp_die();
        }
    }

    public function fetch_zipcode($ghxid)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . "ghx_leads";

        $ghxid = isset($ghxid) ? intval($ghxid) : 0; // force to int
        $sql = $wpdb->prepare(
            "SELECT * FROM $table_name WHERE id = %d",
            $ghxid
        );
        $results = $wpdb->get_results($sql);

        $userData = json_decode($results[0]->userdata);

        foreach ($userData as $key => $ff) {
            if ($key == "zipcode") {
                return $ff;
            }
        }
    }

    public function send_email_for_lp_api($data, $success)
    {
        $api = new AudigyWp();
        $html = $this->get_html_list_format("", $data);

        $email_fail_email = get_field("api_fail_email_to", "option");
        $api_fail = get_field("api_fail_email", "option");

        if ($api_fail && !$success) {
            return $api->send_email(
                $email_fail_email, //get_bloginfo('admin_email'),
                "New Lead - LP API FAILURE",
                $html
            );
        }

        $email_success = get_field("api_success_email", "option");
        $api_success_email = get_field("api_sucess_email_to", "option");

        if ($email_success && $success) {
            return $api->send_email(
                $api_success_email, //get_bloginfo('admin_email'),
                "New Lead - LP API SUCCESS",
                $html
            );
        }
    }

    /*
     *Create a hmlt list format for email.
     */

    public function get_html_list_format($html_format, $items)
    {
        $html_format .= "<ul>";

        foreach ($items as $key => $value) {
            $html_format .= "<li> " . $key . ": <span>";

            if (is_object($value) || is_array($value)) {
                $html_format .= $this->get_html_list_format("", $value);
            } else {
                $html_format .= $value;
            }

            $html_format .= "</span> </li>";
        }

        $html_format .= "</ul>";

        return $html_format;
    }

    public function get_ghx_options()
    {
        if (wp_doing_ajax()) {
            $response = [
                "plugin_url" => plugin_dir_url(__DIR__),
                "ghx_logo" => get_option("ghx_logo"),
                "ghx_brand_color" => get_option("ghx_brand_color", true),
                "ghx_secondary_color" => get_option(
                    "ghx_secondary_color",
                    true
                ),
                "ghx_redirect_option" => get_option("ghx_submission_redirect"),
                "ghx_custom_url" => get_option("custom_page"),
                "ghx_form" => get_option("ghx_form"),
                "ghx_nf_for_me_url" => get_option("for-me-form"),
                "ghx_nf_loved_one_url" => get_option("loved-one-form"),
                "ghx_nf_save_spot_url" => get_option("savemyspot-form"),
                "ghx_save_spot_redirect" => get_option("savemyspot-redirect"),
                "ghx_wp_ajax_nonce" => wp_nonce_field('audigy_ajax_nonce', 'ghx_nonce_field', true, false),
                "ghx_tertiary_color" => get_option("ghx_tertiary_color"),
                "ghx_font_color" => get_option("ghx_font_color"),
                "ghx_button_color" => get_option("ghx_button_color"),
                "ghx_font_family" => get_option("ghx_font_family"),
                "ghx_in_page_url" => get_option("in_page_url"),
                "ghx_enable_background_color" => get_option("ghx_enable_background_color"),
                "ghx_background_color" => get_option("ghx_background_color"),
                "ghx_enable_popup_bg" => get_option("ghx_enable_popup_bg"),
                "ghx_background_image" => get_option("ghx_background_image"),
            ];

            wp_send_json($response);
            wp_die();
        }
    }
}
?>