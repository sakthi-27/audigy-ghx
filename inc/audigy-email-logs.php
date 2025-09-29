<?php

// Adding unsubscribe link
add_filter('wp_mail','redirect_mails', 10,1);
function redirect_mails($args){
    
    //$args['headers'] = array('Content-Type: text/html; charset=UTF-8');
    /*$keySalt = "aghtUJ6y"; 
    
    $query_string = '?unsubscribe=' . urlencode('1') . '&e=' . encryptor('encrypt',$args['to']);  

    $args['message'] =  $args['message'].'<br><p align="center"><a href="'.get_permalink(22183).htmlentities($query_string).'">Unsubscribe</a></p>';
    */
    return $args;

}


// Adding unsubscribed email into DB
add_action('wp_ajax_audigy_lp_email_logs', 'audigy_lp_email_logs');
add_action('wp_ajax_nopriv_audigy_lp_email_logs', 'audigy_lp_email_logs');

function audigy_lp_email_logs(){

        if( !isset($_POST['email']) )
        return;
        
        $email = sanitize_email($_POST['email']);

        global $wpdb;
        

        $table = $wpdb->prefix . 'lp_email_logs';
        $wpdb->delete( $table, array( 'email' => $email ) );
        
     	$table_name = $wpdb->prefix . 'lp_email_logs';
    	
         $sql = $wpdb->prepare(
            "INSERT INTO {$table_name} (email) VALUES (%s)",
            $email
        );
        $response = $wpdb->query($sql);
	
    	
    	
    	echo $email;
    	exit;
	    //return $email;
    
}


function encryptor($action, $string) {
    $output = false;

    $encrypt_method = "AES-256-CBC";
    //pls set your unique hashing key
    $secret_key = 'muni';
    $secret_iv = 'muni123';

    // hash
    $key = hash('sha256', $secret_key);

    // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
    $iv = substr(hash('sha256', $secret_iv), 0, 16);

    //do the encyption given text/string/number
    if( $action == 'encrypt' ) {
        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
        $output = base64_encode($output);
    }
    else if( $action == 'decrypt' ){
    	//decrypt the given text/string/number
        $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
    }

    return $output;
}

?>