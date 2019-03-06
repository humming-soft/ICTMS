<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class project extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct('login'); //language file name passed as argument.
        $this->load->helper('form');
        $this->load->model('projectModel','',TRUE);
        $this->load->model('dashboardModel','',TRUE);
    }
    function newOgchartUser()
    {
        $session_data = $this->session->userdata('logged_in');
        $username=$this->input->post('userName');
        $parentId=$this->input->post('parentId');
        $userMail=$this->input->post('userMail');
        $positionId=$this->input->post('position');
        $userdata = array(
            'user_name'  => $username,
            'user_full_name' => $username,
            'user_type' => 0,
            'email_id' => $userMail,
            'sec_role_id' => $positionId,
            'pjt_status' => 1,
            'parent_id' =>$parentId,
            'created_at'=> date('Y-m-d H:i:s'),
            'modified_at'=> date('Y-m-d H:i:s'),
            'created_by'=> 1,
            'modified_by'=> 1
        );
        $pjt_id=$this->projectModel->add_ogchart_user($userdata);
        if($pjt_id){
                $data['status'] = 1;
              /*  $data['ogchartNew']=$this->dashboardModel->get_ogchart($session_data['id']);*/
                $data['ogchartNew']=$this->dashboardModel->get_ogchart(1);
        }
        echo json_encode($data);
    }
    function add()
    {

        $session_data = $this->session->userdata('logged_in');
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
        /*$target_length = sizeof($this->input->post('target'));*/
        $projectPlanDate=$this->input->post('planned_date');
        /* $projectObjective=$this->input->post('pjt_objective');*/
        $projectdata = array('pjt_name' => $projectName,
            'pjt_objective' => " ",
            'pjt_progress' => 0,
            'pjt_date_created' => $projectPreparedDate,
            'pjt_location_id' => $pjtLocationId,
            'pjt_category_id' => $pjtCategoryId,
            'pjt_sector_id' => $pjtSectorId,
            'pjt_sub_sector_id' => $pjtSubSectorId,
            'pjt_planned_date' => $projectPlanDate,
            'thrust_id' => $pjtThrustId,
            'focus_area_id' => $pjtFocusAreaId,
            'pjt_owner_id' => $session_data['agency'],
            'pjt_director_id' => $this->input->post('pjt_directorID'),
            'pjt_manager_id'=>  $this->input->post('pjt_managerID'),
            'pjt_implementer_id' => $this->input->post('implementers'),
            'created_at'=> date('Y-m-d H:i:s'),
            'modified_at'=> date('Y-m-d H:i:s'),
            'created_by'=> 1,
            'modified_by'=> 1
            );
       $pjt_id=$this->projectModel->add_project_detail_master($projectdata,$projectName);
        if($pjt_id){
            $arr['users']=$this->input->post('userid[]');
            for($i=0;$i<sizeof($arr['users']);$i++)
            {
                $projectTargetdata = array(
                    'pjt_master_id' => $pjt_id,
                    'modified_at'=> date('Y-m-d H:i:s'),
                    'modified_by'=> 1
                );
                $this->projectModel->update_projectID($arr['users'][$i],$projectTargetdata);
            }
            //$arr['target']=$this->input->post('target[]');
            /*for($i=0;$i<sizeof($arr['target']);$i++)
            {
                $target_group = $arr['target'][$i]['target_group'];
                $target_name = $arr['target'][$i]['target_name'];
                $target_loc =  $arr['target'][$i]['target_loc'];
                $projectTargetdata = array('target_group_id' => $target_group,
                  'pjt_master_id' => $pjt_id,
                  'pjt_target_name' => $target_name,
                  'pjt_location_id' => $target_loc, 
                  'created_at'=> date('Y-m-d H:i:s'),
                  'modified_at'=> date('Y-m-d H:i:s'),
                  'created_by'=> 1,
                  'modified_by'=> 1
                );
              $this->projectModel->add_project_target_deatil($projectTargetdata);
            }*/
            $arr['outcomes'] = $this->input->post('outcomes');
            for($i=0;$i< sizeof($arr['outcomes']);$i++)
            {
                $outComesID = $arr['outcomes'][$i];
                $projectoutcomedata = array(
                    'pjt_master_id' => $pjt_id,
                    'outcomes_id' => $outComesID,
                    'created_at'=> date('Y-m-d H:i:s'),
                    'modified_at'=> date('Y-m-d H:i:s'),
                    'created_by'=> 1,
                    'modified_by'=> 1
                );
              $this->projectModel->add_project_outcome_deatil($projectoutcomedata);

            }
            redirect('dashboard',true);
        }
    }
}
