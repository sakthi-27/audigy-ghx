<?php

// Register Admin Menu
function audigy_LP_admin_menu() {
    add_menu_page(
        'Audigy LP',
        'Audigy LP',
        'read',
        'audigy-lp',
        'audigy_LP_admin_menu_init', // Callback, leave empty
        plugins_url( 'audigy-LP/icon_audigy.svg' ),
        30 // Position
    );
    
    add_submenu_page(
        'audigy-lp',
        'Email Opt-Outs',
        'Email Opt-Outs',
        'manage_options',
        'email-opt-outs',
        'render_email_opt_outs'
    );
    
    
    add_submenu_page(
        'audigy-lp',
        'LP API Records',
        'LP API Records',
        'manage_options',
        'lp-api-records',
        'lp_api_records'
    );
    
}

//add_action( 'admin_menu', 'audigy_LP_admin_menu' );


function audigy_LP_admin_menu_init(){
      echo "<h1 class='cpt_heading'> Dashboard </h1> ";
}


// Check if ACF function exist (if ACF is installed)
if( function_exists('acf_add_options_page') )
{
    
    acf_add_options_page(array(
        
        'page_title' => 'Settings',
        'menu_title' => 'Settings',
        'menu_slug'  => 'audigy-lp-settings',
        'parent_slug' => 'audigy-lp',
        'capability' => 'edit_posts',
        'icon_url'   => 'dashicons-admin-settings'
    
    ));
    
}


function lp_api_records(){
    
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'contact_provider_leads';

    echo " <h1 class='settings_head'>LP API Records</h1> ";

    //To select data
  	$sql = "SELECT * FROM $table_name  ORDER BY id DESC";

    $results = $wpdb->get_results($sql);

    ?>
    <style type="text/css">
        .resultlog{
            display:flex;
            border-bottom:1px dotted #ccc;
        }
        
        .resultlog div{
            text-align:left;  padding:10px 15px; width:10%;
        }
        .resultlog div:nth-child(2) {
            width:60%;
        }
    </style>
    
    <table id="api-lp-leads" class="display" style="width:100%">
        <thead>
            <tr>
                <th width="50">ID</th>
                <th>Date Time</th>
                <th>Zip Code</th>
                <th>Provider</th>
                <th>GHX</th>
            </tr>
        </thead>
        <tbody>
          <?php
            add_thickbox();
            foreach( $results as $result ) {
                
              $ghx = ( $result->ghx_attached )  ? 'true' : 'false';
              
              echo '<tr>';
              $old_date_timestamp = strtotime($result->createdDate);
              $new_date = date('M d Y h:i:s A', $old_date_timestamp);
              echo '<td>'.$result->id.'</td>';
              echo '<td>'.$new_date.'</td>';
              echo '<td>'.$result->zip_code.'</td>';
              echo '<td>'.get_the_title($result->location_id).'</td>';
              echo '<td>'.ucfirst($ghx).'</td>';
              echo '</tr>';
            }?>
            
        </tbody>
        <tfoot>
            <tr>
                <th width="50">ID</th>
                <th>Date Time</th>
                <th>Email</th>
            </tr>
        </tfoot>
    </table>
      <script>
        jQuery(document).ready(function () {
            var table = jQuery('#api-lp-leads').DataTable({
              order:[[0, 'desc'], [1, 'desc']],
              "pageLength" : 100,
             });
        });
      </script>
      
 <?php 
    
}


// Unsubscribed email logs
function render_email_opt_outs(){
    
    global $wpdb;
    $table_name = $wpdb->prefix . 'lp_email_logs';
    echo " <h1 class='settings_head'> Email Opt-Out </h1> ";
    //To select data
  	$sql = "SELECT * FROM $table_name  ORDER BY id DESC";
    $results = $wpdb->get_results($sql);
    
    ?>
    <style type="text/css">
        .resultlog{
            display:flex;
            border-bottom:1px dotted #ccc;
        }
        
        .resultlog div{
            text-align:left;  padding:10px 15px; width:10%;
        }
        .resultlog div:nth-child(2) {
            width:60%;
        }
    </style>
    
    <table id="search-log-results" class="display" style="width:100%">
        <thead>
            <tr>
                <th width="50">ID</th>
                <th>Date Time</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          <?php
            add_thickbox();
            foreach( $results as $result ) {
              
              echo '<tr>';
              $old_date_timestamp = strtotime($result->createdDate);
              $new_date = date('M d Y h:i:s A', $old_date_timestamp);
              echo '<td>'.$result->id.'</td>';
              echo '<td>'.$new_date.'</td>';
              echo '<td>'.$result->email.'</td>';
              echo '</tr>';
            }?>
            
        </tbody>
        <tfoot>
            <tr>
                <th width="50">ID</th>
                <th>Date Time</th>
                <th>Email</th>
            </tr>
        </tfoot>
    </table>
      <script>
        jQuery(document).ready(function () {
            var table = jQuery('#search-log-results').DataTable({
             order:[[0, 'desc'], [1, 'desc']]
            });
        });
      </script>
      <?php
}


add_action('admin_head', 'api_setting_css');

function api_setting_css() {
  echo '<style>
        #acf-group_64508f7577a11 .acf-fields{
          flex-wrap: wrap;
          display: flex;
       }
       #acf-group_64508f7577a11 .acf-field:nth-child(odd){
           width:5%;
       }
       
       #acf-group_64508f7577a11 .acf-field:nth-child(even){
           width:95%;
       }
  </style>';
}