<?php
class AudigyLpApi {
	
	public function create_subject($endpoint = "", $data, $token, $method) {
		$api_details = $this->api_details();
		$headers = [
			"Content-Type" => "application/json",
			"Authorization" => $token
		];

		$url = $api_details["lead_url"] . $endpoint;
		
		$response = $this->send_post_request($url, $data, $headers, $method);
		
		return $response;
	}
	
	public function get_token() {
		$api_details = $this->api_details();
		
		$headers = [
	        "Content-Type" => "application/x-www-form-urlencoded",
	        "Authorization" => $api_details["token"]
		];
		$response = $this->send_post_request($api_details["lead_processer_url"], NULL, $headers);
		return $response;
	}
	
	public function api_details(){
		return [
		    "lead_url" => constant('LP_LEAD_URL'),
		    "lead_processer_url" => constant('LP_TOKEN_URL'),
		    "token" => "Basic ".constant('LP_AUTH_TOKEN')
		];
	}
	
	private function send_post_request($url, $data, $headers, $method = "POST") {

		$args = [
			"method" => $method, 
			"headers" => $headers,
			"body" => json_encode($data)
		];
		
		if (empty($data)) {
			unset($args["body"]);
		}
		
		$response = wp_remote_post($url, $args);
		
		return $response;
	}
}