<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->model('dashboardModel','',TRUE);
    }
	public function index()
	{

        $this->load->helper('form');
        $session_data = $this->session->userdata('logged_in');
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
        $data['username'] =$data1['username'] = $session_data['username'];
        $data['userid'] =$session_data['id'];
        $data['userfullname'] =$session_data['user'];
        if($session_data['roleid'] == 14){
            $data['owner_name'] = $session_data['owner'];
            $role_id = $session_data['roleid'];
            $data['location']=$this->dashboardModel->select_location();
            $data['category']=$this->dashboardModel->select_category();
            $data['sector']=$this->dashboardModel->select_sector();
            $data['thrust']=$this->dashboardModel->select_thrust();
            $data['position']=$this->dashboardModel->select_position();
            $data['department']=$this->dashboardModel->select_departments($session_data['agency']);
            $data['targetGroup']=$this->dashboardModel->select_target_group();
            $data['ogchart']=json_encode( $this->dashboardModel->get_ogchart(1));
            $data['projects']=$this->dashboardModel->select_current_projects();
            $_header["support"] = array("uniform","slick","orgchart","pikadate","repeater","multiselect");
            $_header["page_js"] = "dashboard";
            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/fragments/main_navbar',$data1);
            // $this->load->view('core/fragments/secondary_navbar');
            $this->load->view('core/dashboard',$data);
            $this->load->view('core/fragments/footer');
        }else if($session_data['roleid'] == 15){
            $_header["support"] = array("uniform","slick","orgchart","pikadate","repeater","multiselect");
            $_header["page_js"] = "dashboard";
            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar_pprisa');
            $this->load->view('core/projects/overview_pprisa',$data);
            $this->load->view('core/fragments/footer');
        }else{
            $_header["support"] = array("uniform","slick","orgchart","pikadate","repeater","multiselect");
            $_header["page_js"] = "dashboard";
            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar_vendor');
            $this->load->view('core/projects/overview_vendor',$data);
            $this->load->view('core/fragments/footer');
        }
    }
    public function get_subsector()
    {
        $sectorId = $this->input->post();
        $data=$this->dashboardModel->select_sub_sector($sectorId);
        echo json_encode($data);

    }
    public function get_focusarea()
    {
        $thrustId = $this->input->post();
        $data=$this->dashboardModel->select_focusarea($thrustId);
        echo json_encode($data);

    }
    public function get_strategies()
    {
        $focusareaID = $this->input->post();
        $data=$this->dashboardModel->get_strategies($focusareaID);
        echo json_encode($data);

    }
    public function get_outcomes()
    {
        $thrustId = $this->input->post();
        $data=$this->dashboardModel->get_outcomes($thrustId);
        echo json_encode($data);

    }
}