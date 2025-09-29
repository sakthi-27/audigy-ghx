<?php
add_action("admin_menu", "ghx_settings");

function ghx_settings()
{
    $ghx_form = get_option("ghx_form", true);

    add_submenu_page(
        "audigy-ghx",
        "Settings",
        "Settings",
        "manage_options",
        "audigy-ghx",
        "ghx_email_settings",
        "",
        9999
    );
    add_submenu_page(
        "audigy-ghx",
        "Lead Processing",
        "Lead Processing",
        "manage_options",
        "LP_Settings",
        "ghx_lp_settings",
        "",
        9999
    );

    if ($ghx_form != "Ninja Forms" || $ghx_form == 1) {
        add_submenu_page(
            "audigy-ghx",
            "Customers",
            "Leads",
            "manage_options",
            "leads",
            "customers_page",
            9999
        );
    }

    add_action("admin_init", "dbi_register_settings");
    add_action("admin_init", "ghx_email_register_settings");
}


add_action("wp_ajax_reset_forms", "reset_forms");
add_action("wp_ajax_reset_forms", "reset_forms");


function reset_forms(){

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

    global $wpdb;

    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->prefix}nf3_forms WHERE form_title = %s",
            'GHX - For Me'
        )
    );
 
    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->prefix}nf3_forms WHERE form_title = %s",
            'GHX - Loved One'
        )
    );


    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->prefix}nf3_forms WHERE form_title = %s",
            'GHX - Save My Spot'
        )
    );

    wp_delete_post($for_me_post_id);
    wp_delete_post($loved_one_post_id);
    wp_delete_post($savemy_spot_post_id);

    echo 'deleted';


}

// LP Settings
function ghx_lp_settings()
{
    ?>

<div id="gb-admin-plugin-admin" bis_skin_checked="1"><div class="gb-admin-plugin-admin-header gb-admin-plugin-grid-2" bis_skin_checked="1">
  <div class="gb-admin-plugin-header-title-area" bis_skin_checked="1" style="background: linear-gradient(270deg, #8f7bd2 10%, #6548c6 50%);margin:0px 0px 30px -22px;
  padding: 20px;">
    <h1 style="margin:0px 0px;;padding:0px;"><img src="<?php echo get_bloginfo(
        "url"
    ); ?>/wp-content/plugins/audigy-ghx/assets/images/ghx_logo_2.png'; ?>" style="width: 225px;">&nbsp;&nbsp;<span style="color: #fff;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    top: 32px;
    margin-left: -10px;">3.9.12.1</span></h1>	
 
  </div>
  
</div></div>
<div class="wrap" style="max-width:72%;">
<h1 style="border-bottom: 1px solid #c3c4c7;margin:-15px 0px 20px 0px;padding-bottom: 15px;">Lead Processing (LP) Settings</h1>
<form method="post" action="options.php">
<?php settings_fields("ghx-lp-settings-group"); ?>
    <?php do_settings_sections("ghx-lp-settings-group"); ?>



<div id="submitdiv" class="postbox " bis_skin_checked="1">
<div class="postbox-header" bis_skin_checked="1" style="display:block;">
    <h2 class="hndle ui-sortable-handle" style="padding-left: 12px;margin: 10px 0px; font-size:14px;">LP API Settings</h2>
    <p style="padding: 0px 20px 0px 14px;">If you are HearingLoss.com Certified Member, please enter the following details to process your leads. Not a member? <a href="#" style="color:#2271b1;" class="">Become One</a>.</p>
  </div>
<div class="inside" bis_skin_checked="1">			
  
   <div class="inside acf-fields -top" bis_skin_checked="1" style="margin-bottom: 0px;padding-bottom: 0px;">
        <div class="acf-label" bis_skin_checked="1">
          <label for="acf-field_63ec81acc2112" style="padding-bottom: 5px;display: inline-block;">Select Environment</label>
        </div>
        <div class="acf-input" bis_skin_checked="1">
        <input type="hidden" name="acf[field_63ec81acc2112]">
          <ul class="acf-radio-list acf-bl" data-allow_null="0" data-other_choice="0">
                <li style="line-height: 34px;">
                    <label>
                        <input type="radio"  name="env_val" value="production" <?php echo esc_attr(
                            get_option("env_val")
                        ) == "production"
                            ? "checked=checked"
                            : ""; ?>>Production: Live Environment
                    </label>
                </li>
                <li style="margin-bottom:8px;">
                    <label class="selected">
                    <input type="radio" name="env_val" value="qa" <?php echo esc_attr(
                        get_option("env_val")
                    ) == "qa"
                        ? "checked=checked"
                        : ""; ?>>QA: Dev Testing Environment</label>
                </li>
          </ul>
        </div>

   </div>

  <div class="qa-api"  style="padding:13px;">

    <div class="acf-label" bis_skin_checked="1">
      <label for="acf-field_63ec749a896fe"><b>QA Server Details</b></label>
    </div>

    <div style="border: #ccd0d4 solid 1px;background: #fff;padding:13px; margin-top:15px;">

           <div>
           <label style="margin-bottom:10px;display:inline-block;"><b>Token URL</b></label><br>
           <input type="text" name="qa_token_url" value="<?php echo esc_attr(
               get_option("qa_token_url")
           ); ?>" style="width:100%;">
           </div>

           <div style="margin-top:20px;">
           <label style="margin-bottom:10px;display:inline-block;"><b>Lead URL</b></label><br>
           <input type="text" name="qa_lead_url" value="<?php echo esc_attr(
               get_option("qa_lead_url")
           ); ?>" style="width:100%;">
           </div>

           <div style="margin-top:20px;">
           <label style="margin-bottom:10px;display:inline-block;"><b>Client ID</b></label><br>
           <input type="text" name="qa_client_id" value="<?php echo esc_attr(
               get_option("qa_client_id")
           ); ?>" style="width:100%;">
           </div>

           <div style="margin-top:20px;">
           <label style="margin-bottom:10px;display:inline-block;"><b>Secret Key</b></label><br>
           <input type="text" name="qa_secret_key" value="<?php echo esc_attr(
               get_option("qa_secret_key")
           ); ?>" style="width:100%;">
           </div>
   
    </div>

  </div>

  <div class="prod-api" style="background:#fff; padding:13px;display:none">

        <div class="acf-label" bis_skin_checked="1">
        <label for="acf-field_63ec749a896fe"><b>Production Server Details</b></label>
        </div>

        <div style="border: #ccd0d4 solid 1px;background: #fff;padding:13px; margin-top:15px;">

            <div>
            <label style="margin-bottom:10px;display:inline-block;"><b>Token URL</b></label><br>
            <input type="text" name="production_token_url" value="<?php echo esc_attr(
                get_option("production_token_url")
            ); ?>" style="width:100%;">
            </div>

            <div style="margin-top:20px;">
            <label style="margin-bottom:10px;display:inline-block;"><b>Lead URL</b></label><br>
            <input type="text" name="production_lead_url" value="<?php echo esc_attr(
                get_option("production_lead_url")
            ); ?>" style="width:100%;">
            </div>

            <div style="margin-top:20px;">
            <label style="margin-bottom:10px;display:inline-block;"><b>Client ID</b></label><br>
            <input type="text" name="production_client_id" value="<?php echo esc_attr(
                get_option("production_client_id")
            ); ?>" style="width:100%;">
            </div>

            <div style="margin-top:20px;">
            <label style="margin-bottom:10px;display:inline-block;"><b>Secret Key</b></label><br>
            <input type="text" name="production_secret_key" value="<?php echo esc_attr(
                get_option("production_secret_key")
            ); ?>" style="width:100%;">
            </div>

         </div>

    </div>

  <script type="text/javascript">
  
  jQuery(document).ready(function($){
     
    $('input[name="env_val"]').change(function(){
       
        if($(this).val()=='production')
        {
          $('.qa-api').hide();
          $('.prod-api').show();
        }
  
        if($(this).val()=='qa')
        {
          $('.qa-api').show();
          $('.prod-api').hide();
        }

    });

  });

</script>
</div>
</div>

<div id="submitdiv" class="postbox " bis_skin_checked="1">
<div class="postbox-header" bis_skin_checked="1">
    <h2 class="hndle ui-sortable-handle" style="padding-left: 12px;margin: 10px 0px; font-size:14px;">LP API Fail-safe</h2>
</div>
<div class="inside" bis_skin_checked="1">			
   <div class="inside acf-fields -top" bis_skin_checked="1" style="display:flex; gap:20px;">
       <div>
        <input type="checkbox" id="" name="api_fail" value="1" <?php echo esc_attr(
            get_option("api_fail")
        ) == 1
            ? "checked=checked"
            : ""; ?>  autocomplete="off" >
       </div>
       <div>
       <div class="acf-label" bis_skin_checked="1">
        <label for="acf-field_64508f77c1fb1">In the event the LP API call fails, send emails with all associated data to the following email addresses:</label><p class="description"><i> Enter multiple email addresses by comma separated </i></p></div>
        <div class="acf-input" bis_skin_checked="1">
          <div class="acf-input-wrap" bis_skin_checked="1">
            <input type="text" name="acf_fail_email" style="width:100%" value="<?php echo esc_attr(
                get_option("acf_fail_email")
            ); ?>" >
          </div>
        </div>
       </div>
   </div>
   <div class="inside acf-fields -top" bis_skin_checked="1" style="display:flex; gap:20px;">
       <div>
        <input type="checkbox" id="" name="api_success" value="1"  autocomplete="off" <?php echo esc_attr(
            get_option("api_success")
        ) == 1
            ? "checked=checked"
            : ""; ?>>
       </div>
       <div>
       <div class="acf-label" bis_skin_checked="1">
        <label for="acf-field_64508f77c1fb1">In the event the LP API call succeeds, send emails with all associated data to the following email addresses:</label><p class="description"><i> Enter multiple email addresses by comma separated</i></p></div>
        <div class="acf-input" bis_skin_checked="1">
          <div class="acf-input-wrap" bis_skin_checked="1">
            <input type="text" name="api_success_email" style="width:100%;" value="<?php echo esc_attr(
                get_option("api_success_email")
            ); ?>">
          </div>
        </div>
       </div>
   </div>
</div>

</div>

<?php submit_button(); ?>

</form>

</div>

<?php
}



// GHX email settings contains email content, banner image for built-in forms
function ghx_email_settings()
{
    
    ?>
<div id="gb-admin-plugin-admin" bis_skin_checked="1"><div class="gb-admin-plugin-admin-header gb-admin-plugin-grid-2" bis_skin_checked="1">
  <div class="gb-admin-plugin-header-title-area" bis_skin_checked="1" style="background: linear-gradient(270deg, #8f7bd2 10%, #6548c6 50%);margin:0px 0px 30px -22px;
  padding: 20px;">
    <h1 style="margin:0px;padding:0px;"><img src="<?php echo get_bloginfo(
        "url"
    ); ?>/wp-content/plugins/audigy-ghx/assets/images/ghx_logo_2.png" style="width: 225px;">&nbsp;&nbsp;<span style="    color: #fff;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    top: 32px;
    margin-left: -10px;">3.9.12.1</span></h1>
      
  </div>
</div>



</div>
<div class="wrap" style="max-width:72%;">

<?php if (
        isset($_REQUEST["settings-updated"]) &&
        $_REQUEST["settings-updated"] != ""
    ) { ?>  
     <div style="background: #fff;
    border: 1px solid #efefef;
    border-left-width: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
    margin: 0px 10px 0px;
    padding: 1px 12px;border-left-color: #00a32a;" class="notice1 notice-success is-dismissible1"><p>Settings Saved!</p></div>

    <?php 
    
        global $wpdb;

        $for_me = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - For Me'
            )
        );

        $loved_one = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - Loved One'
            )
        );

        $save_my_spot = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - Save My Spot'
            )
        );

        $nf_for_me = get_option("nf_GHX - For Me");
        $nf_loved_one = get_option("nf_GHX - Loved One");
        $nf_save_spot = get_option("nf_GHX - Save My Spot");
 

        if( (!empty($for_me) && $for_me[0]->id!=$nf_for_me ) || (!empty($loved_one) && $loved_one[0]->id!=$nf_loved_one ) || ( !empty($save_my_spot) && $save_my_spot[0]->id!=$nf_save_spot ) )
        {
           echo '<div id="message" class="notice ghx-settings-msg notice-error is-dismissible" bis_skin_checked="1"><p>Please fix the Ninjs Form errors and save again</p></div>';

        }
    
    ?>
    <?php } ?>

<form method="post" action="options.php">
    <?php settings_fields("ghx-email-settings-group"); ?>
    <?php do_settings_sections("ghx-email-settings-group"); ?>
    <table class="form-table">


    <tr>
        <td colspan="2" style="padding-top:5px;">
            <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">
            <tr><td colspan="2" style="padding:0px;margin-bottom:15px;"><h2>General Settings</h2></td></tr>
    <tr>
    <td colspan="2" style="background: #fff;
    line-height: 1.5;
    border: 1px solid #efefef;
    position: absolute;
    right: 1%;
    width: 26%;
    margin-top: -45px;">
    
    You can add GHX to the website using these methods:

    <br>> In-page: Use the <b>[ghx-test-form]</b> shortcode to add it to any page.

    <br>> Pop-up: Add <b>"ghx-test-open"</b> class to any element to open a modal on click.
   </td></tr>

    <tr valign="top">
        <th scope="row">Select Logo</th>
        <td><input type="text" name="ghx_logo" id="ghx_logo"  value="<?php echo esc_attr(
            get_option("ghx_logo")
        ); ?>" />
        <input type="button" name="ghx_logo_upload" id="ghx_logo_upload" class="button-secondary" value="Upload Image">
        <br>
        <i class="sub_url" style="display: inline-block;">Recommended Dimension: [200px X 40px]</i>
        <br>
        <img class="logo_preview" src="<?php echo get_option("ghx_logo"); ?>" style="width:230px;margin-top:20px;">
        
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Google Analytics Code</th>
        <td>
        <textarea name="ghx_google_analytics" style="height: 120px;margin-top: -4px;"><?php echo get_option(
            "ghx_google_analytics"
        ); ?></textarea>
        <br>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Google Tag Manager</th>
        <td>
        <textarea name="ghx_google_tagmanager" style="height: 120px;"><?php echo get_option(
            "ghx_google_tagmanager"
        ); ?></textarea>
        <br>
        </td>
        </tr>

        <script type="text/javascript">
        jQuery(document).ready(function($){
            
            $('input[name="ghx_background_color"]').click(function() {
                if ($(this).is(':checked')) {
                    $('#ghx_brand_color_6 .wp-picker-container').css('visibility','visible');
                }else{
                    $('#ghx_brand_color_6 .wp-picker-container').css('visibility','hidden');  
                }
            });

            $('.reset_color').click(function(e){
                
                $('#ghx_brand_color_1 button[type="button"]').css('background-color','#595959');
                $('#ghx_brand_color1').val('#595959');

                $('#ghx_brand_color_2 button[type="button"]').css('background-color','#abb8c3');
                $('#ghx_brand_color2').val('#abb8c3');

                $('#ghx_brand_color_3 button[type="button"]').css('background-color','#abb8c3');
                $('#ghx_brand_color3').val('#abb8c3');

                $('#ghx_brand_color_4 button[type="button"]').css('background-color','#000000');
                $('#ghx_brand_color4').val('#000000');

                $('#ghx_brand_color_5 button[type="button"]').css('background-color','#595959');
                $('#ghx_brand_color5').val('#595959');

                $('#ghx_brand_color_6 button[type="button"]').css('background-color','#f7f7f7');
                $('#ghx_brand_color6').val('#f7f7f7');

                e.preventDefault();

            });



            $('.wp-color-result').click(function(e) {
              e.preventDefault();
            });

            $('.reset-bg').click(function(e){
                e.preventDefault();
                $('#my_image_preview').attr('src','<?php echo get_bloginfo('url') ?>/wp-content/plugins/audigy-ghx/public/img/ghx_background.jpg')
                $('#my_image_option').val('<?php echo get_bloginfo('url') ?>/wp-content/plugins/audigy-ghx/public/img/ghx_background.jpg');
            });

            $('#ghx_logo_upload').click(function(e) {
                e.preventDefault();
                var image = wp.media({ 
                    title: 'Upload Image',
                    // mutiple: true if you want to upload multiple files at once
                    multiple: false
                }).open()
                .on('select', function(e){
                    // This will return the selected image from the Media Uploader, the result is an object
                    var uploaded_image = image.state().get('selection').first();
                    // We convert uploaded_image to a JSON object to make accessing it easier
                    // Output to the console uploaded_image
                    console.log(uploaded_image);
                    var image_url = uploaded_image.toJSON().url;
                    // Let's assign the url value to the input field
                    $('#ghx_logo').val(image_url);
                    $('.logo_preview').attr('src',image_url);
                });
            });

            var mediaUploader;

            $('#my_image_upload_button').click(function(e) {

                e.preventDefault();

                if (mediaUploader) {
                    mediaUploader.open();
                    return;
                }

                mediaUploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: { text: 'Choose Image' },
                    multiple: false
                });

                mediaUploader.on('select', function() {
                    var attachment = mediaUploader.state().get('selection').first().toJSON();
                    $('#my_image_option').val(attachment.url);
                    $('#my_image_preview').attr('src', attachment.url);
                });

                mediaUploader.open();

            });




        });
        </script>

     


       

        
        <tr>
          <th>Contact URL</th>
          <td><input type="text" name="contact_url" placeholder="Used in Results Page" id="" value="<?php echo esc_attr(
              get_option("contact_url")
          ); ?>"></td>
        </tr>

        <tr>
          <th>GHX In Page URL</th>
          <td><input type="text" name="in_page_url" placeholder="GHX In Page URL" id="" value="<?php echo esc_attr(
              get_option("in_page_url")
          ); ?>"><br>
          <span style="font-size: 13px;
    font-style: italic;margin-top: 10px;margin-bottom: 10px;display: inline-block;line-height: 19px;">Return URL Save My Spot</span>
        </td>
        </tr>

        <?php
        $all_plugins = get_plugins();

        if (array_key_exists("ninja-forms/ninja-forms.php", $all_plugins)) { ?>
      <tr> 

      <?php
       $nf_for_me = get_option("nf_GHX - For Me");
       $nf_loved_one = get_option("nf_GHX - Loved One");
       $nf_save_spot = get_option("nf_GHX - Save My Spot");
      ?>

      <th scope="row">Choose Form</th>
      <td style="position:relative;">
        <label style="margin-bottom: 10px;display: inline-block;width: 100%;"><input type="radio" name="ghx_form" id="ghx_form" value="Built-in forms" <?php if (
            get_option("ghx_form") == "Built-in forms"
        ) {
            echo "checked=checked";
        } ?>> Built-in GHX Forms </label>
        <label style="margin-bottom: 10px;display: inline-block;width: 100%;"><input type="radio" name="ghx_form" id="ghx_form" value="Ninja Forms" <?php if (
            get_option("ghx_form") == "Ninja Forms"
        ) {
            echo "checked=checked";
        } ?>> Ninja Forms 
        
        <?php if($nf_for_me !='' && $nf_loved_one!='' && $nf_save_spot!='') { ?>
        <span onclick="reset_alert()" class="button-secondary" style="" id="reset_forms">Reset</span>
        <?php } ?>
        <br> <span style="font-size: 13px;
    font-style: italic;margin-top: 10px;margin-bottom: 10px;display: inline-block;line-height: 19px;"> Selecting Ninja Forms will disable the GHX email, lead, and redirection settings (to be managed via Ninja Forms).</span></label>
      
      <?php
      global $wpdb;

      $for_me = $wpdb->get_results(
        $wpdb->prepare(
            "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
            'GHX - For Me'
        )
    );

    $loved_one = $wpdb->get_results(
        $wpdb->prepare(
            "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
            'GHX - Loved One'
        )
    );

    $save_my_spot = $wpdb->get_results(
        $wpdb->prepare(
            "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
            'GHX - Save My Spot'
        )
    );

    
      
      $add_css =
          get_option("ghx_form") == "Ninja Forms"
              ? "display:iinline"
              : "display:none"; ?>
     
      
      <div class="ninjaform-ids" style="<?php echo $add_css; ?>;position:relative;">
        <label style="min-width:120px; display:inline-block;line-height:28px;">For Me</label> 
        <input type="hidden" name="for-me-form" value="<?php echo get_option(
            "for-me-form"
        ); ?>" style="width:60%" required>
         <?php
         $url = str_replace('?ghx-test=true','',get_option("for-me-form"));
         $post_id = url_to_postid($url);
         $edit_url = get_edit_post_link($post_id);
         ?> 

         <?php if($nf_for_me!='') { ?>
         <a href="<?php echo $url; ?>?ghx-test=true" class="button-secondary">View Page</a>&nbsp;
         <a href="<?php echo $edit_url; ?>" class="button-secondary">Edit Page</a>&nbsp;
         <a href="<?php echo get_bloginfo(
             "url"
         ); ?>/wp-admin/admin.php?page=ninja-forms&form_id=<?php echo $nf_for_me; ?>" class="button-secondary">Edit Form</a>&nbsp;
         <a href="/wp-admin/edit.php?post_status=all&post_type=nf_sub&form_id=<?php echo $nf_for_me; ?>&nf_form_filter&paged=1" class="button-secondary">View Submissions</a>&nbsp;
         <a href="#" style="" class="settings_icon show-popup" alt="Suggested Settings" title="Suggested Settings">?</a>
        <?php } else { ?>
         <a href="#" class="button-secondary disable_button">View Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Form</a>&nbsp;
         <a href="#" class="button-secondary disable_button">View Submissions</a>

        <?php } ?>    

        <?php

        if(!empty($for_me) && $for_me[0]->id!= $nf_for_me ) { 
            echo '<div class="nf_error"><b>For Me</b> form already exists. Please delete and save again to create this automatically.</div>';
        }    
        ?>

      </div>

      <div class="ninjaform-ids" style="<?php echo $add_css; ?>;position:relative;">
        
          <label style="min-width:120px; display:inline-block;line-height:28px;">Loved One</label> 
          <input type="hidden" name="loved-one-form" value="<?php echo get_option(
              "loved-one-form"
          ); ?>" style="width:60%" required>
          <?php
          $url = str_replace('?ghx-test=true','',get_option("loved-one-form"));
          
          $post_id = url_to_postid($url);

          $edit_url = get_edit_post_link($post_id);
          ?> 

         <?php if($nf_loved_one!='') { ?>
         <a href="<?php echo $url; ?>?ghx-test=true" class="button-secondary">View Page</a>&nbsp;
         <a href="<?php echo $edit_url; ?>" class="button-secondary">Edit Page</a>&nbsp;
         <a href="<?php echo get_bloginfo(
             "url"
         ); ?>/wp-admin/admin.php?page=ninja-forms&form_id=<?php echo $nf_loved_one; ?>" class="button-secondary">Edit Form</a>&nbsp;
        <a href="/wp-admin/edit.php?post_status=all&post_type=nf_sub&form_id=<?php echo $nf_loved_one; ?>&nf_form_filter&paged=1" class="button-secondary">View Submissions</a>&nbsp;
        <a href="#" style="" class="settings_icon show-popup" alt="Suggested Settings" title="Suggested Settings">?</a>
        <?php } else { ?>
         <a href="#" class="button-secondary disable_button">View Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Form</a>&nbsp;
         <a href="#" class="button-secondary disable_button">View Submissions</a>
        <?php } ?> 

         
        <?php 
        if(!empty($loved_one) && $loved_one[0]->id!= $nf_loved_one ) { 
            echo '<div class="nf_error"><b>Loved One</b> form already exists. Please delete and save again to create this automatically.</div>';
        }    
        ?>   
         
        
    </div>

      <div class="ninjaform-ids" style="<?php echo $add_css; ?>;position:relative;">
              <label style="min-width:120px;display:inline-block;line-height:28px;">Save My Spot</label> 
        <input type="hidden" name="savemyspot-form" value="<?php echo get_option(
            "savemyspot-form"
        ); ?>" style="width:60%" required>
          <?php
          $url = str_replace('?ghx-test=true','',get_option("savemyspot-form"));
          $post_id = url_to_postid($url);
          $edit_url = get_edit_post_link($post_id);
          ?> 

        <?php if($nf_save_spot!='') { ?>
         <a href="<?php echo $url; ?>?ghx-test=true" class="button-secondary">View Page</a>&nbsp;
         <a href="<?php echo $edit_url; ?>" class="button-secondary">Edit Page</a>&nbsp;
         <a href="<?php echo get_bloginfo(
             "url"
         ); ?>/wp-admin/admin.php?page=ninja-forms&form_id=<?php echo $nf_save_spot; ?>" class="button-secondary">Edit Form</a>&nbsp;
        <a href="/wp-admin/edit.php?post_status=all&post_type=nf_sub&form_id=<?php echo $nf_save_spot; ?>&nf_form_filter&paged=1" class="button-secondary">View Submissions</a>&nbsp;
        <a href="#" style="" class="settings_icon show-popup" alt="Suggested Settings" title="Suggested Settings">?</a>
        <?php } else { ?>
         <a href="#" class="button-secondary disable_button">View Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Page</a>&nbsp;
         <a href="#" class="button-secondary disable_button">Edit Form</a>&nbsp;
         <a href="#" class="button-secondary disable_button">View Submissions</a>
        <?php } ?>  

        <?php 
        if(!empty($save_my_spot) && $save_my_spot[0]->id!= $nf_save_spot ) { 
            echo '<div class="nf_error"><b>Save My Spot</b> form already exists. Please delete and save again to create this automatically.</div>';
        }    
        ?>

         </div>
      <div class="ninjaform-ids" style="<?php echo $add_css; ?>;position:relative;">
        <?php $check_ = ( get_option("data-retention", true) == 1 || get_option("data-retention", true)== '' ) ? "checked=checked" : ""; ?>
        
        <?php 
         if( (!empty($for_me) && $for_me[0]->id!=$nf_for_me ) || (!empty($loved_one) && $loved_one[0]->id!=$nf_loved_one ) || ( !empty($save_my_spot) && $save_my_spot[0]->id!=$nf_save_spot ) )
         {
             echo '<p class="sett_inst">Save the settings once to auto-generate the required Ninja Forms.<br><span style="color:red;">Reset or delete existing GHX forms and save to re-create all forms automatically, please do not create them manually.</span></p>'; 
         }else {

             echo '<p class="sett_inst">Save the settings once to auto-generate the required Ninja Forms.<br><span style="color:red;">Please do not create the forms manually.</span></p>';

         } ?>        
        <input type="checkbox" name="data-retention" id="data-retention" value="1" <?php echo $check_; ?> style="float:left;margin-top:0px;"> <span style="display:inline-block;margin-left:4px;">Auto-delete form submissions after 90 days to comply with data retention laws</span>
        </div>
    
    </td>
      </tr>
      <?php }
        ?>
  
      




            </table>
        </td>
    </tr>

    

      <tr>   
      <td colspan="2">

        <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">
        <tr class=" <?php echo $add_class; ?>"><td colspan="2" style="padding:0px;">
        <h2>CSS Settings</h2></td></tr>

        <tr valign="top" id="ghx_brand_color_1">
        <th scope="row">Base Color</th>
        <td><input type="text" name="ghx_brand_color" id="ghx_brand_color1" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_brand_color")
        ); ?>" /></td>
        </tr>


        <tr valign="top" id="ghx_brand_color_2">
        <th scope="row">Card Hover Color <br><span style="font-weight:normal;">(For desktops)</span></th>
        <td><input type="text" name="ghx_secondary_color" id="ghx_brand_color2" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_secondary_color")
        ); ?>" /></td>
        </tr>

         <!--<tr valign="top" id="ghx_brand_color_3">
        <th scope="row">Card Hover Color <br><span style="font-weight:normal;">(For desktops)</span></th>
        <td><input type="text" name="ghx_tertiary_color" id="ghx_brand_color3" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_tertiary_color")
        ); ?>" /></td>
        </tr>-->

        <tr valign="top" id="ghx_brand_color_4">
        <th scope="row">Font color</th>
        <td><input type="text" name="ghx_font_color" id="ghx_brand_color4" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_font_color")
        ); ?>" /></td>
        </tr>

        <tr valign="top" id="ghx_brand_color_5">
        <th scope="row">Button color</th>
        <td><input type="text" name="ghx_button_color" id="ghx_brand_color5" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_button_color")
        ); ?>" /></td>
        </tr>
        <tr valign="top" id="ghx_brand_color_6" class="<?php echo ( get_option("ghx_enable_background_color") == 1 ) ? 'bg_enabled' : ''; ?>">
        <th scope="row">Enable Background Color For GHX Form</th>
        <td><input type="checkbox" name="ghx_enable_background_color" value="1" <?php echo ( get_option("ghx_enable_background_color") == 1 ) ? 'checked=checked' : ''; ?>> <input type="text" name="ghx_background_color" id="ghx_brand_color6" style="width:47%;"  value="<?php echo esc_attr(
            get_option("ghx_background_color")
        ); ?>" /></td>
        </tr>

        <tr valign="top">
        <th scope="row" style="padding: 4px;">&nbsp;</th>
        <td style="margin-top: -20px;"><a href="#" id="reset" class="reset_color">Reset Colors</a></td>
        </tr>

        <tr valign="top" class="<?php echo ( get_option("ghx_enable_background_image") == 1 ) ? 'bg_enabled' : ''; ?>">
        <th scope="row">Enable Background Image For GHX Form</th>
        <td>
        <input type="text" id="my_image_option" name="ghx_background_image" value="<?php echo esc_attr( get_option('ghx_background_image') ); ?>" />
        <input type="button" class="button" id="my_image_upload_button" value="Upload Image" />

        <a href="#" class="button-secondary reset-bg">Reset</a>

        <br>
        <label style="margin-top: 10px;display: inline-block;">
            <input type="checkbox" name="ghx_enable_background_image" value="1" <?php echo ( get_option("ghx_enable_background_image") == 1 ) ? 'checked=checked' : ''; ?>> In Page
        </label>
        
        <label style="margin-top: 10px;display: inline-block;margin-left:10px;">
            <input type="checkbox" name="ghx_enable_popup_bg" value="1" <?php echo ( get_option("ghx_enable_popup_bg") == 1 ) ? 'checked=checked' : ''; ?>> Pop Up
        </label>
        <br>
        <img id="my_image_preview" src="<?php echo esc_url( get_option('ghx_background_image') ); ?>" class="upload-preview" /> 

        </td>
        </tr>


       

        <!--<input type="hidden" name="ghx_secondary_color" id="" style="width:50%;"  value="<?php echo esc_attr(
            get_option("ghx_secondary_color")
        ); ?>" />-->
        <tr>    
          <th>Font Family</th>
          <td>  
            <?php
              $default_fonts = array(
                'Arial'             => 'Open Sans, Arial, sans‑serif',
                'Verdana'           => 'Verdana, Geneva, sans-serif',
                'Tahoma'            => 'Tahoma, Geneva, sans-serif',
                'Trebuchet MS'      => 'Trebuchet MS, Helvetica, sans-serif',
                'Times New Roman'   => 'Times New Roman, Times, serif',
                'Georgia'           => 'Georgia, serif',
                'Garamond'          => 'Garamond, serif',
                'Courier New'       => 'Courier New, Courier, monospace',
                'Lucida Console'    => 'Lucida Console, Monaco, monospace',
                'Impact'            => 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                'Comic Sans MS'     => 'Comic Sans MS, cursive'
              );
            ?>
            <select name="ghx_font_family">
            <?php 
              foreach($default_fonts as $font){ 
              $add_sel = ( esc_attr(get_option("ghx_font_family")) == $font ) ? 'selected=selected' : '';
            ?>
                <option value="<?php echo $font; ?>" <?php echo $add_sel; ?>><?php echo $font; ?></option>
            <?php } ?>
            </select>
          </td>
        </tr>

        </table>

        </td>

        </tr>

      <?php $add_class =
          get_option("ghx_form") == "Ninja Forms" ? "hide" : ""; ?>

      <tr class="email-settings">
        <td><h2 style="padding-bottom: 0px;margin-bottom: -10px;font-size: 20px;">Email Settings</h2></td>
      </tr>          
      <tr >
         <td colspan="2">

            <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">
            <tr class="email-settings <?php echo $add_class; ?>"><td colspan="2" style="padding:0px;"><h2 style="">Template Settings</h2></td></tr>

        <tr><td colspan="2" style="background: #fff;line-height: 1.5;border: 1px solid #efefef;position: absolute;right: 1%;width: 26%;margin-top: -45px;">
        >  If there's no email content, default content will be used.<br>

        >  Some SMTP plugins can override email settings.<br>

        >  Some key variables that you can use:<br>

        >> {SiteName} - To dynamically include the site name.<br>

        >> {FirstName} - First Name of the form submitter<br>

        >> [view-my-results] - Link to GHX results page<br>

        >> [contact-button url="#"]Custom Contact Button[/contact-button]
        </td></tr>

        <tr valign="top">
        <th scope="row">Logo</th>
        <td>
            
        <div>
    <input type="text" name="email_header_logo" id="email_header_logo" class="1regular-text" value="<?php echo esc_attr(
        get_option("email_header_logo")
    ); ?>" >
    <input type="button" name="upload-btn" id="email_header_logo_butt" class="button-secondary" value="Upload Image">
    <br>
    <i style="    color: #333;
    opacity: 0.7;
    padding-top: 10px;
    margin-top: 0px;
    display: inline-block;">Recommended Dimension: [250px X 50px]</i>
</div>
        <script type="text/javascript">
        jQuery(document).ready(function($){




            $('#email_header_logo_butt').click(function(e) {
                e.preventDefault();
                var image = wp.media({ 
                    title: 'Upload Image',
                    // mutiple: true if you want to upload multiple files at once
                    multiple: false
                }).open()
                .on('select', function(e){
                    // This will return the selected image from the Media Uploader, the result is an object
                    var uploaded_image = image.state().get('selection').first();
                    // We convert uploaded_image to a JSON object to make accessing it easier
                    // Output to the console uploaded_image
                    console.log(uploaded_image);
                    var image_url = uploaded_image.toJSON().url;
                    // Let's assign the url value to the input field
                    $('#email_header_logo').val(image_url);
                });
            });
        });
        </script>
        </tr>
        <tr valign="top">
        <th scope="row">Footer Text</th>
        <td style="padding-top:25px;">
            <?php
            $content = esc_attr(get_option("email_footer"));
            $custom_editor_id = "email_footer";
            $custom_editor_name = "email_footer";
            $args = [
                "media_buttons" => false, // This setting removes the media button.
                "textarea_name" => $custom_editor_name, // Set custom name.
                "textarea_rows" => get_option("default_post_edit_rows", 6), //Determine the number of rows.
                "tinymce" => true,
                "quicktags" => true, // Remove view as HTML button.
            ];
            wp_editor($content, $custom_editor_id, $args);
            ?>
        </td>
        </tr>

        <tr valign="top">
        <th scope="row">Privacy Policy URL</th>
        <td><input type="text" name="email_privacy_policy" value="<?php echo esc_attr(
            get_option("email_privacy_policy")
        ); ?>" /></td>
        </tr>

        <tr valign="top" class="sub_url">
        <th scope="row">Unsubscribe URL</th>
        <td><input type="text" name="email_unsubscribe" disabled value="<?php echo esc_attr(
            get_option("email_unsubscribe")
        ); ?>" /></td>
        </tr>
            </table>

         </td>
      </tr>   

      

        <tr>

           <td colspan="2">
            <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">
            <tr><td colspan="2" style="padding:0px;"><h2>For Me Result Email</h2></td></tr>

<tr valign="top">
<th scope="row">Banner</th>
<td>
<input type="text" name="email_forme_header_banner" id="email_forme_header_banner"  value="<?php echo esc_attr(
    get_option("email_forme_header_banner")
); ?>" />
<input type="button" name="upload-btn" id="email_forme_header_banner_butt" class="button-secondary" value="Upload Image">
<br>
<i   class="sub_url" style="display: inline-block;">Recommended Dimension: [640px X 248px]</i>
<script type="text/javascript">
jQuery(document).ready(function($){
    $('#email_forme_header_banner_butt').click(function(e) {
        e.preventDefault();
        var image = wp.media({ 
            title: 'Upload Image',
            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected image from the Media Uploader, the result is an object
            var uploaded_image = image.state().get('selection').first();
            // We convert uploaded_image to a JSON object to make accessing it easier
            // Output to the console uploaded_image
            console.log(uploaded_image);
            var image_url = uploaded_image.toJSON().url;
            // Let's assign the url value to the input field
            $('#email_forme_header_banner').val(image_url);
        });
    });
});
</script>
</td>
</tr>

<tr valign="top">
<th scope="row">Content</th>
<td style="padding-top:25px;">
<?php
$content = esc_attr(get_option("forme_email_content"));
$custom_editor_id = "forme_email_content";
$custom_editor_name = "forme_email_content";
$args = [
    "media_buttons" => false, // This setting removes the media button.
    "textarea_name" => $custom_editor_name, // Set custom name.
    "textarea_rows" => get_option("default_post_edit_rows", 15), //Determine the number of rows.
    "tinymce" => true,
    "quicktags" => true, // Remove view as HTML button.
];
wp_editor($content, $custom_editor_id, $args);
?>
</td>
</tr>
            </table>
           </td>

        </tr>

        

        <tr>

            <td colspan="2">
                <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">

                <tr><td colspan="2" style="padding:0px;"><h2>For Loved One Result Email</h2></td></tr>
        <tr valign="top">
        <th scope="row">Banner</th>
        <td>
        <input type="text" name="email_lovedone_header_banner" id="email_lovedone_header_banner"  value="<?php echo esc_attr(
            get_option("email_lovedone_header_banner")
        ); ?>" />
        <input type="button" name="upload-btn" id="email_lovedone_header_banner_butt" class="button-secondary" value="Upload Image">
        <br>
       <i class="rcom_txt">Recommended Dimension: [640px X 248px]</i>
        <script type="text/javascript">
        jQuery(document).ready(function($){
            $('#email_lovedone_header_banner_butt').click(function(e) {
                e.preventDefault();
                var image = wp.media({ 
                    title: 'Upload Image',
                    // mutiple: true if you want to upload multiple files at once
                    multiple: false
                }).open()
                .on('select', function(e){
                    // This will return the selected image from the Media Uploader, the result is an object
                    var uploaded_image = image.state().get('selection').first();
                    // We convert uploaded_image to a JSON object to make accessing it easier
                    // Output to the console uploaded_image
                    console.log(uploaded_image);
                    var image_url = uploaded_image.toJSON().url;
                    // Let's assign the url value to the input field
                    $('#email_lovedone_header_banner').val(image_url);
                });
            });
        });
        </script>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Content</th>
        <td style="padding-top:25px;">
        <?php
        $content = get_option("lovedone_email_content");
        $custom_editor_id = "lovedone_email_content";
        $custom_editor_name = "lovedone_email_content";
        $args = [
            "media_buttons" => false, // This setting removes the media button.
            "textarea_name" => $custom_editor_name, // Set custom name.
            "textarea_rows" => get_option("default_post_edit_rows", 13), //Determine the number of rows.
            "tinymce" => true,
            "quicktags" => true, // Remove view as HTML button.
        ];
        wp_editor($content, $custom_editor_id, $args);
        ?>
        </td> 
        </tr>
                </table>
            </td>

        </tr>

        

        <tr>

            <td colspan="2">
                
                <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">
                <tr><td colspan="2" style="padding:0px;"><h2>Save My Spot</h2></td></tr>
        <tr valign="top">
        <th scope="row">Banner</th>
        <td><input type="text" name="email_sms_header_banner" id="email_sms_header_banner"   value="<?php echo esc_attr(
            get_option("email_sms_header_banner")
        ); ?>" />
        <input type="button" name="upload-btn" id="email_sms_header_banner_butt" class="button-secondary" value="Upload Image">
        <br>
        <i class="sub_url" style="display: inline-block;">Recommended Dimension: [640px X 248px]</i>
        <script type="text/javascript">
        jQuery(document).ready(function($){
            $('#email_sms_header_banner_butt').click(function(e) {
                e.preventDefault();
                var image = wp.media({ 
                    title: 'Upload Image',
                    // mutiple: true if you want to upload multiple files at once
                    multiple: false
                }).open()
                .on('select', function(e){
                    // This will return the selected image from the Media Uploader, the result is an object
                    var uploaded_image = image.state().get('selection').first();
                    // We convert uploaded_image to a JSON object to make accessing it easier
                    // Output to the console uploaded_image
                    console.log(uploaded_image);
                    var image_url = uploaded_image.toJSON().url;
                    // Let's assign the url value to the input field
                    $('#email_sms_header_banner').val(image_url);
                });
            });
        });
        </script>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Content</th>
        <td style="padding-top:25px;">
        <?php
        $content = esc_attr(get_option("savemyspot_email_content"));
        $custom_editor_id = "savemyspot_email_content";
        $custom_editor_name = "savemyspot_email_content";
        $args = [
            "media_buttons" => false, // This setting removes the media button.
            "textarea_name" => $custom_editor_name, // Set custom name.
            "textarea_rows" => get_option("default_post_edit_rows", 10), //Determine the number of rows.
            "quicktags" => true, // Remove view as HTML button.
        ];
        wp_editor($content, $custom_editor_id, $args);
        ?>
         <i style="margin-top:10px;display:inline-block">{link} can be used to include the link to continue GHX Screener</i>
        </td>
        </tr>
         <tr>
          <td><b>Redirect URL</b></td>
          <td>
          <?php
          $url = get_option("savemyspot-redirect");
          $post_id = url_to_postid($url);
          $edit_url = get_edit_post_link($post_id);
          ?> 
          <a href="<?php echo $url; ?>" class="button-secondary">View</a>&nbsp;
          <a href="<?php echo $edit_url; ?>" class="button-secondary">Edit</a>

              </td>

         </tr>  

                </table>

            </td>
        
        </tr>

        
        <tr>
            
        <td colspan="2">

            <table cellpadding="0" cellspacing="0" border="1" class="settings_bg">

                <tr>
                <td colspan="2" style="padding:0px;margin-bottom:20px;"><h2> Form Submission Behavior</h2></td></tr>

<tr valign="top">
<th scope="row">Redirect To</th>
<td>
<?php
$args = [
    "sort_order" => "asc",
    "sort_column" => "post_title",
    "hierarchical" => 1,
    "exclude" => "",
    "include" => "",
    "meta_key" => "",
    "meta_value" => "",
    "authors" => "",
    "child_of" => 0,
    "parent" => -1,
    "exclude_tree" => "",
    "number" => "",
    "offset" => 0,
    "post_type" => "page",
    "post_status" => "publish",
];

$pages = get_pages($args); // get all pages based on supplied args
$add_class_results =
    get_option("ghx_submission_redirect") == "Results Page"
        ? ""
        : "display:none;";

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

  <label style="margin-bottom: 10px;display: inline-block;width: 100%;"><input type="radio" name="ghx_submission_redirect" id="result_page_settings" value="Current Page" <?php if (
      get_option("ghx_submission_redirect") == "Current Page"
  ) {
      echo "checked=checked";
  } ?>> Current page (needs LP API values set to work)<br></label>
  <label style="margin-bottom: 10px;display: inline-block;width: 100%;"><input type="radio" name="ghx_submission_redirect" class="result_page_settings" value="Custom Page" <?php if (
      get_option("ghx_submission_redirect") == "Custom Page"
  ) {
      echo "checked=checked";
  } ?>> Custom page (needs LP API values set to work)
  <?php $add_class =
      get_option("ghx_submission_redirect") == "Custom Page"
          ? ""
          : "display:none;"; ?>  
  <div class="custom_page_dropdown" style="<?php echo $add_class; ?>"><input type="text" name="custom_page" style="margin-top:10px;" value="<?php echo get_option(
"custom_page",
true
); ?>"></div>
  </label>
  <label style="margin-bottom: 17px;display: inline-block;width: 100%;"><input type="radio" name="ghx_submission_redirect" id="result_page_settings" value="Results Page" <?php if (
      get_option("ghx_submission_redirect") == "Results Page"
  ) {
      echo "checked=checked";
  } ?>> Results page (default)
  <div class="results_page_button" style="<?php echo $add_class_results; ?>"><a href="<?php echo get_edit_post_link(
$results_page["ID"]
); ?>" target="_blank" class="button button-primary" style="margin:10px 0px 0px 0px;">'For Me' Results Page</a>&nbsp;&nbsp;<a target="_blank" href="<?php echo get_edit_post_link(
$lovedone_page["ID"]
); ?>" style="margin:10px 0px 0px 0px" class="button button-primary">'Loved One' Results Page</a></div>
  </label>
</td>


                </tr>

            </table>

        </td>

        </tr>

        <script type="text/javascript">

             jQuery(document).ready(function($){

                $('a[href="admin.php?page=audigy"]').attr('href','admin.php?page=audigy-ghx'); 
                <?php if (get_option("ghx_form") == "Ninja Forms") { ?>
                  $('a[href="admin.php?page=leads"]').hide();
                  $('a[href="admin.php?page=LP_Settings"]').hide();
                 <?php } ?>

                $('input[name="ghx_form"]').change(function(){
                 
                  if($(this).val()=='Ninja Forms'){
                    $('.email-settings').addClass('hide');
                    $('.email-settings').nextAll().addClass('hide');
                    $('.ninjaform-ids').show();
                  }
                  else{
                    $('.email-settings').removeClass('hide');
                    $('.email-settings').nextAll().removeClass('hide');
                    $('.ninjaform-ids').hide();
                    //$('a[href="admin.php?page=leads"]').show();
                  } 
                  
                });
                
                $('input[name="ghx_submission_redirect"]').change(function(){

                  if($(this).val()=='Results Page'){
                   $('.results_page_button').show();
                  }else{
                    $('.results_page_button').hide();
                  }
                  

                  if($(this).val()=='Custom Page'){
                   $('.custom_page_dropdown').show();
                  }
                  else{
                   $('.custom_page_dropdown').hide();
                  }



                  

                });

             });     

        </script> 



    </table> 
    
    <?php submit_button(); ?>

</form>



<p>&nbsp;</p>
</div>

<?php
}


//register GHX settings
function dbi_register_settings()
{
    register_setting("ghx-lp-settings-group", "env_val");

    register_setting("ghx-lp-settings-group", "api_fail");
    register_setting("ghx-lp-settings-group", "acf_fail_email");
    register_setting("ghx-lp-settings-group", "api_success");
    register_setting("ghx-lp-settings-group", "api_success_email");

    register_setting("ghx-lp-settings-group", "qa_token_url");
    register_setting("ghx-lp-settings-group", "qa_lead_url");
    register_setting("ghx-lp-settings-group", "qa_client_id");
    register_setting("ghx-lp-settings-group", "qa_secret_key");

    register_setting("ghx-lp-settings-group", "production_token_url");
    register_setting("ghx-lp-settings-group", "production_lead_url");
    register_setting("ghx-lp-settings-group", "production_client_id");
    register_setting("ghx-lp-settings-group", "production_secret_key");
}

function ghx_email_register_settings()
{

    
    $ghx_brand_color = get_option("ghx_brand_color", true);
    $ghx_secondary_color = get_option("ghx_secondary_color", true);
    $ghx_tertiary_color = get_option("ghx_tertiary_color", true);
    $ghx_font_color = get_option("ghx_font_color", true);
    $ghx_button_color = get_option("ghx_button_color", true);

    $ghx_background_color_1 = get_option("ghx_background_color", true);
     

    if($ghx_brand_color == '')
    update_option("ghx_brand_color", '#595959');

    if($ghx_secondary_color == '')
    update_option("ghx_secondary_color", '#abb8c3');

    if($ghx_tertiary_color == '')
    update_option("ghx_tertiary_color", '#abb8c3');

    if($ghx_font_color == '')
    update_option("ghx_font_color", '#000000');

    if($ghx_button_color == '')
    update_option("ghx_button_color", '#595959');

    if($ghx_background_color_1 == '')
    update_option("ghx_background_color", '#f7f7f7');

    if ($ghx_brand_color != "") {
      /*  $sds = adjustBrightness($ghx_brand_color, 0.6);
        update_option("ghx_secondary_color", $sds);*/
    }

    if (isset($_REQUEST["export_leads"]) && $_REQUEST["export_leads"] == 1) {
        global $wpdb;
        $table_name = $wpdb->prefix . "ghx_leads";
        //To select data
        $sql = "SELECT * FROM $table_name WHERE 1";
        $results = $wpdb->get_results($sql);

        $csv_fields = [];

        $csv_fields[] = "first_column";
        $csv_fields[] = "second_column";

        $output_filename = "export_reviews_records" . ".csv";
        $output_handle = @fopen("php://output", "w");

        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Content-Description: File Transfer");
        header("Content-type: text/csv");
        header("Content-Disposition: attachment; filename=" . $output_filename);
        header("Expires: 0");
        header("Pragma: public");

        $first = true;

        $locationData = [];
        $csvheader = [];

        $csvheader["date_time"] = "Date Time";
        $csvheader["guid"] = "GUID";
        $csvheader["me_loved_one"] = "Me / Loved One";
        $csvheader["age"] = "Age";
        $csvheader["screen_exited"] = "Screen Exited on";
        $csvheader["origin_url"] = "Origin Url";

        fputcsv($output_handle, $csvheader);

        foreach ($results as $result) {
            $usermeta = json_decode($result->userdata);
            $old_date_timestamp = strtotime($result->createdDate);
            $new_date = date("M d Y h:i:s A", $old_date_timestamp);

            $doy = $usermeta->userData->date_of_birth;
            $year = date("Y");
            $age =
                str_contains($doy, "-") || str_contains($doy, "Over")
                    ? $doy
                    : $year - $doy;

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

            $add_url = $usermeta->lpData->origin->formUrl
                ? $usermeta->lpData->origin->formUrl
                : get_site_url();

            $locationData["date_time"] = $new_date;
            $locationData["guid"] = $result->id;
            $locationData["me_loved_one"] = $usermeta->userData->type;
            $locationData["age"] = $age;
            $locationData["screen_exited"] = $add_exit_screen;
            $locationData["origin_url"] = $add_url;

            fputcsv($output_handle, $locationData);
        }

        fclose($output_handle);

        die();
    }

    //register GHX settings
    register_setting("ghx-email-settings-group", "email_header_logo");
    register_setting("ghx-email-settings-group", "email_privacy_policy");
    register_setting("ghx-email-settings-group", "ghx_form");
    register_setting("ghx-email-settings-group", "email_unsubscribe");

    register_setting("ghx-email-settings-group", "loved-one-form");
    register_setting("ghx-email-settings-group", "for-me-form");
    register_setting("ghx-email-settings-group", "savemyspot-form");

    register_setting("ghx-email-settings-group", "data-retention");

    register_setting("ghx-email-settings-group", "ghx_logo");
    register_setting("ghx-email-settings-group", "ghx_google_tagmanager");
    register_setting("ghx-email-settings-group", "ghx_google_analytics");

    register_setting("ghx-email-settings-group", "ghx_brand_color");
    register_setting("ghx-email-settings-group", "ghx_secondary_color");
    register_setting("ghx-email-settings-group", "ghx_tertiary_color");
    register_setting("ghx-email-settings-group", "ghx_font_color");
    register_setting("ghx-email-settings-group", "ghx_button_color");

    register_setting("ghx-email-settings-group", "ghx_background_color");
    register_setting("ghx-email-settings-group", "ghx_enable_background_color");


    register_setting("ghx-email-settings-group", "ghx_background_image");
    register_setting("ghx-email-settings-group", "ghx_enable_background_image");

    register_setting("ghx-email-settings-group", "ghx_enable_popup_bg");

    register_setting("ghx-email-settings-group", "ghx_font_family");
    register_setting("ghx-email-settings-group", "ghx_css_variable");
    

    register_setting("ghx-email-settings-group", "contact_url");
    register_setting("ghx-email-settings-group", "in_page_url");

    register_setting("ghx-email-settings-group", "ghx_submission_redirect");

    register_setting("ghx-email-settings-group", "custom_page");

    register_setting("ghx-email-settings-group", "email_forme_header_banner");
    register_setting("ghx-email-settings-group", "email_sms_header_banner");
    register_setting(
        "ghx-email-settings-group",
        "email_lovedone_header_banner"
    );
    register_setting("ghx-email-settings-group", "email_footer");

    register_setting("ghx-email-settings-group", "savemyspot_email_content");
    register_setting("ghx-email-settings-group", "lovedone_email_content");
    register_setting("ghx-email-settings-group", "forme_email_content");

    if( isset($_REQUEST['ghx_form']) && $_REQUEST['ghx_form']=='Ninja Forms'){

        global $wpdb;

        $for_me = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - For Me'
            )
        );

        $loved_one = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - Loved One'
            )
        );

        $save_my_spot = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id FROM {$wpdb->prefix}nf3_forms WHERE `form_title` = %s",
                'GHX - Save My Spot'
            )
        );

        if( !empty($for_me) || !empty($loved_one) || !empty($save_my_spot) )
        {
           
          
        } else {
        create_dynamic_ninja_form_with_email_action();
        }

    }
  


}


// Generate secondary color from primary coloe for GHX color scheme
function adjustBrightness($hexCode, $adjustPercent)
{
    $hexCode = ltrim($hexCode, "#");

    if (strlen($hexCode) == 3) {
        $hexCode =
            $hexCode[0] .
            $hexCode[0] .
            $hexCode[1] .
            $hexCode[1] .
            $hexCode[2] .
            $hexCode[2];
    }

    $hexCode = array_map("hexdec", str_split($hexCode, 2));

    foreach ($hexCode as &$color) {
        $adjustableLimit = $adjustPercent < 0 ? $color : 255 - $color;
        $adjustAmount = ceil($adjustableLimit * $adjustPercent);

        $color = str_pad(dechex($color + $adjustAmount), 2, "0", STR_PAD_LEFT);
    }

    return "#" . implode($hexCode);
}


// Delete Ninja form submission data after 90 days
function delete_old_nf_sub_posts_and_meta()
{
    $data_retention = get_option("data-retention", true);

    if ($data_retention != 1) {
        return;
    }

    global $wpdb;
    $days = 90;
    $date_threshold = date("Y-m-d H:i:s", strtotime("-$days days"));

    $nf_for_me = get_option("nf_For Me");
    $nf_loved_one = get_option("nf_Loved One");
    $nf_save_spot = get_option("nf_Save My Spot");

    $form_ids = [$nf_for_me, $nf_loved_one, $nf_save_spot];

    foreach ($form_ids as $formid) {
        // Get post IDs older than 90 days with post type 'nf_sub' and meta key '_form_id' = 16
        $post_ids = $wpdb->get_col(
            $wpdb->prepare(
                "SELECT p.ID FROM {$wpdb->prefix}posts p
                INNER JOIN {$wpdb->prefix}postmeta pm ON p.ID = pm.post_id
                WHERE p.post_date < %s AND p.post_type = %s AND pm.meta_key = %s AND pm.meta_value = %d",
                $date_threshold,
                "nf_sub",
                "_form_id",
                $formid
            )
        );

        if (!empty($post_ids)) {
            foreach ($post_ids as $post_id) {
                // Delete post metadata
                $wpdb->query(
                    $wpdb->prepare(
                        "DELETE FROM {$wpdb->prefix}postmeta WHERE post_id = %d",
                        $post_id
                    )
                );

                // Delete post
                wp_delete_post($post_id, true);
            }
        }
    }
}
add_action("nf_sub_cleanup_event", "delete_old_nf_sub_posts_and_meta");
?>