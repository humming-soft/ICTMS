<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

Class projectModel extends CI_Model
{
    function add_project_detail_master($data,$name)
    {
        $this->db->insert('tbl_pjt_master', $data);
        $query=$this->db->query("SELECT max(pjt_master_id) as pjt_master_id FROM tbl_pjt_master where pjt_name='$name'");
        $rows=$query->result();
        foreach ($rows as $row):
            $pjt_id=$row->pjt_master_id;
        endforeach;
        return $pjt_id;
    }
    function add_project_target_deatil($data)
    {
        return $this->db->insert('tbl_pjt_target', $data);
    }
    function add_project_outcome_deatil($data)
    {
        return $this->db->insert('tbl_pjt_outcomes', $data);
    }
    function add_user($data)
    {
        $this->db->insert('sec_user', $data);
        return true;
    }
    function getUserID()
    {
        $query=$this->db->query("SELECT max(user_id) as userId FROM sec_user");
        $rows=$query->result();
        foreach ($rows as $row):
            $user_id=  $row->userId + 1;
        endforeach;
        return $user_id;
    }
}