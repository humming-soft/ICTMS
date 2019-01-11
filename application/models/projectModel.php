<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

Class projectModel extends CI_Model
{
    function add_project_detail_master($data,$name)
    {
        $this->db->insert('pjt-master', $data);
        $query=$this->db->query("SELECT max(pjt_master_id) as pjt_master_id FROM \"pjt-master\" where pjt_name='$name'");
        $rows=$query->result();
        foreach ($rows as $row):
            $pjt_id=$row->pjt_master_id;
        endforeach;
        return $pjt_id;
    }
    function add_project_target_deatil($data)
    {
        return $this->db->insert('pjt-target', $data);
    }
}