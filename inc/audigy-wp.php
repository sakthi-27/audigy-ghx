<?php

class AudigyWp {
	public function getTableName() {
		global $wpdb;
	
		return $wpdb->prefix . 'ghx_leads';
	}
    
	public function create_user_meta($id, $data) {
		//return add_user_meta($id, $meta_key, $data);
		
		/*  var_dump(json_encode($data));
	     exit();*/
		global $wpdb;
	
		$table_name = $this->getTableName();
		
		$sql = $wpdb->prepare(
			"INSERT INTO {$table_name} (id, userdata) VALUES (%d, %s)",
			$id,
			json_encode($data)
		);
		$response = $wpdb->query($sql);

	    return $response;
	}
	
	public function get_user_meta($id) {
	    //return get_user_meta($id, $meta_key);
		global $wpdb;
		$retVal = [];
		$table_name = $this->getTableName();
		
		$id      = isset($id) ? intval($id) : 0;
		$sql     = $wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id);
		$results = $wpdb->get_results($sql);
		
		if(count($results) && !empty($results[0]->id)) {
			$retVal = [
				"id" => $result[0]->id,
				"userdata" => json_decode($results[0]->userdata)
			];
		}
		
		return $retVal;
	}
	
	public function update_user_meta($id, $data) {
		global $wpdb;
		$table_name = $this->getTableName();
		
		$data = [ 'userdata' => json_encode($data) ];
		$where = [ 'id' => $id ];
		$response = $wpdb->update($table_name, $data, $where);
		
		return $response;
	}
	
	public function send_email ($to, $subject, $message) {
		
		add_filter('wp_mail_content_type', function( $content_type ) {
            return 'text/html';
		});

		add_filter('wp_mail_from_name', function( $original_email_from ) {
            return get_option( 'blogname' );
		});
		
        $res = wp_mail( $to, $subject, $message, $headers );
        
        return [
        	"result" => $res,
        	"to" => $to,
        	"subject" => $subject
        ];
	}


	 public function get_ghx_options() {
		
		if(wp_doing_ajax()) {
			
			$response = [
				"plugin_url" => plugin_dir_url( __DIR__ ),
			];
			
			wp_send_json($response);
			wp_die();
		}

	 }

}