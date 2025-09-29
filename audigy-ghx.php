<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Audigy GHX Plugin by Prospus
 * Plugin URI:        https://prospus.com
 * Description:       The GHX plugin integrates with the GN BPTA API and Axian LP API to deliver a customized hearing screener for website visitors. Built in Vue.js as a WordPress plugin, it ensures seamless functionality and user-friendly interaction tailored to diverse requirements.
 * Version:           3.9.12.1
 * Requires at least: 6.8
 * Tested up to:      6.8.2
 * Requires PHP:      7.4
 * Author:            Prospus
 * Author URI:        https://prospus.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       audigy
 * Domain Path:       /languages
 * Background image:  Designed by Freepik
 */

// If this file is called directly, abort.
if (!defined("WPINC")) {
    die();
}

require_once plugin_dir_path(__FILE__) . "inc/audigy-wp.php";
require_once plugin_dir_path(__FILE__) . "ghx-emailer/results-emails.php";

require_once plugin_dir_path(__FILE__) . "/audigy-settings.php";
require_once plugin_dir_path(__FILE__) . "/ghx-results.php";

class Audigy
{
    public $plugin, $version;

    public function __construct()
    {
        $this->plugin = plugin_basename(__FILE__);
        $this->version = "1.0.1";
    }

    public function register()
    {
        require_once plugin_dir_path(__FILE__) . "/audigy-lp.php";
        add_action("admin_menu", [$this, "add_admin_page"], 1, 1);
        add_action("admin_enqueue_scripts", [$this, "enqueue_assets"]);
        add_action("wp_enqueue_scripts", [$this, "frontend_enqueue_assets"]);
        add_filter("plugin_action_links_$this->plugin", [
            $this,
            "settings_link",
        ]);
        add_shortcode("audigy_front", [$this, "audigy_front_shortcode"]);
        add_action("wp_footer", [$this, "audigy_front_modal_shortcode"]);
        add_action("wp_head", [$this, "add_preload_resource_hint"], -1);
        add_action("wp_head", [$this, "add_theme_color"], -1);
        add_shortcode("audigy_front_demo", [
            $this,
            "audigy_front_demo_shortcode",
        ]);
    }

    public function settings_link($links)
    {
        $settings_link = '<a href="admin.php?page=audigy">Settings</a>';
        array_push($links, $settings_link);
        return $links;
    }

    // Add Shortcode
    public function audigy_front_shortcode()
    {
        ob_start();
        include plugin_dir_path(__FILE__) . "templates/frontend/form.php";
        $html = ob_get_clean();
        return $html;
    }

    public function audigy_front_demo_shortcode()
    {
        ob_start();
        include plugin_dir_path(__FILE__) . "templates/frontend/form-demo.php";
        $html = ob_get_clean();
        return $html;
    }

    public function audigy_front_modal_shortcode()
    {
        include plugin_dir_path(__FILE__) .
            "templates/frontend/hearing-modal.php";
    }

    public function enqueue_assets()
    {
        wp_enqueue_style(
            $this->plugin . "-backend-css-vendors",
            plugins_url("/public/css/chunk-vendors.css", __FILE__)
        );
        wp_enqueue_style(
            $this->plugin . "-backend-css",
            plugins_url("/public/css/app.css", __FILE__)
        );
        wp_enqueue_style(
            $this->plugin . "-datatables-css",
            "https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css"
        );
        wp_enqueue_script(
            $this->plugin . "-backend-js-scripts-vendors",
            plugins_url("/public/js/app.js", __FILE__),
            null,
            null,
            true
        );
        wp_enqueue_script(
            $this->plugin . "-backend-js-scripts",
            plugins_url("/public/js/chunk-vendors.js", __FILE__),
            null,
            null,
            true
        );
        wp_enqueue_script(
            $this->plugin . "-datatable-js-scripts",
            "https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js",
            null,
            null,
            true
        );
    }

    public function frontend_enqueue_assets()
    {
        wp_enqueue_style(
            $this->plugin . "-frontend-css-vendors",
            plugins_url("/public/css/chunk-vendors.css", __FILE__),
            null,
            "1.2.8.47"
        );
        wp_enqueue_style(
            $this->plugin . "-frontend-css",
            plugins_url("/public/css/app.css", __FILE__),
            null,
            "1.2.8.47"
        );

        wp_enqueue_script(
            $this->plugin . "-frontend-js-scripts-vendors",
            plugins_url("/public/js/app.js", __FILE__),
            null,
            "1.2.29.9.49",
            true
        );
        wp_enqueue_script(
            $this->plugin . "-frontend-js-scripts",
            plugins_url("/public/js/chunk-vendors.js", __FILE__),
            null,
            "1.2.29.9.49",
            true
        );

        wp_enqueue_script(
            $this->plugin . "-bootstrap-scripts3",
            "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js",
            null,
            null,
            true
        );
        wp_enqueue_script(
            $this->plugin . "-bootstrap-scripts2",
            "//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js",
            null,
            null,
            true
        );

        wp_enqueue_script(
            $this->plugin . "-bootstrap-scripts1",
            "https://cdn.datatables.net/plug-ins/1.11.3/sorting/datetime-moment.js",
            null,
            null,
            true
        );
        wp_enqueue_script(
            $this->plugin . "-bootstrap-scripts",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
            null,
            null,
            true
        );
        wp_localize_script(
            $this->plugin . "-frontend-js-scripts",
            "site_location_obj",
            ["ajax_url" => admin_url("admin-ajax.php")]
        );
    }

    public function add_preload_resource_hint()
    {
        // preloading a stylesheet
        echo "<link rel=\"preload\" href=\"" .
            plugins_url("/public/img/loading.gif", __FILE__) .
            "\" as=\"image\"  type=\"image/gif\">";
    }

    public function add_theme_color()
    {
        $ghx_brand_color = get_option("ghx_brand_color", true);
        $ghx_secondary_color = get_option("ghx_secondary_color", true);
        ?>
        <script type="text/javascript">
          const css_object = {
            "primaryColor": "<?php echo $ghx_brand_color; ?>",
            "thirdColor": "<?php echo $ghx_secondary_color; ?>",
          }
          
          for (const key in css_object) {
            document.documentElement.style.setProperty("--" + key, css_object[key]);
          }
        </script>
      <?php
    }

    public function add_admin_page()
    {
        add_menu_page(
            "Audigy",
            "Audigy GHX",
            "manage_options",
            "audigy-ghx",
            "ghx_email_settings",
            plugins_url("audigy-ghx/templates/admin/assets/icon_audigy.svg"),
            35.1338
        );

        return $menu;
    }

    public function audigy_admin_menu_init()
    {
        echo "<h1 class='cpt_heading'> Dashboard </h1> ";
    }

    public function content_page()
    {
        require_once plugin_dir_path(__FILE__) . "templates/admin/content.php";
    }

    public function customers_page()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . "ghx_leads";

        echo '<div id="gb-admin-plugin-admin" bis_skin_checked="1"><div class="gb-admin-plugin-admin-header gb-admin-plugin-grid-2" bis_skin_checked="1">
      <div class="gb-admin-plugin-header-title-area" bis_skin_checked="1" style="background: linear-gradient(270deg, #8f7bd2 10%, #6548c6 50%);margin: 0px 0px 30px -20px;
      padding: 20px;">
        <h1 style="margin:0px;"><img src="' .
            get_bloginfo("url") .
            '/wp-content/plugins/audigy-ghx/assets/images/ghx_logo_2.png" style="width: 225px;">&nbsp;&nbsp;<span style="    color: #fff;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    top: 32px;
    margin-left: -10px;">3.9.12.1</span></h1>	
      </div>
      
    </div></div>';

        echo "<h1 class='cpt_heading wp-heading-inline' style='margin-bottom:30px;   font-size: 23px;
        font-weight: 400;margin-top:36px;'> Leads <a class='button button-primary' href='/wp-admin/admin.php?page=leads&export_leads=1' style='float: right;
        font-size: 14px;
        font-weight: normal;
        line-height: 32px;
        margin: -10px 27px 0px -20px; '>Export</a></h1> ";

        //To select data
        $sql = $wpdb->prepare(
          "SELECT * FROM {$table_name} WHERE %d = %d",
          1,
          1
        );

        $results = $wpdb->get_results($sql);
        ?>

        <table id="example" class="display" style="width:100%">
            <thead>
            <tr>
                <th>Date Time</th>
                <th>GUID</th>
                <th>Me / Loved One</th>
                <th>Age</th>
                <th>Screen Exited on</th>

            </tr>
            </thead>
            <tbody>
            <?php
            $doy = $usermeta->userData->date_of_birth;

            $year = date("Y");

            $age = str_contains($doy, "-") ? $doy : $doy - $year;

            foreach ($results as $result) {
                $usermeta = json_decode($result->userdata);
                echo "</tr>";
                $old_date_timestamp = strtotime($result->createdDate);
                $new_date = date("M d Y h:i:s A", $old_date_timestamp);
                echo "<td>" . $new_date . "</td>";
                echo "<td>" . $result->id . "</td>";
                echo "<td>" . $usermeta->userData->type . "</td>";
                echo "<td>" . $age . "</td>";
                //Client Description
                echo "<td>";
                echo "</td>";
                echo "</tr>";
            }?>

            </tbody>
            <tfoot>
            <tr>
                <th>Date Time</th>
                <th>GUID</th>
                <th>Me / Loved One</th>
                <th>Age</th>
                <th>Screen Exited on</th>

            </tr>
            </tfoot>
        </table>
        <script>
            jQuery(document).ready(function () {
                var table = jQuery('#example').DataTable();
            });

        </script>
        <?php
    }

    public function settings_page()
    {
        echo '<h1 class="cpt_heading"> Settings </h1>';
    }
}

if (class_exists("Audigy")) {
    $audigyPlugin = new Audigy();
    $audigyPlugin->register();
}

// Activation
require_once plugin_dir_path(__FILE__) . "inc/audigy-activate.php";
register_activation_hook(__FILE__, ["AudigyActivate", "activate"]);

// Deactivation
require_once plugin_dir_path(__FILE__) . "inc/audigy-deactivate.php";
register_deactivation_hook(__FILE__, ["AudigyDeactivate", "deactivate"]);

if (!function_exists("_dd")) {
    function _dd($data, $exit = true)
    {
        
        if ($exit) {
            exit();
        }
    }
}

//Creating table for GHX_Leads
function create_ghx_lead_database_table()
{
    global $table_prefix, $wpdb;

    $tblname = "ghx_leads";
    $wp_track_table = $table_prefix . "$tblname ";

    #Check to see if the table exists already, if not, then create it
    if (
        $wpdb->get_var("show tables like '$wp_track_table'") != $wp_track_table
    ) {
        $sql = "CREATE TABLE $wp_track_table (
      id BIGINT(35) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      userdata longtext,
      createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    
    );";

        require_once ABSPATH . "wp-admin/includes/upgrade.php";
        dbDelta($sql);
    }

    $tblname = "ghx_api_error_logs";
    $wp_track_table = $table_prefix . "$tblname ";

    #Check to see if the table exists already, if not, then create it
    if (
        $wpdb->get_var("show tables like '$wp_track_table'") != $wp_track_table
    ) {
        $sql = "CREATE TABLE $wp_track_table (
      id BIGINT NOT NULL,
      errorMsg varchar(200),
      createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      PRIMARY KEY  (id)
    );";

        require_once ABSPATH . "wp-admin/includes/upgrade.php";
        dbDelta($sql);
    }
}

register_activation_hook(__FILE__, "create_ghx_lead_database_table");

function reply_to($args)
{
    $args["headers"] = ["Reply-To: ".get_bloginfo( 'name' )." <".get_option('admin_email').">"];
    return $args;
}

add_filter("wp_mail", "reply_to", 999, 1);

function ghx_results()
{
    global $wpdb;

   $results_page = $wpdb->get_row(
    $wpdb->prepare(
        "SELECT ID FROM {$wpdb->prefix}posts WHERE post_name = %s",
        'for-me'
    ),
    "ARRAY_A"
    );


    $lovedone_page = $wpdb->get_row(
      $wpdb->prepare(
          "SELECT ID FROM {$wpdb->prefix}posts WHERE post_name = %s",
          'loved-one'
      ),
      "ARRAY_A"
   );
  
    ?>
<div class="wrap">
  <h1 style="margin-bottom:10px;">Results Page Settings</h1>
</div>
<?php
}

function customers_page()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "ghx_leads";

    echo '<div id="gb-admin-plugin-admin" bis_skin_checked="1"><div class="gb-admin-plugin-admin-header gb-admin-plugin-grid-2" bis_skin_checked="1">
  <div class="gb-admin-plugin-header-title-area" bis_skin_checked="1" style="background: linear-gradient(270deg, #8f7bd2 10%, #6548c6 50%);margin: 0px 0px 30px -22px;
  padding: 20px;">
    <h1 style="margin:0px;"><img src="' .
        get_bloginfo("url") .
        '/wp-content/plugins/audigy-ghx/assets/images/ghx_logo_2.png" style="width: 225px;">&nbsp;&nbsp;<span style="    color: #fff;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    top: 32px;
    margin-left: -10px;">3.9.12.1</span></h1>	
  </div>
  
</div></div>';

    echo "<h1 class='cpt_heading wp-heading-inline' style='margin-bottom:30px;  font-size: 23px;
font-weight: 400;margin-top:30px;margin-left:2px;'> Leads <a class='button button-primary' href='/wp-admin/admin.php?page=leads&export_leads=1' style='float: right;
font-size: 14px;
font-weight: normal;
line-height: 32px;
margin: -10px 27px 0px -20px'>Export</a></h1> ";


    //To select data
    $sql = "SELECT * FROM $table_name order by createdDate DESC";
    $results = $wpdb->get_results($sql);

    
    ?>
  <style type="text/css">
    #example_filter{
      margin-bottom: 10px;
    }
    #example_length select[name="example_length"]{
      background-color: #fff;
      padding: 1px 8px;
    width: 51px;
    }
    #the-list td{ 
     line-height:33px;
    }
    body .dataTables_wrapper table.dataTable thead th,
    body .dataTables_wrapper table.dataTable tfoot th
    {
      padding: 15px; font-weight:normal;
      border-bottom:1px solid #c3c4c7;
      color:#2271b1 !important;
    }

    .dataTables_wrapper table.dataTable thead th:after{
      line-height: 14px !important;
      color:#2c3338 !important;
    }
    .dataTables_wrapper table.dataTable tfoot th:after{
      line-height: 9px !important;
    }
    .dataTables_wrapper table.dataTable thead th:before,
    .dataTables_wrapper table.dataTable tfoot th:before{
      color:#2c3338 !important;
    }
    table.dataTable tfoot>tr>th:before
    {
      bottom: 50%;
    content: "▲"
    }
    table.dataTable tfoot>tr>th{
      position: relative;
    }
    table.dataTable tfoot>tr>th:before, table.dataTable tfoot>tr>th:after{
      position: absolute;
      display: block;
      opacity: .125;
      right: 10px;
      line-height: 9px;
      font-size: .8em;
      line-height: 14px !important;
      color: #2c3338 !important;    font-weight: normal;
      font-size: .8em;
      opacity: .125 !important;
    }
    table.dataTable tfoot>tr>th:after{
      top: 50%;
      content: "▼";
    }

    table.dataTable tfoot>tr>th.sorting_asc:before, table.dataTable tfoot>tr>th.sorting_desc:after, table.dataTable tfoot>tr>td.sorting_asc:before, table.dataTable tfoot>tr>td.sorting_desc:after {
    opacity: .6 !important;
    }
  
    #example_wrapper{

    }
    .paging_simple_numbers{
      margin-top:6px;
    }
    body .paging_simple_numbers span .paginate_button{
      color: #2271b1 !important;
      border-color: #2271b1 !important;
      background: #f6f7f7 !important;
      min-width: 30px !important;
      min-height: 30px !important;
      margin: 0;
      padding: 0 10px !important;
      font-size: 14px !important;
      line-height: 26px !important;
      text-align: center;
      border-radius:4px !important;
      margin-left:5px !important;
    }
    .dataTables_wrapper .dataTables_paginate span .paginate_button{

    }
    body .dataTables_wrapper .dataTables_paginate span .paginate_button:hover{
      background: #f0f0f1 !important;
      border-color: #0a4b78 !important;
      color: #0a4b78 !important;
      font-size: 14px !important;
    }
    body .dataTables_wrapper .dataTables_paginate span .paginate_button.current{
     background-color:#2271b1 !important; color:#fff !important;
    }
    body .dataTables_wrapper .dataTables_paginate span .paginate_button.current:hover{
      color:#fff !important;
    }
    .dataTables_wrapper .dataTables_paginate .paginate_button.next:hover,.dataTables_wrapper .dataTables_paginate .paginate_button.previous:hover{
      background: none !important;
      border: 1px solid transparent;
      color:#666 !important;
      box-shadow:none !important;
    }
    #example_filter label{
      color:transparent;
    }
    #example_filter input[type="search"]{
      background:#fff !important;
      border-radius: 4px;
      padding:0px 10px;
    }
    table.dataTable#example tbody td{
      padding-left:15px;
    }
  </style>
  <table id="example" class="wp-list-table widefat fixed striped table-view-list orders wc-orders-list-table wc-orders-list-table-shop_order" style="width:100%">
      <thead>
      <tr>
          <th id="date_time_header">Date Time</th>
          <th id="guid_header">GUID</th>
          <th id="me_loved_header">Me / Loved One</th>
          <th id="age_header">Age</th>
          <th id="screen_exited_header">Screen Exited on</th>
      </tr>
      </thead>
      <tbody id="the-list">
      <?php foreach ($results as $k => $result) {
          $add_exit_screen = "";
          $exit_screen = json_decode($result->userdata);

          if ($exit_screen->lastPage) {
              $add_exit_screen = "(" . $exit_screen->lastPage . ")";
          }

          if ($exit_screen->step_num) {
              $add_exit_screen .= "(" . $exit_screen->step_num . ")";
          }

          if ($exit_screen->step) {
              $add_exit_screen .= " " . $exit_screen->step;
          }

          $usermeta = json_decode($result->userdata);
          $doy = $usermeta->userData->date_of_birth;

          $year = date("Y");

          $age =
              str_contains($doy, "-") || str_contains($doy, "Over")
                  ? $doy
                  : $year - $doy;

          if ($doy) {
              $age =
                  str_contains($doy, "-") || str_contains($doy, "Over")
                      ? $doy
                      : $year - $doy;
          } else {
              $age = "N/A";
          }

          echo "</tr>";

          if ($usermeta->userData->type == "") {
              $me_loved = str_contains($exit_screen->step, "loved")
                  ? "Loved One"
                  : "Me";
          } else {
              $me_loved = $usermeta->userData->type;
          }

          if (!empty($exit_screen->lpData)) {
              $me_loved = "Saved for " . $me_loved;
          }

          $old_date_timestamp = strtotime($result->createdDate);
          $new_date = date("M d Y h:i:s A", $old_date_timestamp);

          $new_date1 = date("YYYY-MM-DDTHH:mm:ssZ", $old_date_timestamp);

          echo '<td data-order="' .
              $old_date_timestamp .
              '">' .
              $new_date .
              "</td>";
          echo "<td>" . $result->id . "</td>";
          echo "<td>" . $me_loved . "</td>";
          echo "<td>" . $age . "</td>";
          //Client Description
          echo '<td style="line-height:inherit;">' . $add_exit_screen . "</td>";
          echo "</tr>";
      } ?>

      </tbody>
      <tfoot>
      <tr>
          <th id="date_time">Date Time</th>
          <th id="guid">GUID</th>
          <th id="me_loved">Me / Loved One</th>
          <th id="age">Age</th>
          <th id="screen_exited">Screen Exited on</th>
      </tr>
      </tfoot>
  </table>
  <script>
       
      jQuery(document).ready(function ($) {
       
            var table = $('#example').DataTable({
             order: [[0, 'desc']],  
            initComplete: function() {
                var api = this.api();
                var footers = $('tfoot th');
                for (i = 0; i < footers.length; i++) {
                  api.order.listener(footers[i], i);
                }
              }
            });

            $('#example_filter input[type="search"]').attr('placeholder','Type to search')

            $('tfoot th').click(function(){

              var get_id = $(this).attr('id');

              $('tfoot th').removeClass('sorting_asc');
              $(this).addClass($('#'+get_id+'_header').attr('class'));
             
            })


      });

     
  </script>
  <?php
}


// 3. Enqueue WordPress color picker
add_action("admin_enqueue_scripts", function ($hook_suffix) {
    // Only enqueue on specific admin pages, like settings
    //if ($hook_suffix === 'admin.php?page=audigy-ghx') {
    wp_enqueue_style("wp-color-picker");
    wp_enqueue_script("wp-color-picker");
    wp_add_inline_script(
        "wp-color-picker",
        "
          jQuery(document).ready(function($){
              $('#ghx_brand_color1').wpColorPicker();
              $('#ghx_brand_color2,#ghx_brand_color3,#ghx_brand_color4,#ghx_brand_color5,#ghx_brand_color6').wpColorPicker();
          });
      "
    );
    //}
});

add_filter("wp_mail_content_type", function ($content_type) {
    return "text/html";
});


register_activation_hook(__FILE__, "ghx_activation_logic");

function ghx_activation_logic($network_active)
{
    // If multisite
    if (function_exists("is_multisite") && is_multisite()) {
        // If network activate, iterate through each site
        if ($network_active) {
            if (false == is_super_admin()) {
                return;
            }

            $blogs = get_sites(); // default count is 100
            foreach ($blogs as $blog) {
                $blog_id = $blog->blog_id;
                switch_to_blog($blog_id);
                ghx_plugin_activation(); // do your activation hook
                restore_current_blog();
            }
            // single site activation in multisite
        } else {
            if (false == current_user_can("activate_plugins")) {
                return;
            }

            ghx_plugin_activation(); // do your activation hook
        }
        // Normal WordPress plugin activation
    } else {
        ghx_plugin_activation(); // do your activation hook
    }
}


// Add necessary pages and settings while activating GHX plugin
function ghx_plugin_activation()
{
    if (!current_user_can("activate_plugins")) {
        return;
    }

    global $wpdb;

    $current_user = wp_get_current_user();


    $ghx_background_image = get_option('ghx_background_image');

    if($ghx_background_image=='')
    update_option('ghx_background_image',get_bloginfo('url').'/wp-content/plugins/audigy-ghx/public/img/ghx_background.jpg');

    if (
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
              'guided-hearing-experience',
              'publish'
          ),
          "ARRAY_A"
      )
      
    ) {
        // create post object
        $page = [
            "post_title" => __("Guided Hearing Experience", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_content" => "",
        ];

        // insert the post into the database
        $postId = wp_insert_post($page);

        // create post object
        $page = [
            "post_title" => __("Results", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $postId,
            "post_content" => "",
        ];

        // insert the post into the database
        $ins_id = wp_insert_post($page);
    }

    update_option("ghx_form", "Built-in forms", true);
    update_option("ghx_brand_color", "#6548c6", true);

    if (
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
              'for-me',
              'publish'
          ),
          "ARRAY_A"
      )
    
    ) {
        $for_me =
            '<!-- wp:columns {"className":"results-sections","style":{"spacing":{"margin":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}}} -->
    <div class="wp-block-columns results-sections" style="margin-top:var(--wp--preset--spacing--20);margin-bottom:var(--wp--preset--spacing--20)"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:columns -->
    <div class="wp-block-columns"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:image {"id":16,"sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image size-full"><img src="' .
            __FILE__ .
            '/assets/images/ghx-result-banner-1024x433-3.png" alt="" class="wp-image-16"/></figure>
    <!-- /wp:image --></div>
    <!-- /wp:column -->
    
    <!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":1} -->
    <h1 class="wp-block-heading">Your Hearing Profile</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Congratulations on taking the first step to healthy hearing! See your results below and recommended next steps.</p>
    <!-- /wp:paragraph --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->
    
    <!-- wp:shortcode -->
    [ghx_test_user_results]
    <!-- /wp:shortcode -->
    
    <!-- wp:columns {"className":"results-sections","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|50","top":"var:preset|spacing|50"}}}} -->
    <div class="wp-block-columns results-sections" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)"><!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
    <h2 class="wp-block-heading">What You Need to Know</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Hearing loss is divided into degrees of severity from mild to profound. If you feel you have difficulty hearing in certain situations, it’s a good idea to see one of our hearing professionals to rule out anything that could be causing the perception of hearing loss.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:paragraph -->
    <p>Watch the video to learn more.</p>
    <!-- /wp:paragraph --></div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column"><!-- wp:shortcode -->
    [ghx_test_user_videos]
    <!-- /wp:shortcode --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->
    
    <!-- wp:columns {"className":"results-sections","style":{"spacing":{"margin":{"bottom":"0"}}}} -->
    <div class="wp-block-columns results-sections" style="margin-bottom:0"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:image {"id":18,"sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image size-full"><img src="' .
            __FILE__ .
            '/assets/images/reccomendation2.webp" alt="" class="wp-image-18"/></figure>
    <!-- /wp:image --></div>
    <!-- /wp:column -->
    
    <!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
    <h2 class="wp-block-heading">Our Recommendation</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Online screenings play an important role in understanding if you have a hearing loss, but cannot take the place of a professional hearing evaluation.<br>The great news is that it’s easy to connect with someone that can help you!</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
    [contact-button]Contact Us[/contact-button]
    <!-- /wp:buttons --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->';

        // create post object
        $page = [
            "post_title" => __("For Me", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ins_id,
            "post_content" => $for_me,
        ];

        // insert the post into the database
        wp_insert_post($page);
    }

    if (
        null ===
        $wpdb->get_row(
            $wpdb->prepare(
                "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
                'ghx-custom-page',
                'publish'
            ),
            "ARRAY_A"
        )
    ) {
        // create post object
        $page = [
            "post_title" => __("GHX Custom Page", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
        ];

        // insert the post into the database
        $getId = wp_insert_post($page);

        //update_option('ghx_custom_page',$getId,true);
    }

    if (
        null ===
        $wpdb->get_row(
          $wpdb->prepare(
              "SELECT post_name FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_status = %s",
              'loved-one',
              'publish'
          ),
          "ARRAY_A"
      )

    ) {
        $loved_one =
            '<!-- wp:columns {"className":"results-sections","style":{"spacing":{"margin":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}}} -->
    <div class="wp-block-columns results-sections" style="margin-top:var(--wp--preset--spacing--20);margin-bottom:var(--wp--preset--spacing--20)"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:columns -->
    <div class="wp-block-columns"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:image {"id":16,"sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image size-full"><img src="' .
            __FILE__ .
            '/assets/images/ghx-result-banner-1024x433-3.png" alt="" class="wp-image-16"/></figure>
    <!-- /wp:image --></div>
    <!-- /wp:column -->
    
    <!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"level":1} -->
    <h1 class="wp-block-heading">Supporting a Loved One</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Congratulations on taking the first step to helping a loved one start their hearing journey. Below you’ll find some tips to motivate and engage them on the road ahead.</p>
    <!-- /wp:paragraph --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->
    
    <!-- wp:columns {"className":"results-sections","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","left":"var:preset|spacing|60","bottom":"var:preset|spacing|50"}}}} -->
    <div class="wp-block-columns results-sections" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--60)"><!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
    <h2 class="wp-block-heading">How to Motivate a Loved One</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Hearing loss can make the people you care about feel very lonely. There are many ways you can support your friend or loved one with hearing loss during their journey to better hearing health.<br></p>
    <!-- /wp:paragraph --></div>
    <!-- /wp:column -->
    
    <!-- wp:column -->
    <div class="wp-block-column"><!-- wp:shortcode -->
    [ghx_test_user_videos]
    <!-- /wp:shortcode --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->
    
    <!-- wp:columns {"className":"results-sections","style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}}} -->
    <div class="wp-block-columns results-sections" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)"><!-- wp:column -->
    <div class="wp-block-column"><!-- wp:image {"id":45,"sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image size-full"><img src="' .
            __FILE__ .
            '/assets/images/Hearing-loss-help.jpeg" alt="" class="wp-image-45"/></figure>
    <!-- /wp:image --></div>
    <!-- /wp:column -->
    
    <!-- wp:column {"verticalAlignment":"center"} -->
    <div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
    <h2 class="wp-block-heading">Set an example</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Want another tip for living with someone with a hearing loss? Take the Guided Hearing Experience yourself and share your results to start a coversation. You’ll then have a baseline for your own hearing.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:list {"ordered":true} -->
    <ol class="wp-block-list"><!-- wp:list-item -->
    <li>It starts the conversation</li>
    <!-- /wp:list-item -->
    
    <!-- wp:list-item -->
    <li>It enables you to relate to their situation</li>
    <!-- /wp:list-item -->
    
    <!-- wp:list-item -->
    <li>It’s the first step in your own hearing healthcare</li>
    <!-- /wp:list-item --></ol>
    <!-- /wp:list -->
    
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
    [contact-button]Contact[/contact-button]
    <!-- /wp:buttons --></div>
    <!-- /wp:column --></div>
    <!-- /wp:columns -->
    ';

        // create post object
        $page = [
            "post_title" => __("Loved One", "audigy-ghx.php"),
            "post_status" => "publish",
            "post_author" => $current_user->ID,
            "post_type" => "page",
            "post_parent" => $ins_id,
            "post_content" => $loved_one,
        ];

        // insert the post into the database
        wp_insert_post($page);
    }
}

function load_wp_media_files()
{
    wp_enqueue_media();
}
add_action("admin_enqueue_scripts", "load_wp_media_files");

add_action("admin_enqueue_scripts", "mw_enqueue_color_picker");
function mw_enqueue_color_picker($hook_suffix)
{
    // first check that $hook_suffix is appropriate for your admin page
    wp_enqueue_style("wp-color-picker");
    wp_enqueue_script(
        "my-script-handle",
        plugins_url("js/color-picker.js", __FILE__),
        ["wp-color-picker"],
        false,
        true
    );
}

add_action("wp_head", "ga_code");

function ga_code()
{
    // Google Analytics Code
    ?>
      <?php echo get_option("ghx_google_analytics", true); ?>
    <?php
}

// Force GTM right after <body>
function insert_gtm_after_body_tag($buffer) {
    
    $gtm_code = '<!-- Google Tag Manager (noscript) -->'.get_option("ghx_google_tagmanager", true).'<!-- End Google Tag Manager (noscript) -->';
    
    return preg_replace('/<body([^>]*)>/', '<body$1>' . $gtm_code, $buffer, 1);
}

function buffer_start() { ob_start("insert_gtm_after_body_tag"); }
function buffer_end() { ob_end_flush(); }

add_action('wp_loaded', 'buffer_start');
add_action('shutdown', 'buffer_end');

function add_ghx_css()
{
    
 echo '<style type="text/css"> 
  #wp-email_footer-wrap,#wp-forme_email_content-wrap,#wp-lovedone_email_content-wrap,#wp-savemyspot_email_content-wrap{
    margin-top:-18px;
  }
  .settings_bg input[type="text"],.settings_bg textarea,.settings_bg select{
    width:60%;max-width:60%;
  }
  .settings_bg textarea.wp-editor-area{
    max-width:100% !important;
  }
  .ghx-settings-msg{
    padding-top:10px !important;
    padding-bottom:10px !important; 
  }
 .ghx-settings-msg button{
  padding: 16px 10px 5px 10px; 
}
#ghx_logo,#email_header_logo,#email_forme_header_banner,#email_lovedone_header_banner,#email_sms_header_banner{
    width:60%;
}

#ghx_brand_color_6 .wp-picker-container{
    top: -6px;
    margin-left: 10px;
    position: relative;
    visibility:hidden;
}

#ghx_brand_color_6.bg_enabled .wp-picker-container{
    visibility:visible;
}
p.submit{
    margin-top: -11px;
}
.settings_icon{
    position: absolute;
    margin-left: 6px;
    top: 5px;
    background: #ccc;
    color: #666;
    line-height: 18px;
    text-align: center;
    border-radius: 50px;
    text-decoration: none;
    padding-right: 0px;
    font-size: 13px;
    width: 19px;
    height: 19px;
}
.settings_icon:after{
    width: 23px;
    height: 23px;
    border: 1px solid #ccc;
    content: "";
    position: absolute;
    left: -3px;
    top: -3px;
    border-radius: 50px;
}
.settings_icon:hover{
    background:#8b8d8f;color:#fff;
}
#reset_forms{
    position: absolute;
    margin-left: 25px;
    margin-top: -5px;
    background: #faebea;
    color: #ba1e1e !important;
    border: 0px;
    border: 1px solid #ba1e1e;
}
#reset_forms:hover{
    background: red; color: #fff !important;
}
.disable_button{
    opacity:0.5;color:#666 !important;border:1px solid #666 !important;
}
.nf_error{
    background: #f8d7da;
    padding-left: 10px;
    line-height: 26px;
    margin-top: 12px;
    margin-bottom: 13px;
    color: red;border-radius: 4px;
}
.ninjaform-ids{
    margin-bottom:15px;
}
.hide,.hide ~ tr{
    display:none;
  }
.sett_inst{
    margin-bottom:15px !important;margin-top:0px;font-weight:bold;
}
.sub_url{
    color: #333;
    opacity: 0.7;
    padding-top: 10px;
    margin-top: 0px;
}
.settings_bg{
     background:#fff;
     padding:0px;width:100%;
     margin-bottom:0px;border:1px solid #efefef;
     border-collapse:collapse;
     border-color:#efefef;
}
.settings_bg h2{
    padding-left: 10px;
    font-weight: bold;
    font-size: 14px;
    margin: 12px 0px;
}
.upload-preview{
    max-width: 34%;
    border-radius: 10px;
    border: 1px solid #2271b1;
    padding: 5px;
    max-height: 302px;
    margin-top: 20px;
    position: relative;
    margin-left: 0px;
}
.settings_bg th{
    padding-left:10px;
}
p.submit{
    margin: 10px;
}
 </style>';

    if (get_option("ghx_form") == "Ninja Forms") { ?>
<script type="text/javascript">
 jQuery(document).ready(function($){
  $("a[href='admin.php?page=leads']").hide();
  $("a[href='admin.php?page=LP_Settings']").hide();
 });

  function reset_alert(){ 

    let text = "Please note that resetting will delete all forms and the leads captured in them. Export suggested before resetting.";

if (confirm(text) == true) {
  
  jQuery.ajax({
    method: "POST",
    url:  '<?php echo admin_url( 'admin-ajax.php' ); ?>',
    data: {
      action: "reset_forms"
    },
    success: function(data) {
         window.location = '<?php echo get_bloginfo('url').'/wp-admin/admin.php?page=audigy-ghx'; ?>';
      }
  
  })
    
} else {
    text = "You canceled!";
    return false;
}

  }
  </script>
  <?php }
}
add_action("admin_head", "add_ghx_css");

function ghx_test_form()
{
    return '<div data-dialog="false" class="hl-ghx"></div>';
}
add_shortcode("ghx-test-form", "ghx_test_form");

// Create event to delete Ninja form submission data
function schedule_nf_sub_cleanup()
{
    if (!wp_next_scheduled("nf_sub_cleanup_event")) {
        wp_schedule_event(time(), "daily", "nf_sub_cleanup_event");
    }
}
add_action("wp", "schedule_nf_sub_cleanup");


function add_front_ghx_css(){

  $ghx_background_color        =  get_option("ghx_background_color",true); 

  $ghx_enable_background_color =  get_option("ghx_enable_background_color",true); 

  $ghx_enable_background_image =  get_option("ghx_enable_background_image",true); 
  $ghx_background_image        =  get_option("ghx_background_image",true); 


  $plugin_data                 =  get_plugin_data( __FILE__ );
  $plugin_version              =  $plugin_data['Version'];


  if($ghx_enable_background_color==1 && $ghx_enable_background_image!=1 )
  $add_bg = $ghx_background_color;
  else if( $ghx_enable_background_color!=1 && $ghx_enable_background_image==1 )
  $add_bg = 'url("'.$ghx_background_image.'") no-repeat';
  else if( $ghx_enable_background_color!=1 && $ghx_enable_background_image!=1  )
  $add_bg = 'inherit';
  else if(  $ghx_enable_background_color==1 && $ghx_enable_background_image==1 )
  $add_bg = $ghx_background_color.' url("'.$ghx_background_image.'") no-repeat';

  echo '<style type="text/css">
   body .ghx-audigy-app #ghx-modal-id,.ghx-nf-cont{
     background:'.$add_bg.' !important;background-size: cover !important;
     border-radius:20px !important;
   }
   .ghx-nf-cont .theme--light.v-sheet{
background:none !important;
   }
   
  </style>';

  if($ghx_enable_background_color==1 || $ghx_enable_background_image==1){
    
    echo '<style type="text/css">.ghx-nf-cont{
    padding:16px 30px !important;
    }</style>';

  }

echo '<script type="text/javascript">console.log("GHX app version '.$plugin_version.'")</script>';


}

add_action("wp_head", "add_front_ghx_css");
?>