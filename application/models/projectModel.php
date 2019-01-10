<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

Class projectModel extends CI_Model
{
    function add_project_detail_master($data)
    {
        return $this->db->insert('pjt-master', $data);
    }

}