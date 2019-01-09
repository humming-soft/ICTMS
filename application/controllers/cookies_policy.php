<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cookies_Policy extends CI_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
    }
	public function index()
	{
        $this->load->view('fragments/header_non_auth');
        $this->load->view('fragments/sub_header_non_auth');
        $this->load->view('cookies-policy');
        $this->load->view('fragments/footer_non_auth');

	}
}
