<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

Class dashboardModel extends CI_Model
{
    function select_location()
    {
        $sql = "SELECT pjt_location_id, pjt_location_name FROM tbl_pjt_location";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_category()
    {
        $sql = "SELECT pjt_category_id, pjt_category_name FROM tbl_pjt_category";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_sector()
    {
        $sql = "SELECT pjt_sector_id, pjt_sector_name FROM tbl_pjt_sector order by pjt_sector_name";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_sub_sector($sectorId)
    {
        $values=$sectorId['subSector'];
        $sql = "SELECT pjt_sub_sector_id, pjt_sector_id, pjt_sub_sector_name FROM tbl_pjt_sub_sector where pjt_sector_id = $values order by pjt_sub_sector_name";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_current_projects()
    {
        $sql = "SELECT m.pjt_master_id, m.pjt_name,m. pjt_objective, m.pjt_progress,m.pjt_planned_date,m.pjt_estimate_cost,mini.ministry_name, dep.department_name FROM tbl_pjt_master m join tbl_ministry  mini on m.pjt_owner_id=mini.ministry_id join tbl_department dep on  dep.department_id=m.pjt_implementer_id";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_thrust()
    {
        $sql = "SELECT thrust_id, thrust FROM tbl_thrust";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_focusarea($thrustId)
    {
        $values = $thrustId['thrust'];
        $sql = "SELECT focus_area_id, thrust_id, focus_area FROM tbl_focus_area where thrust_id = $values";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function get_outcomes($thrustId)
    {
        $values = $thrustId['thrust'];
        $sql = "SELECT outcomes_id, outcomes FROM tbl_outcomes where thrust_id = '$values'";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function get_strategies($focusareaId)
    {
        $values = $focusareaId['focusarea'];
        $sql = "SELECT strategies_id,strategy  FROM tbl_strategies where focus_area_id = $values";
        $query = $this->db->query($sql);
        return $query->result();
    }

    function select_target_group()
    {
        $sql = "SELECT target_group_id, target_group_name FROM tbl_pjt_target_group";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_departments($dept)
    {
        $sql = "SELECT department_id, department_name FROM tbl_department where ministry_id=$dept";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_position()
    {
        $sql = "SELECT sec_role_id, sec_role_name FROM sec_role;";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function get_child($employee_id)
    {
        $sql3 = " SELECT employee_id, ministry_id, position_id, employee_name, employee_post_name,  emloyee_email, parent_id FROM employee where ministry_id=2 and parent_id= $employee_id;";
        $query3 = $this->db->query($sql3);
        return $query3->result();
    }
    public function get_ogchart( $userid)
    {
        $data = array();
        $parentKey = $userid;

        $sql3 = " SELECT user_id, user_name, user_full_name,  sec_role_name,  parent_id FROM tbl_pjt_user join  sec_role on sec_role.sec_role_id=tbl_pjt_user.sec_role_id and parent_id is null";
        $query3 = $this->db->query($sql3);
        $result= $query3->result();
        foreach($result as $key => $value)
        {
            $data['id'] = $value->user_id;
            $data['name'] = $value->user_full_name;
            $data['title'] = $value->sec_role_name;
            $data['children'] = $this->membersTree($parentKey);
        }
         return $data;
       }
        function membersTree($parentKey)
        {
            $row1 =array();
            $sql3 = "SELECT user_id as id,user_name, user_full_name as name,  sec_role_name, parent_id FROM tbl_pjt_user join  sec_role on sec_role.sec_role_id=tbl_pjt_user.sec_role_id and parent_id = $parentKey";
            $query3 = $this->db->query($sql3);
            $row = $query3->result();
            foreach($row as $key => $value)
            {
                $id = $value->id;
                $row1[$key]['id'] = $value->id;
                $row1[$key]['name'] = $value->name;
                $row1[$key]['title'] = $value->sec_role_name;
                $row1[$key]['children'] = array_values($this->membersTree($value->id));
            }

            return $row1;
        }


}