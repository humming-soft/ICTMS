<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

Class dashboardModel extends CI_Model
{
    function select_location()
    {
        $sql = "SELECT pjt_location_id, pjt_location_name FROM \"pjt-location\"";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_category()
    {
        $sql = "SELECT pjt_category_id, pjt_category_name FROM \"pjt-category\"";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_sector()
    {
        $sql = "SELECT pjt_sector_id, pjt_sector_name FROM \"pjt-sector\"";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_sub_sector($sectorId)
    {
        $values=$sectorId['subSector'];
        $sql = "SELECT pjt_sub_sector_id, pjt_sector_id, pjt_sub_sector_name FROM \"pjt-sub-sector\" where pjt_sector_id = $values";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_thrust()
    {
        $sql = "SELECT thrust_id, thrust FROM thrust";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_focusarea($thrustId)
    {
        $values = $thrustId['thrust'];
        $sql = "SELECT focus_area_id, thrust_id, focus_area FROM \"focus-area\" where thrust_id = $values";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_target_group()
    {
        $sql = "SELECT target_group_id, target_group_name FROM \"pjt-target-group\";";
        $query = $this->db->query($sql);
        return $query->result();
    }
    function select_position()
    {
        $sql = "SELECT position_id, position_name FROM \"position\";";
        $query = $this->db->query($sql);
        return $query->result();
    }
}