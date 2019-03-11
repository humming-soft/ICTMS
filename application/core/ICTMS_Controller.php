<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ICTMS_Controller extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $args = func_get_args();
        switch(func_num_args())
        {
        case 0:
            $this->check_status();
            break;
        case 1:
            $this->set_user_language($args[0]);
            break;
        default:
            $this->check_status();
        }
    }

    protected function set_user_language($page='login'){
        $set_lang = $this->input->cookie('user_lang',TRUE);
        $set_lang = isset($set_lang) ? $set_lang : 'en';
        if (file_exists("application/language/".$set_lang."/".$page.'_lang.php')) {
            $this->lang->load($page,$set_lang);
        }else{
            $this->lang->load($page,'en');
        }
    }

    private function check_status(){
        if(!$this->session->userdata('logged_in')) {
            redirect('login', 'refresh');
        }
    }
}