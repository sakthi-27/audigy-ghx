<?php
class AudigyAjax {
    
   private $audioFiles = [];
    
    public function __construct() {
        $this->audioFiles = [
            "500hz" => plugin_dir_url( dirname (__FILE__) ) . "inc/audio/warble_500.mp3",
            "1000hz" => plugin_dir_url( dirname (__FILE__) ) . "inc/audio/warble_1000.mp3",
            "2000hz" => plugin_dir_url( dirname (__FILE__) ) . "inc/audio/warble_2000.mp3",
            "4000hz" => plugin_dir_url( dirname (__FILE__) ) . "inc/audio/warble_4000.mp3",
        ];
    }
  	
  	public function get_lp_token() {
  	    
  		if(wp_doing_ajax()) {
  		    
  			$api = new AudigyLpApi();
  			
  			global $wpdb;
  			
  			$response = $api->get_token();
  		    
  			wp_send_json($response);
  			wp_die();
  		}
  	    
  	}
  	
  	public function get_lp_data_by_id() {
  	    
  		if(wp_doing_ajax()) {
  		    
  			$api = new AudigyLpApi();
  			
  			global $wpdb;
  			
  			$token = $api->get_token();
  			$temp = json_decode($token["body"]);
  			
  			$response = $api->create_subject('/'.$_POST["id"], NULL, $temp->access_token, "GET");
  		    
  			wp_send_json($response);
  			wp_die();
  		}
  	}
  	
  	public function save_data_to_lp() {
  	    
  		if(wp_doing_ajax()) {
  		    
  			$api = new AudigyLpApi();
  			
  			global $wpdb;
  			
  			$response = [
  			    "success" => false
  			];
  			
  			//$formData["id"] = "7812319823948572324";

  			$data = $api->create_subject('', $_POST["data"], $_POST["token"], "POST");
  		//var_dump();
  			
  			if ($data["response"] && ($data["response"]["code"] === 200 || $data["response"]["code"] === 201)) {
  			    $response["success"] = true;
      		// 	session_write_close();
      		
  			}

  			$apiEmail = new AudigyWp();

  			// get template
            /*$message = file_get_contents(plugin_dir_url( dirname (__FILE__) )."/inc/emailer/provider-alert.html");
            
            if($_POST['data']['leadType']=='Schedule an appointment'){
              $leadType = 'a call to schedule an appointment';
              $practiceHeading = 'Appointment </br>requested!';
            }
            if($_POST['data']['leadType']=='Help with an existing hearing aid'){
              $leadType = 'a call for help with an existing hearing aid';
              $practiceHeading = 'Help with an existing hearing aid </br>requested!';
            }
            if($_POST['data']['leadType']=='Learn more about your practice'){
              $leadType = 'more information about your practice';
              $practiceHeading = 'More information about your practice </br>requested!';
            }
            
            $search    = ["{practice}", "{Enqtype}","{PracticeHeading}"];
            $replace   = [$_POST["data"]["practiceInfo"]["name"], $leadType, $practiceHeading];
            */
            
            // string replace
            /*$message = str_replace($search, $replace, $message);
            
            $subject = 'HearingLoss.com - Provider alert';
  			
            $apiEmail->send_email(
                        $_POST["data"]["email"],
                        $subject,
                        $message
            );*/
       
  			
  			$response['postalcode'] = $_POST['data']['postalCode'];
  			
  			wp_send_json($response);
  			wp_die();
  		}
  	}
  	
  	
    public function fetch_location_data() {
      	
      	if(wp_doing_ajax()) {
      	    
      	    
      	    $locId = $_POST['locId'];
      	    
      	    //Contact form data
            $lpData = $this->lp_form_data($_POST);
            
            $this->insert_cp_data($_POST);

            // Locations data
            $lpData['locationInfo'] = $this->fetch_location_info($locId);

            $practice = get_post_meta($locId, 'member_id__c', true);
           
            // Fetch practice data
            $lpData['practiceInfo'] = $this->fetch_practice_info($practice);

            // Generating token
    	    $token = $this->get_LPtoken();
    	    
    	    //Sending data into LP API
    	    $response = $this->send_data_to_lp($token,$lpData);
    	    
            wp_send_json($response);
            wp_die();

      	}
      	

    }
    
    
    // Fetch LP token
    public function get_LPtoken(){
        
        
        	$api = new AudigyLpApi();
  			
  			global $wpdb;
  			
  			$response = $api->get_token();
        
            return $response;
            
    }
    
    
    // Send data into LP API
    public function send_data_to_lp($token,$data) {
  	    

  			$api = new AudigyLpApi();
  			
  			global $wpdb;
  			
  			$apiToken = json_decode($token["body"]);
  			
  			$response = [
  			    "success" => false
  			];
  			
  			/*echo "<pre>";
  			print_r($data);
  			echo "</pre>";*/
  			
  			$data = $api->create_subject('', $data, $apiToken->access_token, "POST");
  			
  		

  			if ($data["response"] && ($data["response"]["code"] === 200 || $data["response"]["code"] === 201)) {
  			    $response["success"] = true;
  			}
  			

  			$apiEmail = new AudigyWp();
       
  			//$response['postalcode'] = $_POST['data']['postalCode'];
  			
  		    return $response;
  		
  	}
  	
  	
  	// Fetching practice data 
  	public function fetch_practice_info($practice){
  	    
  	     $args = array (
                'post_type'              => 'practice',
                'post_status'            => 'publish',
                'meta_query'             => array(
                    array(
                        'key'       => 'member_id__c',
                        'value'     => $practice,
                    ),
                ),
            );
            
            $querytwo = new WP_Query( $args );
            if ( $querytwo->have_posts() ) {
                while ( $querytwo->have_posts() ) {
                    $querytwo->the_post();
                      $post_id = $querytwo->post->ID;
                      
                      $practice_email = get_post_meta($post_id, 'email_to', true);
                      
                      if(get_post_meta($post_id, 'email_cc', true))
                      $practice_email .= ','.get_post_meta($post_id, 'email_cc', true);
                      
                      if(get_post_meta($post_id, 'email_bcc', true))
                      $practice_email .= ','.get_post_meta($post_id, 'email_bcc', true);
            
                      $locationsinfo['email'] = $practice_email;
                      $locationsinfo['name']  = get_the_title($post_id);
                    
                }
           } 
           
                       
           wp_reset_postdata();
           
           return $locationsinfo;
  	    
  	}
  	
  	
  	public function fetch_location_info($locId){
  	    
  	    
  	    $lpData['shippingstreet'] = get_post_meta($locId,'shippingstreet',true);
        $lpData['shippingcity'] = get_post_meta($locId,'shippingcity',true);
        $lpData['shippingstate'] = get_post_meta($locId,'shippingstate',true);
        $lpData['shippingpostalcode'] = get_post_meta($locId,'shippingpostalcode',true);
        $lpData['shippingcountry'] = get_post_meta($locId,'shippingcountry',true);
        $lpData['Id'] = $locId;
        $lpData['externalID'] = get_post_meta($locId,'location_id__c',true) ? get_post_meta($locId,'location_id__c',true) : '';
        $lpData['name'] = get_the_title($locId);
  	    
  	    return $lpData;
  	}
  	
  	
  	public function lp_form_data($postdata){
  	    
  	    
  	 
  	    
  	    $locId = $postdata['locId'];
  	    
  	    $formData = $postdata['formData'];
  	    
  	    $api = new AudigyWp();
    	$data = $api->get_user_meta($postdata['spot_id']);
    	
    	   
            
        foreach($formData as $val){
            
            if($val['name']=='balance')
            $lpData['leadType']  = $val['value'];
            
            if($val['name']=='first-name')
            $lpData['firstName'] = $val['value'];
            
            if($val['name']=='last-name')
            $lpData['lastName'] = $val['value'];
            
            if($val['name']=='email-address')
            $lpData['email'] = $val['value'];
            
            if($val['name']=='phone-number')
            $lpData['phone'] = $val['value'];
            
        }

        $ghxinfo = ( !empty($data)  ) ? 'ContactProviderWithGHXResults' : 'ContactProvider';
        
        $postalCode = ( !empty($postdata['lp_data']['postalCode']) ) ? $postdata['lp_data']['postalCode'] : '' ;

        $lpId = ( isset($postdata['spot_id']) && $postdata['spot_id']!='' ) ? $postdata['spot_id'] : $postdata['lp_randId'];
        
        $lpData['id'] = $lpId;
        $lpData['message'] = '';
        $lpData['birthYear'] = '';
        $lpData['postalCode'] = $postalCode;
        $lpData['city'] = '';
        $lpData['state'] = '';
        $lpData['geoLatitude'] = 0;
        $lpData['geoLongtitude'] = 0;
        $lpData['timestamp'] = time();
        $lpData['origin'] = ['consentInfo'=>['firstName'=> $lpData['firstName'],'lastName'=> $lpData['lastName'] ],
                                     'submissionType' => $ghxinfo,
                                     'formName' =>  'ContactProvider',
                                     'formUrl' => get_permalink($locId)
        ];
        
        
        if(!empty($data) && $data['userdata']->lpData->questionnaireResults!='')
         $lpData['questionnaireResults'] = $data['userdata']->lpData->questionnaireResults;
    	else
    	 $lpData['questionnaireResults'] = '';
    	
    	if(!empty($data) && $data['userdata']->lpData->screenerResults!='')
    	$lpData['screenerResults'] = $data['userdata']->lpData->screenerResults;
        else
        $lpData['screenerResults'] = '';
  	    
  	    return $lpData;
  	    
  	}
  	
  	
  	public function insert_cp_data($data){
  	    
  	    
  	    global $wpdb;
  	    
  	    $api           = new AudigyWp();
    	$ghx_data      = $api->get_user_meta($data['spot_id']);
    	$ghx_attached  = ( !empty($ghx_data)  ) ? 1 : 0;
    	$postalCode    = ( !empty($data['lp_data']['postalCode']) ) ? $data['lp_data']['postalCode'] : '' ;
	
		$table_name    = $wpdb->prefix . 'contact_provider_leads';

		$response = $wpdb->insert(
			$table_name, 
			array( 
				'location_id' => $data['locId'],
				'ghx_attached' => $ghx_attached,
				'zip_code' => $postalCode,
				'origin' => get_permalink($data['locId'])
			) 
		);
  	    
  	    
  	}
    
    
    /**
     * NOTE: This is tied to the SaveMySpot functionality in the GHX. 
     * All data is saved into the database so a visitor can restore his position 
     * in the GHX through a link sent via email. 
     * Note that all data is saved EXCEPT FOR PII -- first name, last name, 
     * and email is excluded.
     */
  	public function save_spot() {
  	    
  	    
  		if(wp_doing_ajax()) {
  		    
  		    // Extract form data
  		    $extract_data = $_POST;
  		    
  		    $ghxscrener_data = $this->remove_PIIinfo($extract_data['data']);

  			
  			$api = new AudigyWp();
  			
  			$data = $api->get_user_meta(
  			    $extract_data["id"]
  			);
  			
  			// Save GHX data into database
      	    $this->saveorUpdateSpot($data,$ghxscrener_data,$extract_data);
  		
  			
  			wp_send_json($data);
  			wp_die();
  		}
  	}
  	
  
  	public function remove_PIIinfo($postData) {
  	    
  	    $postData['zipcode'] = $postData['userData']['final']['zip_code'];
  	    
  	    unset($postData['userData']['final']);
  	    return $postData;
  	    
  	}
  	
  	public function saveorUpdateSpot($data,$ghxscrener_data,$extract_data){

  	    $api = new AudigyWp();
  	    
  		if (count($data)) {
  		    $data = $api->update_user_meta(
  			    $extract_data["id"],
  			    $ghxscrener_data
  			);
  		}
  		else {
  		    
  			$data = $api->create_user_meta(
  			    $extract_data["id"],
  			    $ghxscrener_data
  			);
            
            // Send email notification to user
  		}
  		
        $this->sendEmail($extract_data);
  			
  	    
  	}
  	
  	
  	public function sendEmail($extract_data){
  	    
  	    $api = new AudigyWp();
  	    
  	    $subject = ($extract_data["resultPage"] === "true") ? 'HearingLoss.com - Your results' : 'HearingLoss.com - We saved your spot';
  			
  		$api->send_email(
  		    $extract_data["email"],
  		    $subject,
  		    $this->getMessage($extract_data["resultPage"], $extract_data["link"], $extract_data['queryStrings'],$extract_data['firstName'],$extract_data["email"])
  		);
  	    
  	}
  	
  	
  	public function getMessage($resultPage, $link, $queryStrings ,$fname ,$to) {
        $fname = empty($fname) ? 'HearingLoss.com visitor' : $fname;
        
  	   $message = "";
  	   $convertedQueryString = '';
  	   
      if ($resultPage === "true") {
          if ($queryStrings["left"] && $queryStrings["right"]) {
              $convertedQueryString .= '&left=' . $queryStrings["left"] . "&right=" . $queryStrings["right"];
          }
          
        $convertedQueryString .= "&postalcode=" . $queryStrings["postalcode"];

        /*$message  = "Hello. Thank you for using the Guided Hearing Experience on HearingLoss.com. You can view your results at the link below: <br><br> ";
        $message .= '<a href="' . $link . $convertedQueryString . '">Link</a> <br><br>';
        $message .= "Thank you.";*/
        
        
        // get template
        $message = file_get_contents(get_home_path()."/wp-content/ghx-emailer/results-emails.html");
        
        $addLink = $link;
        $query_string = '?unsubscribe=' . urlencode('1') . '&e=' . encryptor('encrypt',$to);  
        $unsubscribe_link = get_permalink(22183).htmlentities($query_string);

        $search    = ["{link}", "{FirstName}","{unsubscribe_link}","{zipcode}","{siteurl}"];
        $replace   = [$addLink, $fname, $unsubscribe_link, $queryStrings["postalcode"],get_site_url()];
        
        // string replace
        $message = str_replace($search, $replace, $message);
        
        return $message;
      }
      
      else {
          
        // get template
        $message = file_get_contents(get_home_path()."/wp-content/ghx-emailer/save-my-spot.html");
        
        $query_string = '?unsubscribe=' . urlencode('1') . '&e=' . encryptor('encrypt',$to);  
        $unsubscribe_link = get_permalink(22183).htmlentities($query_string);
        
        $search    = ["{link}", "{FirstName}","{unsubscribe_link}","{siteurl}"];
        $replace   = [$link, $fname,$unsubscribe_link,get_site_url()];
        

        // string replace
        $message = str_replace($search, $replace, $message);
        
    
        /* $message  .= "Hello. Thank you for using the Guided Hearing Experience on HearingLoss.com. When you are ready to resume your hearing loss journey, please click the link below. <br><br> ";
         $message .= '<a href="' . $link . '">Link</a> <br><br>';
         $message .= "Thank you.";*/
         
         return $message;
      }
      
  	}
  	
  	public function get_spot_data() {
  		if(wp_doing_ajax()) {
  			$api = new AudigyWp();
  			
  			$data = $api->get_user_meta(
  			    $_POST["id"]
  			);
  			
  			wp_send_json($data);
  			wp_die();
  		}
  	}
  	
  	public function clean_trial_array($trials) {
  	   $data = [];
  	        
      foreach($trials as $trial) {
        $data[] = [
            "audible" => $trial["audible"] == "true" ? true : false,
            "tone" => [
                "frequency" => (int)$trial["tone"]["frequency"],
                "intensityDbHL" => (int)$trial["tone"]["intensityDbHL"]
            ]
        ];
      }
      
      return $data;
  	}
}
