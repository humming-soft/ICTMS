<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Project extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
    }
	public function index($pid=null)
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/overview');
        $this->load->view('core/fragments/footer');
    }

    public function create(){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/create');
        $this->load->view('core/fragments/footer');
    }

    public function stakeholder_analysis($pid=null){
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
        $_header["support"] = array("footable");
        $_header["page_js"] = "stakeholder_analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/stakeholder_analysis');
        $this->load->view('core/fragments/footer');
    }

    public function business($pid=null){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/business_options');
        $this->load->view('core/fragments/footer');
    }

    public function benefits($pid=null){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/expected_benefits');
        $this->load->view('core/fragments/footer');
    }

    public function approach($pid=null){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/approach');
        $this->load->view('core/fragments/footer');
    }

    public function architecture($pid=null){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/architecture');
        $this->load->view('core/fragments/footer');
    }

    public function milestones($pid=null){
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
        $_header["support"] = array("gantt");
        $_header["page_js"] = "milestones";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/milestones');
        $this->load->view('core/fragments/footer');
    }

    public function deliverables($pid=null){
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
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/deliverables');
        $this->load->view('core/fragments/footer');
    }

    public function org($pid=null){
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
        $_header["support"] = array("orgchart");
        $_header["page_js"] = "org";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/org');
        $this->load->view('core/fragments/footer');
    }
}