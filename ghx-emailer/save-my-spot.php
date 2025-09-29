<?php

$logo      = get_option('email_header_logo');
$banner    = get_option('email_forme_header_banner');
$footertxt = nl2br(get_option('email_footer'));
$content   = nl2br(get_option('savemyspot_email_content'));

$email_privacy_policy = get_option('email_privacy_policy');
$email_unsubscribe = get_option('email_unsubscribe');

if($logo=='')
$logo = esc_url( wp_get_attachment_url( get_theme_mod( 'custom_logo' ) ) );

$blogname = get_option( 'blogname' );



if($logo)
$header_logo = '<img src="'.$logo.'" alt="HearingLoss.com" style="width:170px; vertical-align: middle;" width="170" class="dark-mode-hide">';
else
$header_logo = '<span style="font-size:22px;color:#fff;">'.$blogname.'</span>';


if($logo)
$footer_logo = '<img src="'.$logo.'" alt="HearingLoss.com" style="width: 150px; vertical-align: middle;" width="150">';
else
$footer_logo = '<span style="font-size:22px;color:#fff">'.$blogname.'</span>';


$save_my_spot = '<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Save My Spot</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,300;1,300&family=Urbanist:ital,wght@0,300;1,300&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 580px) {
      table {
          width: 100% !important
      }
      .body_content{
        padding-top:10px !important; 
      }
      table tr.cover {
          background-position: center!important
      }

      table tr.cover .heading {
          background: linear-gradient(to right,transparent,#29313e 100%)!important
      }

      table tr.cover .heading h1 {
          width: 100%!important
      }

      table tr.footer,
      table tr.footer ul.links .link a,
      table tr.footer ul.links .sep a {
          font-size: .75em!important
      }
    }
    .footer a{
      color:#fff !important;
    }
  </style>
</head>

<body style="font-family: "Aleo", serif; line-height: 1.8; font-size: 1.35em; font-weight: 300;">
  <table style="width: 640px; border-collapse: collapse;" width="640">
    <thead>
      <tr>
        <th style="text-align: left; padding: 1em 1.5em;background:#29313e;
        text-align: center;" align="center">
                  <a href="#" style="text-decoration:none;">'.$header_logo.'</a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="cover"
      style="border-top: 10px solid #3c2a6a;background-color:#e1eaf3;">
        <td class="heading"
        style="padding: 0px; vertical-align: top;"
        valign="middle">
        <img src="'.$banner.'" style="width:100%;vertical-align: top;">
        </td>
      </tr>
      <tr class="content" style="background: #e1eaf3;">
        <td style="padding:10px 2em; vertical-align: middle;" valign="middle" class="body_content">
          <p>'.$content.'</p>
        </td>
      </tr>
      <tr class="hl-banner" 
      style="text-align: center; background: url("'.plugin_dir_path(__FILE__).'/ghx-emailer/pattern_bg.png") repeat; background-size: 100%; background-position: 200% 0;"
        align="center">
        <td style="vertical-align: middle; padding: 1em; background:#29313e;" valign="middle">
        '.$footer_logo.'
      </td>
      </tr>
      <tr class="footer" style="background: #6548c5; color: #fff; text-align: center; font-size: 0.9em;" align="center">
        <td style="padding: 2em; vertical-align: middle; padding-bottom: 3em;" valign="middle">
          <p class="hl-info" style="color:#fff;">'.$footertxt.'</p>
          <p class="links" style="text-align:center;display:inline-block;width:auto;margin: auto;list-style-type: none; padding: 0; margin-top: 2em; font-size: 0.85em;">
            ';
            
            if($email_privacy_policy){
            $save_my_spot .= '<span>
            <a href="'.$email_privacy_policy.'" style="color: #fff;">Privacy
            Policy</a>
            </span>';
            }
        
            $save_my_spot .= '</p>
        </td>
      </tr>
    </tbody>
  </table>

</body>

</html>';

?>