<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class project extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct('login'); //language file name passed as argument.
        $this->load->helper('form');
        $this->load->model('projectModel','',TRUE);
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
        $pjtLocationId=$this->input->post('location');
        $pjtCategoryId=$this->input->post('category');
        $pjtSectorId=$this->input->post('sector');
        $pjtSubSectorId=$this->input->post('subsector');
        $pjtThrustId=$this->input->post('thrust');
        $pjtFocusAreaId=$this->input->post('focus_area');
        $target_length = sizeof($this->input->post('target'));
        $projectPlanDate=$this->input->post('planned_date');
        $projectdata = array('pjt_name' => $projectName,'pjt_description' => " ",'pjt_progress' => 0,'pjt_owner_name' => $projectOwner,'pjt_director_name' => $projectDirector,'pjt_manager_name' => $projectManager,
            'pjt_date_created' => $projectPreparedDate,
            'pjt_location_id' => $pjtLocationId,
            'pjt_category_id' => $pjtCategoryId,
            'pjt_sector_id' => $pjtSectorId,
            'pjt_sub_sector_id' => $pjtSubSectorId,
            'pjt_planned_date' => $projectPlanDate,
            'thrust_id' => $pjtThrustId,
            'focus_area_id' => $pjtFocusAreaId
            );
        $pjt_id=$this->projectModel->add_project_detail_master($projectdata,$projectName);
        if($pjt_id){
            $arr['target'] = $this->input->post('target');
            for($i=0;$i<$target_length;$i++)
            {

                $target_group = $arr['target'][$i]['target_group'];
                $target_name = $arr['target'][$i]['target_name'];
                $target_loc =  $arr['target'][$i]['target_loc'];
                $projectTargetdata = array('target_group_id' => $target_group,
                  'pjt_master_id' => $pjt_id,
                  'pjt_target_name' => $target_name,
                  'pjt_location_id' => $target_loc
                );
              $this->projectModel->add_project_target_deatil($projectTargetdata);
            }
            redirect('dashboard',true);
        }
    }
}
