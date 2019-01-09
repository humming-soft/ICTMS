<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
    }
	public function index()
	{
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];
        $role_id = $session_data['roleid'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";
        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/fragments/main_navbar',$data1);
        $this->load->view('core/fragments/secondary_navbar');
        $this->load->view('core/dashboard');
        $this->load->view('core/fragments/footer');
    }
}