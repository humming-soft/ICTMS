<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pagenotfound extends CI_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form','url'));
    }
	public function index()
	{
	    $this->output->set_status_header('404');
        $this->load->view('fragments/header_non_auth');
        $this->load->view('fragments/sub_header_non_auth');
		$this->load->view('errors/error_404');
        $this->load->view('fragments/footer_non_auth');
	}
}
