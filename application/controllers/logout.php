<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Logout extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
    }
	public function index()
	{
        if($this->session->userdata('logged_in'))
        {
            // $this->db->cache_delete_all();
            $this->session->unset_userdata('logged_in');
            $this->session->unset_userdata('cpass');
        }
        redirect('/login', 'refresh');
	}
}
