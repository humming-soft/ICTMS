<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Update extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
    }
	public function index()
	{
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

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
        $this->load->view('core/fragments/sub_header',$data1);
        $this->load->view('core/se/project_update');
        $this->load->view('core/fragments/footer');
    }
}