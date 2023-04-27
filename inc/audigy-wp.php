<?php

class AudigyWp {
	public function getTableName() {
		global $wpdb;
	
		return $wpdb->prefix . 'ghx_leads';
	}
    
	public function create_user_meta($id, $data) {
		//return add_user_meta($id, $meta_key, $data);
		
		    /*var_dump(json_encode($data));
		    exit();*/
		global $wpdb;
	
		$table_name = $this->getTableName();
		
		$response = $wpdb->insert(
			$table_name, 
			array( 
				'id' => $id, 
				'userdata' => json_encode($data)
			) 
		);
		
	    return $response;
	}
	
	public function get_user_meta($id) {
	    //return get_user_meta($id, $meta_key);
		global $wpdb;
		$retVal = [];
		$table_name = $this->getTableName();
	    $sql = "SELECT * FROM $table_name WHERE id = $id";
		$result = $wpdb->get_results($sql);
		
		if(count($result) && !empty($result[0]->id)) {
			$retVal = [
				"id" => $result[0]->id,
				"userdata" => json_decode($result[0]->userdata)
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
		
        $res = wp_mail( $to, $subject, $message );
        
        return [
        	"result" => $res,
        	"to" => $to,
        	"subject" => $subject
        ];
	}
}