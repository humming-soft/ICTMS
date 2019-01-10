<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class project extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct('login'); //language file name passed as argument.
        $this->load->helper('form');
        $this->load->model('user','',TRUE);
    }
    public function index()
    {


    }

    function add()
    {
        $projectName = $this->input->post('pjt_name');
        $projectOwner = $this->input->post('pjt_ownerStr');
        $projectDirector = $this->input->post('pjt_directorStr');
        $projectManager = $this->input->post('pjt_managerStr');
        $projectPreparedDate = $this->input->post('pjt_preparedDate');
        if($this->input->post('rd_resolvable')=="1")
        {
            $projectResolvable=$this->input->post('rosolvableStr');
        }
        if($this->input->post('rd_benefit_org')=="1")
        {
            $projectBenefits=$this->input->post('benefitStr');
        }
    }


}
