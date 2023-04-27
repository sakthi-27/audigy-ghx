<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Audigy GHX Plugin by Prospus
 * Plugin URI:        https://prospus.com/support/
 * Description:       This plugin was built for the HearingLoss.com website launched by Audigy. It is integrated with the GN BPTA API and Axian LP API to provide a customized hearing screener for website visitors. It is built in Vue.js as a WordPress plugin. This plugin was built by Prospus in 2022-23.
 * Version:           1.0.0.1
 * Author:            Prospus
 * Author URI:        mailto:support@prospus.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       audigy
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


//require_once plugin_dir_path(__FILE__)  . 'inc/audigy-api.php';
require_once plugin_dir_path(__FILE__)  . 'inc/audigy-lp-api.php';
require_once plugin_dir_path(__FILE__)  . 'inc/audigy-wp.php';
require_once plugin_dir_path(__FILE__)  . 'inc/audigy-ajax.php';

class Audigy
{
  public $plugin, $version, $ajax;
  
  function __construct() {
    $this->plugin = plugin_basename(__FILE__);
    $this->version = "1.0.1";
    $this->ajax = new AudigyAjax();
  }

  function register() {
    add_action('admin_menu', array($this, 'add_admin_page'));
    add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
    add_action('wp_enqueue_scripts', array($this, 'frontend_enqueue_assets'));
    add_filter("plugin_action_links_$this->plugin", array($this, 'settings_link'));

    add_shortcode( 'audigy_front', array($this, 'audigy_front_shortcode'));
    
    add_action('wp_footer', array($this, 'audigy_front_modal_shortcode'));
    
    //add_action('wp_enqueue_scripts', array($this, 'audigy_front_modal_shortcode'));
    
    add_shortcode( 'audigy_front_demo', array($this, 'audigy_front_demo_shortcode'));
    
    add_action( 'wp_ajax_get_lp_data_by_id', [$this->ajax, "get_lp_data_by_id"] );
    add_action( 'wp_ajax_nopriv_get_lp_data_by_id', [$this->ajax, "get_lp_data_by_id"] );
    
    add_action( 'wp_ajax_get_lp_token', [$this->ajax, "get_lp_token"] );
    add_action( 'wp_ajax_nopriv_get_lp_token', [$this->ajax, "get_lp_token"] );
    
    add_action( 'wp_ajax_save_data_to_lp', [$this->ajax, "save_data_to_lp"] );
    add_action( 'wp_ajax_nopriv_save_data_to_lp', [$this->ajax, "save_data_to_lp"] );
    
    add_action( 'wp_ajax_fetch_location_data', [$this->ajax, "fetch_location_data"] );
    add_action( 'wp_ajax_nopriv_fetch_location_data', [$this->ajax, "fetch_location_data"] );
    
    add_action( 'wp_ajax_save_spot', [$this->ajax, "save_spot"] );
    add_action( 'wp_ajax_nopriv_save_spot', [$this->ajax, "save_spot"] );
    
    add_action( 'wp_ajax_get_spot_data', [$this->ajax, "get_spot_data"] );
    add_action( 'wp_ajax_nopriv_get_spot_data', [$this->ajax, "get_spot_data"] );
    
    add_action('init', array($this, 'reg_api_details'));
  }
  
  public function reg_api_details(){
    
    $ENV           = get_field('api_env', 'options');

    $token_base_ur = get_field($ENV.'_token_url', 'options');
    $lp_base_url   = get_field($ENV.'_lead_url', 'options');
    $client_id     = get_field($ENV.'_client_id', 'options');
    $secret_id     = get_field($ENV.'_secret_key', 'options');
    
    $auth_token    = base64_encode($client_id.':'.$secret_id);
    
    define('LP_TOKEN_URL',$token_base_ur);
    define('LP_LEAD_URL',$lp_base_url);
    define('LP_AUTH_TOKEN',$auth_token);

  }
  
  public function settings_link( $links ) {
    $settings_link = '<a href="admin.php?page=Settings-slug">Settings</a>';
    array_push($links, $settings_link);
    return $links;
  }

  // Add Shortcode
  function audigy_front_shortcode() {
    ob_start();
    include plugin_dir_path( __FILE__ ) . 'templates/frontend/form.php';
    $html = ob_get_clean();
    return $html;
  }

  function audigy_front_demo_shortcode() {
    ob_start();
    include plugin_dir_path( __FILE__ ) . 'templates/frontend/form-demo.php';
    $html = ob_get_clean();
    return $html;    
  }
  
  function audigy_front_modal_shortcode() {
    include plugin_dir_path( __FILE__ ) . 'templates/frontend/hearing-modal.php';  
  }

  function enqueue_assets() {

    //wp_enqueue_style( "$this->plugin-bootstrap-css" . '-bootstrap-css', plugin_dir_url( __FILE__ ) . '/vendors/bootstrap-5.2.0/css/bootstrap.min.css', array(), $this->version, 'all' );

    //wp_enqueue_style( "$this->plugin-css", plugins_url('/public/styles.css', __FILE__) );
    wp_enqueue_style($this->plugin. '-backend-css-vendors', plugins_url('/public/css/chunk-vendors.css', __FILE__));
    wp_enqueue_style( $this->plugin. '-backend-css', plugins_url('/public/css/app.css', __FILE__) );
    wp_enqueue_style( $this->plugin. '-datatables-css', 'https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css');
    //wp_enqueue_style( $this->plugin. '-bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');

    //wp_enqueue_script( "$this->plugin-bootstrap-js". '-bootstrap-js', plugin_dir_url( __FILE__ ) . '/vendors/bootstrap-5.2.0/js/bootstrap.min.js', array( 'jquery' ), $this->version, false );

    //wp_enqueue_script( "$this->plugin-js", plugins_url('/public/scripts.js', __FILE__), null, null, true );
    wp_enqueue_script( $this->plugin. '-backend-js-scripts-vendors', plugins_url('/public/js/app.js', __FILE__), null, null, true );
    wp_enqueue_script( $this->plugin. '-backend-js-scripts', plugins_url('/public/js/chunk-vendors.js', __FILE__), null, null, true );
    wp_enqueue_script( $this->plugin. '-datatable-js-scripts', 'https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js', null, null, true );
    //wp_enqueue_script( $this->plugin. '-bootstrap-js-scripts', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', null, null, true );
    //wp_enqueue_script( "$this->plugin-js", plugins_url('/temp/js/scripts.js', __FILE__), null, null, true );
  }

  function frontend_enqueue_assets() {
    //wp_enqueue_style( $this->plugin . '-bootstrap-css', plugin_dir_url( __FILE__ ) . '/vendors/bootstrap-5.2.0/css/bootstrap.min.css', array(), $this->version, 'all' );

    //wp_enqueue_script( $this->plugin. '-bootstrap-js', plugin_dir_url( __FILE__ ) . '/vendors/bootstrap-5.2.0/js/bootstrap.min.js', array( 'jquery' ), $this->version, false );

    //wp_enqueue_style( $this->plugin . '-smartwizard-css', 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css', array(), $this->version, 'all' );

    //wp_enqueue_script( $this->plugin. '-smartwizard-js', 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js', null, null, true );

    wp_enqueue_style($this->plugin. '-frontend-css-vendors', plugins_url('/public/css/chunk-vendors.css', __FILE__));
    wp_enqueue_style( $this->plugin. '-frontend-css', plugins_url('/public/css/app.css', __FILE__) );
    wp_enqueue_style( $this->plugin. '-audigy-ghx-css', plugins_url('/inc/css/audigy-ghx.css', __FILE__) );
    wp_enqueue_style( $this->plugin. '-bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
' );
    
    /*I temporarily put my CSS here src/scss/frontend-styles-alt.scss*/
    //wp_enqueue_style( $this->plugin. '-frontend-css-alt', plugins_url('/public/frontend-styles-alt.css', __FILE__) );
    
    // wp_enqueue_script( $this->plugin. '-frontend-vue-js', plugins_url('/public/frontend-vue-scripts.js', __FILE__), null, null, true );
    
    wp_enqueue_script( $this->plugin. '-frontend-js-scripts-vendors', plugins_url('/public/js/app.js', __FILE__), null, null, true );
    wp_enqueue_script( $this->plugin. '-frontend-js-scripts', plugins_url('/public/js/chunk-vendors.js', __FILE__), null, null, true );
    
    //wp_enqueue_script( "$this->plugin-js", plugins_url('/public/scripts.js', __FILE__), null, null, true );
    //wp_enqueue_script( "$this->plugin-js", plugins_url('/temp/js/scripts.js', __FILE__), null, null, true );
    wp_enqueue_script( $this->plugin. '-ghx-lp-form-submit', plugins_url('/inc/js/ghx-lp-form-submit.js',  __FILE__), null, 100.45, true );
    wp_enqueue_script( $this->plugin. '-bootstrap-scripts', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', null, null, true );
    
    wp_localize_script( $this->plugin. '-frontend-js-scripts', 'site_location_obj', array( 'ajax_url' => admin_url( 'admin-ajax.php' )));
  }

  public function add_admin_page(){
    add_menu_page( 
      'Audigy', 
      'Audigy GHX', 
      'manage_options', 
      'audigy',
      array($this, 'audigy_admin_menu_init'), 
      plugins_url( 'audigy-ghx/templates/admin/assets/icon_audigy.svg' ),
      31);
    add_submenu_page( 'audigy', 'Content', 'Content', 'manage_options', 'content', array($this, 'content_page'));
    add_submenu_page( 'audigy', 'Customers', 'Leads','manage_options', 'leads', array($this, 'customers_page'));
    //add_submenu_page( 'audigy', 'Settings', 'Settings','manage_options', 'Settings-slug', array($this, 'settings_page'));
  }
//ear-listen

  public function audigy_admin_menu_init(){
    
      echo "<h1 class='cpt_heading'> Dashboard </h1> ";
      
  }

  public function content_page(){
    require_once plugin_dir_path( __FILE__ ) . 'templates/admin/content.php';
    //echo "<h1> Content </h1>";
  }

  public function customers_page(){
    global $wpdb;
    $table_name = $wpdb->prefix . 'ghx_leads';
    echo " <h1 class='cpt_heading wp-heading-inline'> Leads </h1> ";
    //To select data
  	$sql = "SELECT * FROM $table_name WHERE 1";
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
            foreach( $results as $result ) {
              
              //print_r($result->id);
              
              $usermeta = json_decode($result->userdata);
              echo '</tr>';
              $old_date_timestamp = strtotime($result->createdDate);
              $new_date = date('M d Y h:i:s A', $old_date_timestamp);
              echo '<td>'.$new_date.'</td>';
              echo '<td>'.$result->id.'</td>';
              echo '<td>'.$usermeta->userData->type.'</td>';
              echo '<td>'.$usermeta->experimentData->Left->subject->age.'</td>';
              //Client Description
              echo '<td>';
              echo '</td>';
              //echo '<td><a href="javascript:void(0);" data-href="'.plugin_dir_url( __FILE__ ).'getLeadsData.php?id='.$result->id.'" class="lead-details">Click Here</a></td>';
              echo '</tr>';
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
            /*const myModal = new bootstrap.Modal('#leadModal', {
              keyboard: false
            });
            jQuery('.lead-details').on('click', function () {
              var dataURL = jQuery(this).attr('data-href');
              console.log(dataURL);
              
              jQuery('.modal-body').load(dataURL,function(){
                  console.log('inside');
                  myModal.show();
              });
            });*/
        });
        
      </script>
    <?php
  }

  public function settings_page(){
    echo '<h1 class="cpt_heading"> Settings </h1>';
  }
  
}


// Check if ACF function exist (if ACF is installed)
if( function_exists('acf_add_options_page') )
{
  
     // add_submenu_page( 'audigy', 'Settings', 'Settings','manage_options', 'Settings-slug', array($this, 'settings_page'));

    
    acf_add_options_page(array(
        
        'page_title' => 'Settings',
        'menu_title' => 'Settings',
        'menu_slug'  => 'Settings',
        'parent_slug' => 'audigy',
        'capability' => 'manage_options',
        'icon_url'   => 'dashicons-admin-settings'
    
    ));
    
}


if ( class_exists('Audigy') ) {
  $audigyPlugin = new Audigy();
  $audigyPlugin->register();
}

// Activation
require_once plugin_dir_path(__FILE__)  . 'inc/audigy-activate.php';
register_activation_hook( __FILE__, array( 'AudigyActivate', 'activate' ) );

// Deactivation
require_once plugin_dir_path(__FILE__)  . 'inc/audigy-deactivate.php';
register_deactivation_hook( __FILE__, array( 'AudigyDeactivate', 'deactivate' ) );

if(!function_exists("_dd")) {
    function _dd($data, $exit = true) {
        echo "<pre>";
        print_r($data);
        echo "</pre>";
        if($exit) { exit; }
    }
}

// Call function

//Creating table for GHX_Leads

function create_ghx_lead_database_table()
{
    global $table_prefix, $wpdb;

    $tblname = 'ghx_leads';
    $wp_track_table = $table_prefix . "$tblname ";

    #Check to see if the table exists already, if not, then create it

    if($wpdb->get_var( "show tables like '$wp_track_table'" ) != $wp_track_table) 
    {

        $sql = "CREATE TABLE $wp_track_table (
      		id BIGINT NOT NULL,
      		userdata longtext,
      		createdDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      		PRIMARY KEY  (id)
      	);";
      
      	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
      	dbDelta( $sql );
    }
    
    
    
    
    

}

register_activation_hook( __FILE__, 'create_ghx_lead_database_table' );

function reply_to($args) {
    $args['headers'] = array('Reply-To: Name <name@domain.com>');
    return $args;
}
add_filter ( 'wp_mail', 'reply_to',999,1);