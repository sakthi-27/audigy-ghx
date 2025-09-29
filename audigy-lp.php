<?php
// If this file is called directly, abort.
if (!defined("WPINC")) {
    die();
}

// Add Plugin Options Page
require_once plugin_dir_path(__FILE__) . "admin/audigy-lp-options-page.php";
require_once plugin_dir_path(__FILE__) . "inc/audigy-email-logs.php";
require_once plugin_dir_path(__FILE__) . "inc/audigy-lp-api.php";

class GHXApi
{
    public $plugin, $version, $ajax;

    public function __construct()
    {
        $this->plugin = plugin_basename(__FILE__);
        $this->version = "1.0.1";
        $this->ajax = new AudigyLp_Api();
    }

    public function register()
    {
        add_action("wp_enqueue_scripts", [$this, "audigy_lp_scripts_method"]);

        add_action("wp_ajax_save_data_to_lp", [$this->ajax, "save_data_to_lp"]);
        add_action("wp_ajax_nopriv_save_data_to_lp", [
            $this->ajax,
            "save_data_to_lp",
        ]);

        add_action("wp_ajax_fetch_location_data", [
            $this->ajax,
            "fetch_location_data",
        ]);
        add_action("wp_ajax_nopriv_fetch_location_data", [
            $this->ajax,
            "fetch_location_data",
        ]);

        add_action("wp_ajax_save_spot", [$this->ajax, "save_spot"]);
        add_action("wp_ajax_nopriv_save_spot", [$this->ajax, "save_spot"]);

        add_action("wp_ajax_get_spot_data", [$this->ajax, "get_spot_data"]);
        add_action("wp_ajax_nopriv_get_spot_data", [
            $this->ajax,
            "get_spot_data",
        ]);

        add_action("wp_ajax_get_lp_token", [$this->ajax, "get_lp_token"]);
        add_action("wp_ajax_nopriv_get_lp_token", [
            $this->ajax,
            "get_lp_token",
        ]);

        add_action("wp_ajax_get_lp_data_by_id", [
            $this->ajax,
            "get_lp_data_by_id",
        ]);
        add_action("wp_ajax_nopriv_get_lp_data_by_id", [
            $this->ajax,
            "get_lp_data_by_id",
        ]);

        add_action("wp_ajax_lp_api_failed_to_save", [
            $this->ajax,
            "lp_api_failed_to_save",
        ]);
        add_action("wp_ajax_nopriv_lp_api_failed_to_save", [
            $this->ajax,
            "lp_api_failed_to_save",
        ]);

        add_action("wp_ajax_get_ghx_options", [$this->ajax, "get_ghx_options"]);
        add_action("wp_ajax_nopriv_get_ghx_options", [
            $this->ajax,
            "get_ghx_options",
        ]);

        add_action("wp_ajax_get_ghx_nf", [$this->ajax, "get_ghx_nf"]);
        add_action("wp_ajax_nopriv_get_ghx_nf", [$this->ajax, "get_ghx_nf"]);

        add_action("init", [$this, "reg_api_details"]);

        // Add setting menu in plugin page
        add_filter("plugin_action_links_" . plugin_basename(__FILE__), [
            $this,
            "settings_link",
        ]);
    }

    public function reg_api_details()
    {

        $ENV = esc_attr(get_option("env_val", true));

        $token_base_ur = get_option($ENV . "_token_url");
        $lp_base_url = get_option($ENV . "_lead_url");
        $client_id = get_option($ENV . "_client_id");
        $secret_id = get_option($ENV . "_secret_key");

        $auth_token = base64_encode($client_id . ":" . $secret_id);

        define("LP_TOKEN_URL", $token_base_ur);
        define("LP_LEAD_URL", $lp_base_url);
        define("LP_AUTH_TOKEN", $auth_token);
    }

    public function audigy_lp_scripts_method()
    {
        global $post;
        wp_enqueue_script(
            "audigy-lp-script",
            plugin_dir_url(__FILE__) . "js/audigy-lp-scripts.js",
            ["jquery"],
            243.73,
            true
        );
        wp_localize_script("audigy-lp-script", "lp_plugin", [
            "loc_id" => $post->ID,
            "home_url" => get_bloginfo("url"),
        ]);

        // Plugin Styles
        wp_enqueue_style(
            "audigy-lp-styles",
            plugin_dir_url(__FILE__) . "css/style.css",
            [],
            221.44,
            "all"
        );
    }

    public function settings_link($links)
    {
        $settings_link =
            '<a href="admin.php?page=audigy-lp-settings">Settings</a>';
        array_push($links, $settings_link);
        return $links;
    }
}

if (class_exists("GHXApi")) {
    $audigyLPPlugin = new GHXApi();
    $audigyLPPlugin->register();
}

// Create custom table while plugin installation
function create_lp_custom_table()
{
    global $table_prefix, $wpdb;

    $tblname = "lp_email_logs";
    $lp_email_logs = $table_prefix . "$tblname ";

    #Check to see if the table exists already, if not, then create it
    if ($wpdb->get_var("show tables like '$lp_email_logs'") != $lp_email_logs) {
        $sql = "CREATE TABLE $lp_email_logs (
      		id BIGINT NOT NULL,
      		email varchar(255),
      		createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      		PRIMARY KEY  (id)
      	);";

        require_once ABSPATH . "/wp-admin/includes/upgrade.php";
        dbDelta($sql);
    }

    $tblname = "contact_provider_leads";
    $contact_provider_leads = $table_prefix . "$tblname ";

    #Check to see if the table exists already, if not, then create it

    if (
        $wpdb->get_var("show tables like '$contact_provider_leads'") !=
        $contact_provider_leads
    ) {
        $sql = "CREATE TABLE $contact_provider_leads (
      		id BIGINT NOT NULL,
      		location_id int,
      		origin varchar(200),
      		status varchar(200),
      		createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      		PRIMARY KEY  (id)
      	);";

        require_once ABSPATH . "/wp-admin/includes/upgrade.php";
        dbDelta($sql);
    }
}

register_activation_hook(__FILE__, "create_lp_custom_table");

function admin_css()
{
    $ghx_form1 = get_option("ghx_form", true);

    $img_url =
        "/wp-content/plugins/audigy-ghx/templates/admin/assets/ghx_icon.webp";

    if ($ghx_form1 == "Ninja Forms" && $ghx_form1 != 1) {
        echo "<style type='text/css'>#toplevel_page_audigy-ghx .wp-first-item+li{display:none;}</style>";
    }

    echo "<style type='text/css'>
    #custom-admin-popup p{
     font-size:16px;
    }
    
    .link_info{
      margin-top: 8px;
      background:#f6f7f7;
      line-height: 1.5;
      width: 100%;
      display: inline-block;
      border: 1px solid #c3c4c7;
      padding: 8px 2%;
    }
    .rcom_txt{
      color: #333;
      opacity: 0.7;
      padding-top: 10px;
      margin-top: 0px;
      display: inline-block;
    }
    li.wp-has-submenu.toplevel_page_audigy .wp-menu-image:before{
        width: 20px !important;
        height: 20px !important;
        background:url('" .
        $img_url .
        "');
        content:'';
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
    }
    li.wp-has-submenu.toplevel_page_audigy:hover .wp-menu-image:before{
      background:url('/wp-content/plugins/audigy-ghx/templates/admin/assets/hover_ghx_icon.webp');
      background-position: center;
      background-size: 20px;
      width: 20px !important;
      height: 20px !important;
      background-repeat: no-repeat;
    }
    #example_length select[name='example_length']{
     width:60px;
    }
    #example_wrapper{
     max-width:98%;
    }
    .userData  tr > th.numeric-col:after{
      content: ' HZ';
    }
    .userData > td tr > th,.experimentData > td tr > th,.lpData > td tr > th{
      width:170px;
    }
    .userData tr tr th:after{
      content: '';
    }
    .userData > th,.experimentData > th,.lastPage > th,.step_num > th,.step > th,.sub_step > th,.lpData > th,.left_ear > th,.right_ear > th{
      padding-left:12px;
    }
    #ninja_form_json_data table tr td td td,  #ninja_form_json_data table tr td td th{
      padding-left: 0px;
      padding-top: 0px; padding-bottom:12px;
    }
    .experiment tr th:after{
      content: ' HZ';
    }
    .experiment tr td{
     font-style:italic;
    }
    .experiment tr td:after{
      content: ' dB HL';
    }
    #toplevel_page_audigy-ghx img{
      width:22px;margin-top:4px;
    }
    .main-row.result th, .main-row.version th{
      width:90px;
    }
    .experiment td th{
     width:100px !important;
    }
    .userData > td,.experimentData > td,.lpData > td{
      padding:0px;
    }
    .userData > td > table th,.experimentData  > td > table th,.lpData  > td > table th{
      border-left:0px !important;
      border-top:0px !important;
    }
    .userData > td > table tr:last-child th,.experimentData  > td > table tr:last-child th,.lpData  > td > table tr:last-child th{
      border-bottom:0px !important;
    }
    .userData > td > table td,.experimentData  > td > table td,.lpData  > td > table td{
      border-right:0px !important;
      border-top:0px !important;
    }
    .userData > td > table tr:last-child td,.experimentData  > td > table tr:last-child td,.lpData  > td > table tr:last-child td{
      border-bottom:0px !important;
    }
    
    #ninja_form_json_data .main-row .main-row th{ background:none !important;}

    .nf-sub-custom-fields-table tr:last-child, .nf-sub-custom-fields-table tr:nth-child(6){display:none;} 
    #ninja_form_json_data .main-row{padding:30px 0px !important} 
    #ninja_form_json_data .main-row tr{ border:0px !important;}
    #ninja_form_json_data .inside{
      padding:0px;margin:0px;
    }
    .nf-sub-custom-fields-table th, .nf-sub-custom-fields-table td {
      padding: 0px;
      vertical-align: top;
      padding-left: 1px !important;
      padding-bottom: 2px !important;
  }
  .nf-sub-custom-fields-table td:first-child{
width:173px !important;
  }
	</style>";



echo '<script>

jQuery(document).ready(function(){


    

    /*jQuery(document).on("click", ".nf-close-drawer", function(e) {
      
        e.preventDefault();


        setTimeout(function() {
            emailString = jQuery("#to").val();

        alert(emailString);
        }, 400);

        

        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        alert(regex.test(emailString));


    });*/
    
    jQuery("#submit").click(function(e){
        const url = new URL(window.location.href);
        url.searchParams.delete("reset");
        window.history.replaceState({}, "", url);
     });

});

</script>';

}
add_action("admin_head", "admin_css");

// Adding GHX Test Result meta box into NF submissions page
add_action("add_meta_boxes", "add_json_submission_metabox");
function add_json_submission_metabox()
{
    add_meta_box(
        "ninja_form_json_data",
        "GHX Screener Result",
        "ghx_ninja_json_metabox",
        "nf_sub", // 'nf_sub' is the CPT for Ninja Forms submissions
        "normal",
        "low"
    );
}

// Adding GHX Test Result meta box into NF submissions page
function ghx_ninja_json_metabox($post)
{
    if (!isset($post->ID)) {
        return;
    }

    $ghx_data = get_post_meta($post->ID);

    foreach ($ghx_data as $key => $data) {
        $check_json = json_decode($data[0]);

        if ($check_json->data) {
            $field_id = $key;
        }
    }

    if (!empty($ghx_data[$field_id])) {
        $pr_data = json_decode($ghx_data[$field_id][0]);

        echo display_data_as_table($pr_data->data, 1); // Pass your object here
    }
}

function get_protected_value($object, $propertyName)
{
    $reflection = new ReflectionClass($object);

    if ($reflection->hasProperty($propertyName)) {
        $property = $reflection->getProperty($propertyName);
        $property->setAccessible(true);
        return $property->getValue($object);
    }
    return null;
}

// Displaying User submitted data under NF submission
function display_data_as_table($data, $adddata = null)
{
    if (is_object($data)) {
        $data = (array) $data;
    }
    if ($adddata) {
        $html = '<script type="text/javascript"> 
jQuery(document).ready(function($){

    $(".expand_data span").click(function(){ 

      
      var isVisible = $(".main-row").is(":visible");

      if(isVisible)
      $(".main-row").hide("400");
      else
      $(".main-row").show("400");

      $(this).text(isVisible ? "Show" : "Hide"); });  

      $(".main-row table table").attr("border","0")  
    
    } ); </script>';

        $html .= '<style type="text/css">.main-row{display:none;}</style>';
    }
    
    $guid = $data["lpData"]->id;


    //if(empty($data["lpData"]))
    //$html .= '<style type="text/css">#ninja_form_json_data{display:none;}</style>';

    $html .=
        '<table border="1" cellpadding="6" cellspacing="0" style="width:100%;border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;border:0px;">';

    $left_analyze = get_post_meta(get_the_id(), "left_analyze", true);

    $add_type = $left_analyze != "" ? "for-me" : "loved-one";

    //$guid =  get_post_meta(get_the_id(),'guid',true);
    $url =
        get_bloginfo("url") .
        "/guided-hearing-experience/results/" .
        $add_type .
        "/?guid=" .
        $guid;

    if ($adddata) {
        $html .=
            '<tr><th style="background-color:#f6f7f7;padding-left:12px; width:160px;text-align: left; vertical-align: top;">GUID Result</th><td><a href="' .
            $url .
            '" target="_blank">' .
            $guid .
            "</td></tr>";
        
        if(get_post_meta(get_the_id(), "left_analyze", true))    
        $html .=
            '<tr><th style="background-color:#f6f7f7;padding-left:12px; text-align: left; vertical-align: top;">Left Ear </th><td>' .
            get_post_meta(get_the_id(), "left_analyze", true) .
            "</td></tr>";

        if(get_post_meta(get_the_id(), "right_analyze", true))        
        $html .=
            '<tr><th style="background-color:#f6f7f7;padding-left:12px; text-align: left; vertical-align: top;">Right Ear</th><td>' .
            get_post_meta(get_the_id(), "right_analyze", true) .
            "</td></tr>";
    }

    if ($adddata) {
        $html .=
            '<tr class="show_test_data"><td style="background-color:#f6f7f7;padding-left:12px; "><h4 style="font-size: 14px;margin: 0px;padding:0px;">Screener Data</h4></td><td class="expand_data" ><span style="cursor: pointer;color: #2271b1;text-decoration: underline;">Show</span></td></tr>';
    }

    foreach ($data as $key => $value) {
        $html .=
            '<tr class="main-row ' .
            $key .
            '" style="border-bottom:1px solid #ccc;margin-bottom:30px;">';

        $add_key = is_numeric($key) && $key < 5 ? "" : $key;

        $add_key = $add_key == "hz" ? "<i>dB HL</i>" : $add_key;

        $add_numeric = is_numeric($key) ? 'class="numeric-col"' : "";

        if ($value) {
            if ($add_key) {
                $html .=
                    '<th style="background-color:#f6f7f7;text-align: left; vertical-align: top;" ' .
                    $add_numeric .
                    ">" .
                    $add_key .
                    "</th>";
            }

            $html .= "<td>";

            if (is_array($value) || is_object($value)) {
                $html .= display_data_as_table($value); // Recursive call for nested structure
            } else {
                $html .= $value;
            }
        }

        $html .= "</td></tr>";
    }

    $html .= "</table>";
    return $html;
}

// Adding Dynamic redirection url for NF
/*add_action( 'ninja_forms_after_submission', 'custom_ninja_forms_after_submission',10,1);

function custom_ninja_forms_after_submission( $form_data ){

    $sub_id = $form_data['actions']['save']['sub_id'];

    $guid = get_post_meta($sub_id,'guid',true);
    
    $type = ( $form_data['settings']['title'] == 'GHX - For Me' ) ? 'for-me' : 'loved-one';


    $fields = $form_data['fields'];
    $email = '';
    $name = '';
    
    foreach ($fields as $field) {
        if ('email' == $field['type']) {
            $email = $field['value'];
        }
        if ('firstname' == $field['type']) {
            $name = $field['value'];
        }
    }

    if($type=='for-me' || $type=='loved-one'){
      $url =  get_bloginfo("url").'/guided-hearing-experience/results/'.$type.'/?guid='.$guid;
    }
    else {
      $url =  get_bloginfo("url").'/thankyou';
    }    
       
}*/

// Insert ninja form for "For Me", "Loved One", "Save My Spot"
function create_dynamic_ninja_form_with_email_action()
{
    /*if (get_option("ghx_form", true) != "Ninja Forms") {
        return;
    }*/

    if( isset($_REQUEST['reset']) && $_REQUEST['reset']==1 ) {  
        return;
    }

    global $wpdb;

    $for_me = $wpdb->get_results(
      $wpdb->prepare(
          "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
          'GHX - For Me'
      )
    );

    if (empty($for_me)) {
        fn_insert_form("GHX - For Me");
    }

    $loved_one = $wpdb->get_results(
      $wpdb->prepare(
          "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
          'GHX - Loved One'
      )
    );

    if (empty($loved_one)) {
        fn_insert_form("GHX - Loved One");
    }

    $save_my_spot = $wpdb->get_results(
      $wpdb->prepare(
          "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
          'GHX - Save My Spot'
      )
    );
  
    if (empty($save_my_spot)) {
        fn_insert_form("GHX - Save My Spot");
    }

    $nf_for_me = get_option("nf_GHX - For Me");
    $nf_loved_one = get_option("nf_GHX - Loved One");
    $nf_save_spot = get_option("nf_GHX - Save My Spot");

    if (
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
              'ghx',
              'publish'
          ),
          "ARRAY_A"
      )
    ) {
        // create post object
        $page = [
            "post_title" => __("GHX", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
        ];

        // insert the post into the database
        $ghx_postId = wp_insert_post($page);
    }
    else {

     $ghx_post_idd = $wpdb->get_row( $wpdb->prepare(
            "SELECT ID FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
            'ghx',
            'publish'
           ), "ARRAY_A" );

          $ghx_postId = $ghx_post_idd['ID'];

    }       

    if (
        $ghx_postId != "" &&
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
              'save-my-spot-success',
              'publish'
          ),
          "ARRAY_A"
      )
      
    ) {
        // create post object
        $page = [
            "post_title" => __("Save My Spot Success", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ghx_postId,
            "post_content" =>
                "<p>Your spot on the screener has been saved! Check your email for a link to pick up right where you left off.</p>",
        ];

        // insert the post into the database
        $lid = wp_insert_post($page);

        update_option("savemyspot-redirect", get_permalink($lid), true);
    }

    if (
        $ghx_postId != "" &&
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_parent = %d AND post_status = %s",
              'for-me',
              $ghx_postId,
              'publish'
          ),
          "ARRAY_A"
      )      
    ) {
        $for_me =
            '[ghx-nf-form id="' .
            $nf_for_me .
            '" title="For Me" desc="Please provide your email and phone number and we\'ll send your complete hearing profile results and other helpful content about hearing that will help you make informed decisions about your hearing health. Our communications will always include an unsubscribe option. Congratulations on taking proactive steps in your hearing health journey!"]';

        // create post object
        $page = [
            "post_title" => __("For Me", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ghx_postId,
            "post_content" => $for_me,
        ];

        // insert the post into the database
        $postId = wp_insert_post($page);

        update_option("for-me-form", get_permalink($postId) . "?ghx-test=true");
    }

    if (
        $ghx_postId != "" &&
        null === $wpdb->get_row(
            $wpdb->prepare(
                "SELECT post_name 
                FROM {$wpdb->prefix}posts 
                WHERE post_name = 'loved-one' 
                  AND post_parent = %d 
                  AND post_status = 'publish'",
                $ghx_postId  // Parent post ID (integer)
            ),
            "ARRAY_A"
        )
    ) {
        $for_me =
            '[ghx-nf-form id="' .
            $nf_loved_one .
            '" title="Loved One" desc="Please provide your email and phone number and we\'ll send your complete hearing profile results and other helpful content about hearing that will help you make informed decisions about your hearing health. Our communications will always include an unsubscribe option. Congratulations on taking proactive steps in your hearing health journey!"]';

        // create post object
        $page = [
            "post_title" => __("Loved One", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ghx_postId,
            "post_content" => $for_me,
        ];

        // insert the post into the database
        $postId = wp_insert_post($page);

        update_option(
            "loved-one-form",
            get_permalink($postId) . "?ghx-test=true"
        );
    }

    if (
        $ghx_postId != "" &&
        null ===
            $wpdb->get_row(
                "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = 'save-my-spot' AND post_parent = '" .
                    $ghx_postId .
                    "' AND post_status='publish'",
                "ARRAY_A"
            )
    ) {
        $for_me =
            '[ghx-nf-form id="' .
            $nf_save_spot .
            '" title="Save My Spot" desc="Please provide your email, and we\'ll send you a reminder with a link that takes you right back to where you left off in our Guided Hearing Experience. You\'ll also receive helpful content about hearing that will help you make informed decisions. Our communications always include an option to unsubscribe." backbutton="1"]';

        // create post object
        $page = [
            "post_title" => __("Save My Spot", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ghx_postId,
            "post_content" => $for_me,
        ];

        // insert the post into the database
        $postId = wp_insert_post($page);

        update_option(
            "savemyspot-form",
            get_permalink($postId) . "?ghx-test=true"
        );
    }
}

//add_action("init", "create_dynamic_ninja_form_with_email_action");


function reset_nf_forms(){


  update_option("for-me-form",get_bloginfo('url')."/ghx/for-me/?ghx-test=true");
  update_option("loved-one-form",get_bloginfo('url')."/ghx/loved-one/?ghx-test=true");
  update_option("savemyspot-form",get_bloginfo('url')."/ghx/save-my-spot/?ghx-test=true");

  if( isset($_REQUEST['reset']) && $_REQUEST['reset']==1 ) {  


    $url = get_option("for-me-form");
    $for_me_post_id = url_to_postid($url);

    $url = get_option("loved-one-form");
    $loved_one_post_id = url_to_postid($url);

    $url = get_option("savemyspot-form");
    $savemy_spot_post_id = url_to_postid($url);


    $nf_for_me = get_option("nf_GHX - For Me");
    $nf_loved_one = get_option("nf_GHX - Loved One");
    $nf_save_spot = get_option("nf_GHX - Save My Spot");

    $form_ids = [$nf_for_me,$nf_loved_one,$nf_save_spot];

    foreach($form_ids as $id){
        $form_id = $id; // Replace '1' with the actual ID of your form
        Ninja_Forms()->form( $form_id )->delete();
    }

    update_option("nf_GHX - For Me","");
    update_option("nf_GHX - Loved One","");
    update_option("nf_GHX - Save My Spot","");

    wp_delete_post($for_me_post_id);
    wp_delete_post($loved_one_post_id);
    wp_delete_post($savemy_spot_post_id);

  }

}
add_action("init", "reset_nf_forms");


// Adding results URL and Backend Submission URL to NF Provider Email
function custom_email_body_content($message, $data, $action_settings)
{
    $sub_id = $data["actions"]["save"]["sub_id"];

    $type =
        $data["settings"]["title"] == "GHX - For Me" ? "for-me" : "loved-one";

    $sub_data = [];

    $form_data = $data;

    $nf_for_me = get_option("nf_GHX - For Me");
    $nf_loved_one = get_option("nf_GHX - Loved One");
    $nf_save_spot = get_option("nf_GHX - Save My Spot");

    if (
        isset($form_data["form_id"]) &&
        ($form_data["form_id"] == $nf_for_me ||
            $form_data["form_id"] == $nf_loved_one ||
            $form_data["form_id"] == $nf_save_spot)
    ) {
        foreach ($form_data["fields"] as $field) {
            if ($field["type"] != "textbox" && $field["type"] != "submit") {
                $sub_data[$field["type"]] = $field["value"];
            }

            if ($field["key"] == "json_data") {
                $testdata = json_decode($field["value"]);

                if ($form_data["form_id"] == $nf_save_spot) {
                    $sd = $testdata->id;
                } else {
                    $sd = $testdata->data->lpData->id;
                }

                update_post_meta($sub_id, "guid", $sd);
                update_post_meta(
                    $sub_id,
                    "left_analyze",
                    $testdata->data->lpData->screenerResults->result[0]->Left
                        ->analyze
                );
                update_post_meta(
                    $sub_id,
                    "right_analyze",
                    $testdata->data->lpData->screenerResults->result[0]->Right
                        ->analyze
                );
            }
        }
    }

    $guid = get_post_meta($sub_id, "guid", true);

    $cus_msg = "";

    if ($form_data["form_id"] == $nf_save_spot) {
        $cus_msg =
            '<p style="margin-top:-10px;"><br>Return to the <a href="' .
            get_bloginfo("url") .
            "/?savedSpot=" .
            $guid .
            '">Online Screener.</a></p>';
    } else {
        if ($action_settings["label"] == "Provider Email") {
            $cus_msg =
                '<p style="margin-top:-10px;">
                View the <a href="' .
                get_bloginfo("url") .
                "/guided-hearing-experience/results/" .
                $type .
                "/?guid=" .
                $guid .
                '">hearing screener results</a>
                <br><br>Click on the <a href="' .
                get_bloginfo("url") .
                "/wp-admin/post.php?post=" .
                $sub_id .
                '&action=edit">link</a> to see complete user data<br><br></p>';

        }

        if ($action_settings["label"] == "User Email") {
            $cus_msg =
                '<p style="margin-top:-10px;"><br>View the <a href="' .
                get_bloginfo("url") .
                "/guided-hearing-experience/results/" .
                $type .
                "/?guid=" .
                $guid .
                '">hearing screener results</a></p>';
        }

        $cus_msg = '';
    }

    $form_data = [];

    foreach ($data["fields"] as $key => $field) {
        $form_data[$field["key"]] = $field["value"];
    }

    // Return the modified HTML email body
    return do_shortcode($message);
}

add_filter(
    "ninja_forms_action_email_message",
    "custom_email_body_content",
    10,
    3
);

// Insert ninja form for "For Me", "Loved One", "Save My Spot"
function fn_insert_form($type)
{
    if ($type == "GHX - For Me") {
        $json_file = "for_me";
    } elseif ($type == "GHX - Loved One") {
        $json_file = "loved_one";
    } elseif ($type == "GHX - Save My Spot") {
        $json_file = "save_my_spot";
    }


   

    global $wpdb;

    $sql = $wpdb->prepare(
        "INSERT INTO `" .
            $wpdb->prefix .
            "nf3_forms`      
    (`title`,`created_at`,`form_title`) 
     values ('" .
            $type .
            "','" .
            date("Y-m-d h:i:s a", time()) .
            "','" .
            $type .
            "')"
    );

    $wpdb->query($sql);
    $forme_id = $wpdb->insert_id;

    $embed_form = '[ninja_form id="' . $forme_id . '"]';

    if ( is_multisite() ) { 
       $file_path =  network_home_url();
    } else {
       $file_path =  get_bloginfo('url');
    }

    $formContentData = file_get_contents(
        $file_path .
            "/wp-content/plugins/audigy-ghx/json_data/" .
            $json_file .
            "_form_data.json"
    );
    $formcache = file_get_contents(
        $file_path .
            "/wp-content/plugins/audigy-ghx/json_data/" .
            $json_file .
            "_cache_data.json"
    );



    $meta_values[] = ["embed_form", $embed_form, "embed_form", $embed_form];
    $meta_values[] = [
        "formContentData",
        $formContentData,
        "formContentData",
        $formContentData,
    ];
    $meta_values[] = ["hide_complete", "0", "hide_complete", "0"];
    $meta_values[] = ["clear_complete", "0", "clear_complete", "0"];

    foreach ($meta_values as $val) {

        $sql = $wpdb->prepare(
            "INSERT INTO `" .
                $wpdb->prefix .
                "nf3_form_meta`      
          (`parent_id`,`key`,`value`,`meta_key`,`meta_value`)
          values ('" .
                $forme_id .
                "','" .
                $val[0] .
                "','" .
                $val[1] .
                "','" .
                $val[2] .
                "','" .
                $val[3] .
                "')"
        );

        $wpdb->query($sql);
    }

    $sql = $wpdb->prepare("INSERT INTO `" .$wpdb->prefix ."nf3_upgrades` (`id`,`cache`,`stage`) values ('" .$forme_id ."','" .$formcache ."','1')");

    $wpdb->query($sql);

    update_option("nf_" . $type, $forme_id);
}

// Ninja Form Shortcode integration into the For Me, Loved One, Save My Spot pages
function add_nf_page_content($attr)
{
    if (!isset($_REQUEST["ghx-test"]) && !is_admin()) {
        echo '<script type="text/javascript">window.location="' .
            get_bloginfo("url") .
            '"</script>';
        exit();
    }

    $nf_save_spot = get_option("nf_GHX - Save My Spot");

    if (isset($attr["backbutton"]) && $attr["backbutton"] == 1) {
        $add_button =
            '<br><button class="savemyspot-back" style="position: absolute;bottom: 20px;width: 75px;padding-right: 14px;"><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-left theme--light"></i> Back</button>';
    }

    $add_restart =
        $nf_save_spot == $attr["id"]
            ? '<br><br>If you\'d like to restart the experience, simply click or tap <a href="' .
                $_SERVER["HTTP_REFERER"] .
                '">Restart.</a>'
            : "";

    $form =
        '<div class="ghx-nf-cont"><div class="ghx-app nf_page_form"><div class="ghx-audigy-app-modal1">
  <div class="nf_intro_txt">
  <div class="nf-form-title">' .
        $attr["title"] .
        '</div><div class="ghx-header-right">
  <div class="ghx-stepper--header-wrapper pl-md-6 pl-sm-0 pl-0 pt-0 pr-0 pb-0 col-md-7 col-lg-7 col col-12" bis_skin_checked="1">
  <span class="v-stepper__step__step navy"><i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light"></i></span>
  <span class="v-stepper__step__step navy"><i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light"></i></span>
  <span class="v-stepper__step__step navy"><i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light"></i></span>
  <span class="v-stepper__step__step navy last-step"><i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light"></i></span>
  </div>
  </div> </div>
  <div class="ghx-audigy-app-content v-card v-card--flat v-sheet theme--light">
  <div class="ghx-form-left">' .
        $attr["desc"] .
        $add_button .
        '</div>
  <div class="ghx-form-right">[ninja_form id=' .
        $attr["id"] .
        "]</div></div></div></div></div>";

    $form .=
        '<script type="text/javascript">jQuery(".savemyspot-back").click(function(){ window.location="' .
        get_bloginfo("url") .
        '"  });</script>';

    return do_shortcode($form);
}

add_shortcode("ghx-nf-form", "add_nf_page_content");

function custom_redirects()
{
    $ref_url = explode("/", $_SERVER["HTTP_REFERER"]);
    $ref_url = array_filter($ref_url);
    $home_url = home_url();

    if (is_page("ghx")) {
        wp_redirect(home_url());
        die();
    }
}
add_action("template_redirect", "custom_redirects");



function add_results_url($attr){

  return "<p style='margin-top:0px;'><br>View the <a href='".get_bloginfo("url") ."/guided-hearing-experience/results/" .$attr['type'] ."/?guid=" .$attr['guid'] ."'>hearing screener results</a></p>";

}
add_shortcode('add-results-url','add_results_url');

function save_myspot_url($attr){

    $guid = $attr['guid'];

    $page_url = get_option("in_page_url");

    return "<p style='margin-top:0px;'><br>Return to the <a href='".$page_url."/?savedSpot=".$guid."'>Online Screener.</a></p>";
  
  }
  add_shortcode('save-myspot-url','save_myspot_url');

// Suggested settings pop up
add_action("admin_footer", function () {
    $step_1 = plugin_dir_url(__FILE__) . "assets/images/step_1.png";
    $step_2 = plugin_dir_url(__FILE__) . "assets/images/step_2.png";
    $step_3 = plugin_dir_url(__FILE__) . "assets/images/step_3.png";
    $step_4 = plugin_dir_url(__FILE__) . "assets/images/step_4.png";
    $step_5 = plugin_dir_url(__FILE__) . "assets/images/step_5.png";
    $step_6 = plugin_dir_url(__FILE__) . "assets/images/step_6.png";
    $step_7 = plugin_dir_url(__FILE__) . "assets/images/step_7.png";
    ?>
  <div id="custom-admin-popup" style="display:none;width:90%;height:90vh;overflow:scroll; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:#fff; padding:20px; border:1px solid #ccc; box-shadow:0 0 10px rgba(0,0,0,0.1); z-index:99999;">
  <button id="close-popup" style="padding:5px 10px; float:right;background:#0073aa; color:#fff; border:none; cursor:pointer;">X</button>
  
      <h2>Ninja Form Email & Actions Settings</h2>
      <p><b>We need to configure the following actions for the GHX Ninja Forms:</b></p>
      <p>
        1. Provider Email <br>
        2. User Email <br>
        3. Record Submission <br>
        4. Redirect <br>
      </p> 
      
      <h2>1. Provider Email</h2>
      <p>
     <b> Navigate to the "Emails & Actions" tab, then click the "Add New Action" link. On the right side, you'll see an "Email" button — click it to open the email form. Enter the details as shown in the screenshot below.</b>
<br><br>
<b>Action:</b> Provider Email<br>
<b>To:</b> You can either enter a specific email address or use the merge tag {wp:user_email}, which will automatically retrieve the admin email from <a href="<?php echo get_bloginfo(
    "url"
); ?>/wp-admin/options-general.php">here</a><br>
<b>Subject: </b> It can be anything<br>
<b>Email Message</b>: {fields_table}
<br>
<b style="font-size:14px;display: inline-block;margin-top: 10px;">Screening Results Shortcode:</b><br>
<p>For Me:    [add-results-url type="for-me" guid="{field:result_url}"]<br>
Loved One: [add-results-url type="loved-one" guid="{field:result_url}"]<br></p>
<b style="font-size:14px;display: inline-block;margin-top: 10px;">Save My Spot URL Shortcode:</b> [save-myspot-url guid="{field:guid}"]
</p>
       <div style="display:flex;">
        <img src="<?php echo $step_1; ?>" style="width:65%;">
        <img src="<?php echo $step_2; ?>" style="width:35%;">
       </div>
       <br>
      <hr>
       <h2>2. User Email</h2>
      <p>
      <b>Go to the "Emails & Actions" tab and click the "Add New Action" link. On the right side, click the "Email" button to open the email configuration form. Fill in the details as shown in the screenshot below.</b>
      <br><br>
      <b>Action:</b> User Email<br>
      <b>To:</b> Click the icon on the right side of the input box and select "Email" from the list, as shown in the screenshot.
      <br><b>Subject: </b> It can be anything<br>
      <b>Email Message</b>: {fields_table}<br>
      <b style="font-size:14px;display: inline-block;margin-top: 10px;">Screening Results Shortcode:</b><br>
      For Me:    [add-results-url type="for-me" guid="{field:result_url}"]<br>
      Loved One: [add-results-url type="loved-one" guid="{field:result_url}"]<br>
      <b style="font-size:14px;display: inline-block;margin-top: 10px;">Save My Spot URL Shortcode:</b> [save-myspot-url guid="{field:guid}"]
      </p>
       <div style="display:flex;">
        <img src="<?php echo $step_1; ?>" style="width:65%;">
        <img src="<?php echo $step_3; ?>" style="width:35%;">
       </div>

       <br>
      <hr>
       <h2>3. Record Submission</h2>
      <p>
       <b>Go to the "Emails & Actions" tab and click the "Add New Action" link. On the right side, click the "Record Submission" button to open the configuration form. Fill in the details as shown in the screenshot below.</b>
      </p>
       <div style="display:flex;">
        <img src="<?php echo $step_4; ?>" style="width:65%;">
        <img src="<?php echo $step_5; ?>" style="width:35%;">
       </div>

       <div class="rec-sub">
        <br>
        <hr>
        <h2>4. Redirect [ only for "GHX - For Me" & "GHX - Loved Ones" forms]</h2>
        <p>
        <b> Go to the Emails & Actions tab and click the Add New Action link. On the right side, click the Redirect button to open the form. Fill in the details as shown in the screenshot below.</b>
        <br><br>
        For the URL field, copy and paste the following:
        <br>
        <b>GHX - For Me : </b>
        <i>{wp:site_url}/guided-hearing-experience/results/for-me?guid={field:result_url}</i>
        <br>
        <b>GHX - Loved Ones : </b>
        <i>{wp:site_url}/guided-hearing-experience/results/loved-one?guid={field:result_url}</i>

        </p>
        <div style="display:flex;">
        <img src="<?php echo $step_6; ?>" style="width:65%;">
        <img src="<?php echo $step_7; ?>" style="width:35%;">
        </div>
       </div>
    
  </div>
  <div id="popupOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:10000;"></div>
  <script>
  jQuery(document).ready(function($) {
      // Show popup when link with class "show-popup" is clicked
      $('body').on('click', '.show-popup', function(e) {
          e.preventDefault();
          $('#custom-admin-popup,#popupOverlay').fadeIn();
      });
      
      // Close popup when close button is clicked
      $('#close-popup').click(function() {
          $('#custom-admin-popup,#popupOverlay').fadeOut();
      });
      
      // Close popup when clicking outside
      $(document).mouseup(function(e) {
          var popup = $('#custom-admin-popup');
          if (!popup.is(e.target) && popup.has(e.target).length === 0) {
              popup.fadeOut();
          }
      });
  });
  </script>
<?php
}); ?>