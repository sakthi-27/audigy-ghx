<?php

// Shortcode for showing hearing loss results
add_shortcode("ghx_test_user_results", "experiment_result_function");


// Generate results based on the user submitted test data
function experiment_result_function()
{

    $guid       =  intval($_GET['guid']);

    $test_data  =  sanitize_text_field($_REQUEST['test']);

    if ( ( isset( $guid ) && ! empty( $guid ) ) || isset( $test_data ) ) {

        $data = getGHXresults();

        $left  = '';
        $right = '';

        if (empty($data) && $test_data == "") {
            return;
        }

        $guid_raw = isset( $guid ) ? wp_unslash( $guid ) : '';

        $guid = sanitize_text_field( $guid_raw );

        if(!empty($data["left"]))
        $left  = $data["left"];

        if(!empty($data["right"]))
        $right = $data["right"];

        $message = "";

        $message .= "<div class='hearing_loss_result'>";
        if ($left == "ProfoundImpairment" || $right == "ProfoundImpairment") {
            $message .=
                "<h2 class='hl_head'>You May Have a Profound Hearing Loss</h2>";
        } elseif ($left == "SevereImpairment" || $right == "SevereImpairment") {
            $message .=
                "<h2 class='hl_head'>You May Have a Severe Hearing Loss</h2>";
        } elseif (
            $left == "ModerateImpairment" ||
            $right == "ModerateImpairment"
        ) {
            $message .=
                "<h2 class='hl_head'>You May Have a Moderate Hearing Loss</h2>";
        } elseif ($left == "SlightImpairment" || $right == "SlightImpairment") {
            $message .=
                "<h2 class='hl_head'>You May Have a Mild Hearing Loss</h2>";
        } elseif ($left == "NoImpairment" || $right == "noImpairment") {
            $message .= "<h2 class='hl_head'>You May Have Normal Hearing</h2>";
        } else {
            $message .= "<h2 class='hl_head'>You May Have Normal Hearing</h2>";
        }
        if ($left == "ProfoundImpairment") {
            $progress_left_val = 100;
        } elseif ($left == "SevereImpairment") {
            $progress_left_val = 75;
        } elseif ($left == "ModerateImpairment") {
            $progress_left_val = 50;
        } elseif ($left == "SlightImpairment") {
            $progress_left_val = 25;
        } elseif ($left == "NoImpairment") {
            $progress_left_val = 7;
        } else {
            $progress_left_val = 7;
        }
        if ($right == "ProfoundImpairment") {
            $progress_right_val = 100;
        } elseif ($right == "SevereImpairment") {
            $progress_right_val = 75;
        } elseif ($right == "ModerateImpairment") {
            $progress_right_val = 50;
        } elseif ($right == "SlightImpairment") {
            $progress_right_val = 25;
        } elseif ($right == "NoImpairment") {
            $progress_right_val = 7;
        } else {
            $progress_right_val = 7;
        }

        $impClass = $progress_right_val == 0 ? "noimparirment" : "";

        $progress_left =
            '<div class="progress_ear_bar ' .
            $impClass .
            '">
      <div class="progress_label">
        <p class="label left">Normal</p>
        <p class="label right">Profound</p>
      </div>
      <div class="vertical_bar">
      <span class="one"></span>
      <span class="two"></span>
      <span class="three"></span>
      </div>
      <div class="progress" style="height: 49px;">
        <div class="progress-bar" role="progressbar" aria-label="Example 49px high" style="width: ' .
            $progress_left_val .
            '%;" aria-valuenow="' .
            $progress_left_val .
            '" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>';

        $progress_right =
            '<div class="progress_ear_bar">
      <div class="progress_label">
        <p class="label left">Normal</p>
        <p class="label right">Profound</p>
      </div>
      <div class="vertical_bar">
      <span class="one"></span>
      <span class="two"></span>
      <span class="three"></span>
      </div>
      <div class="progress" style="height: 49px;">
        <div class="progress-bar" role="progressbar" aria-label="Example 49px high" style="width: ' .
            $progress_right_val .
            '%;" aria-valuenow="' .
            $progress_right_val .
            '" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>';

        $message .= "<div class='flex-container'>";
        $message .=
            "<div class='left-ear'><h3>Left Ear</h3><p>Indication of hearing loss</p>" .
            $progress_left .
            "</div>";
        $message .=
            "<div class='right-ear'><h3>Right Ear</h3><p>Indication of hearing loss</p>" .
            $progress_right .
            "</div>";
        $message .= "</div>";
        $message .= "</div>";
    } else {
        $message =
            "<div class='hearing_loss_result'><h2 class='hl_head'>No Results!</h2></div>";
    }
    return $message;
}



// Get GHX results from DB
function getGHXresults()
{
    $api   = new AudigyWp();

    $guid  = intval($_REQUEST["guid"]);

    if (isset($guid) && $guid != "") {
        $data = $api->get_user_meta($guid);

        if (empty($data)) {
            global $wpdb;
            $prepare_guery = $wpdb->prepare(
                "SELECT post_id FROM $wpdb->postmeta where meta_key ='guid' and meta_value = '" .
                    $guid .
                    "'"
            );
            $get_values = $wpdb->get_col($prepare_guery);

            $result["left"] = get_post_meta(
                $get_values[0],
                "left_analyze",
                true
            );
            $result["right"] = get_post_meta(
                $get_values[0],
                "right_analyze",
                true
            );
        } else {
            $result["left"] = $data["userdata"]->experimentData->Left->analyze;
            $result["right"] =
                $data["userdata"]->experimentData->Right->analyze;
            $result["zip"] = $data["userdata"]->zipcode;
        }

        return $result;
    }
}



// Location Directory Search Result Videos
function ghx_test_user_videos()
{
    $data = getGHXresults();

    $left_data  = sanitize_text_field($_GET["left"]);
    $right_data = sanitize_text_field($_GET["right"]);

    if (isset($data["left"]) || isset($data["right"])) {
        $left = $data["left"];
        $right = $data["right"];

        if ($left == "ProfoundImpairment" || $right == "ProfoundImpairment") {
            $video = "2or1hy3p38";
        } elseif ($left == "SevereImpairment" || $right == "SevereImpairment") {
            $video = "ztkq76fzn8";
        } elseif (
            $left == "ModerateImpairment" ||
            $right == "ModerateImpairment"
        ) {
            $video = "zwe6h42g7b";
        } elseif ($left == "SlightImpairment" || $right == "SlightImpairment") {
            $video = "lbw5a24bdk";
        } elseif ($left == "NoImpairment" || $right == "NoImpairment") {
            $video = "gc7y6a0kpe";
        } else {
            $video = "gc7y6a0kpe";
        }
    } elseif (!isset($left_data) && !isset($right_data)) {
        $video = "6d15ndbqx1";
    }
    $message = "";

    if (isset($video) && $video != "") {
        $message .= "<div class='video-container'>";
        $message .=
            '<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
         <div class="wistia_embed wistia_async_' .
            $video .
            ' videoFoam=true" style="height:360px;position:relative;width:640px"></div>';
        $message .= "</div>";
    } else {
        $message =
            "<div class='hearing_loss_result'><h2 class='hl_head'>No Results!</h2></div>";
    }
    return $message;
}
add_shortcode("ghx_test_user_videos", "ghx_test_user_videos");


add_action("admin_init", "add_email_content");

// GHX Built-in Form email content
function add_email_content()
{
    $forme_email_content = get_option("forme_email_content", true);
    $lovedone_email_content = get_option("lovedone_email_content", true);
    $savemyspot_email_content = get_option("savemyspot_email_content" . true);

    if ($forme_email_content == "") {
        $default_forme_email_content = 'Dear {FirstName},

  Congratulations on completing the Guided Hearing Experience. You can review your results at any time via this link: [view-my-results]
  
  To help ensure your hearing concerns are addressed, and establish a baseline from which you can measure changes over time, we recommend you see a professional for an evaluation!
  
  Sincerely,
  {SiteName}
  
  [contact-button url="#"]Contact Us[/contact-button]';

        update_option("forme_email_content", $default_forme_email_content);
    }

    if ($savemyspot_email_content == "") {
        $default_savemyspot_email_content = "Dear {FirstName},

    You're only a few clicks away from completing your online screener at {SiteName}! Please click the link below, and we'll return you exactly where you left off.
    
    Return to the {link}
    
    Sincerely,
    {SiteName}";

        update_option(
            "savemyspot_email_content",
            $default_savemyspot_email_content
        );
    }

    if ($lovedone_email_content == "") {
        $default_lovedone_email_content = 'Dear {FirstName},

    Thank you for taking the time to share information about your <span class="il">loved</span> <span class="il">one</span> with us. Supporting a <span class="il">loved</span> <span class="il">one</span> through hearing challenges is an important step toward improving their quality of life.
    
    To help you start the conversation, here are helpful resources about hearing loss.
    <ul>
       <li style="list-style-type: none;">
    <ul>
       <li><b>Supporting a <span class="il">Loved</span> <span class="il">One</span> with Hearing Loss:</b> <a>Learn how to support and motivate</a> your <span class="il">loved</span> <span class="il">one</span> who may be experiencing hearing loss.</li>
    </ul>
    </li>
    </ul>
    <ul>
       <li style="list-style-type: none;">
    <ul>
       <li><b>How to Talk about Hearing Loss:</b> Get <a>some tips</a> and ideas to help spark the conversation about hearing loss.</li>
    </ul>
    </li>
    </ul>
    <ul>
       <li style="list-style-type: none;">
    <ul>
       <li><b>Understanding the Causes, Types, and Signs of Hearing Loss:</b> Learn about the factors that contribute to hearing loss and the early signs.</li>
    </ul>
    </li>
    </ul>
    Here are some resources that you can share with your <span class="il">loved</span> <span class="il">one</span>:
    <ul>
       <li style="list-style-type: none;">
    <ul>
       <li><b>Take Our Online Screener:</b> Take our <a>online screener</a> to get a personalized hearing profile and recommendations for the road ahead.</li>
    </ul>
    </li>
    </ul>
    Remember that we’re here to support you and your <span class="il">loved</span> <span class="il">one</span> every step of the way. If you have any questions or need additional guidance, please don’t hesitate to reach out.
    
    Sincerely,
    {SiteName}';

        update_option(
            "lovedone_email_content",
            $default_lovedone_email_content
        );
    }
}


function contact_button($atts, $content)
{
    $contact_url = get_option("contact_url");

    $button =
        '<p align="left" class="contact-button" style=""><a href="' .
        $contact_url.
        '" style="background: #6548c5;
   padding: 15px 20px 15px 20px;
   border-radius: 50px;
   color: #fff;
   text-decoration: none;
   font-size: 14px;
   text-transform: uppercase;
   margin-bottom: 20px;
   display: inline-block;">' .
        $content .
        "</a></p>";
    return $button;
}
add_shortcode("contact-button", "contact_button");




// Adding conact URL from settings in the results page
function add_contact_url()
{
    $contact_url = get_option("contact_url", true);

    return '<div class="wp-block-buttons"><!-- wp:button --><div class="wp-block-button">
  <a class="wp-block-button__link wp-element-button" href="' .
        $contact_url .
        '">Contact Us</a></div><!-- /wp:button --></div>';
}
add_shortcode("contact_url", "add_contact_url");

?>