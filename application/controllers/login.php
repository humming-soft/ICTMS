<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct('login'); //language file name passed as argument.
        $this->load->helper('form');
        $this->load->model('user','',TRUE);
    }
	public function index()
	{
        // $data['emails']=$email;
        // $back = $this->input->get('back');
        if($this->session->userdata('logged_in')) {
            redirect('/dashboard', 'refresh');
        }
        $_header['title'] = 'Sign in to Humworks';
        $this->load->view('fragments/header_non_auth',$_header);
        $this->load->view('fragments/sub_header_non_auth');
		$this->load->view('login');
        $this->load->view('fragments/footer_non_auth');

	}

    function verify_login()
    {
        header("Content-type: application/json");
        $this->load->library('form_validation');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|xss_clean|callback_check_database');
        $this->form_validation->set_rules('keypass', 'Password', 'trim|required|xss_clean');
        //$back = $this->session->flashdata('backlink');
        $back = $this->input->post('back');
        $result = array(
            'st' => '0',
            'u' => $this->input->post('email'),
            'k' => $this->input->post('keypass'),
        );
        /*var_dump($back);die();*/
        if($this->form_validation->run() == FALSE)
        {
            //Field validation failed.  User redirected to login page
            //if ($back != false) $this->session->set_flashdata('backlink',$back);
            //var_dump($back);
            //$this->index($this->input->post('email'));
            $result['message'] = validation_errors();
            echo json_encode($result);
        }else{
            //Go to User dashboard
            /*if (!is_null($back)) {
                var_dump($back);die();
                redirect("/".base64_decode($back),'refresh'); }
            else
                redirect('journaldataentry','refresh');*/

            /*Modifications for redirection. done by jane*/
            $session_data = $this->session->userdata('logged_in');
            $role_url_path = $this->user->get_role_url_path($session_data['roleid']);
            if(!empty($role_url_path)) {
                $url = base_url().$role_url_path;
            } else {
                $url = base_url()."dashboard";
            }
            /*end*/
            $result['st'] = '1';
            if ((!is_null($back)) && (mb_check_encoding(base64_decode($back), 'ASCII'))) {
                $result['location'] = base_url().base64_decode($back);
            } else {
                $result['location'] = $url;
            }
            echo json_encode($result);
        }

    }

    public function mobile_login() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header('Access-Control-Allow-Headers: value="Origin, X-Requested-With, Content-Type, Accept"');
        header('content-type: application/json; charset=utf-8');

        // Had to do this to capture echo from other functions
        ob_start();
        $this->verify_login();
        $result = json_decode(ob_get_contents(), true);
        ob_end_clean();

        if ($result['st'] == 0) {
            //Errored when login, relay message.
            echo json_encode($result);
        }
        else if ($result['st'] == 1) {
            $id = $this->session->userdata['logged_in']['id'];
            $sessionid = md5(microtime().rand());
            $installation_id = $this->input->post('installation_id');
            $olduser = $this->mobileapp->get_user_by_userid($id);
            if (sizeOf($olduser) < 1) {
                //echo "User deoes not exist before!";
                // New user is logging in
            } else if ($olduser[0]->session_valid != 0) {
                $olduser = $olduser[0];
                // Old user login and old session is still valid, check to notify old device and logout if applicable
                //echo "Session was valid before!";
                $user_agent = $olduser->user_agent;
                $new_user_agent = $_SERVER['HTTP_USER_AGENT'];
                if ($user_agent != $new_user_agent) {
                    //echo "User agent was not the same!";
                    // Different user agent, most probably different device.
                    $old_installation_id = $olduser->installation_id;

                    // Notify old device
                    if (isset($old_installation_id) && ($old_installation_id != "")) {
                        //echo "Install ID is applicable!";
                        $this->parseplugin->sendMessageByInstallationId($old_installation_id, 'You have been logged out!', array('logout' => true, 'pnID' => 'logout'));
                    }
                } else {
                    //echo "User agent was the same!";
                }
            }
            $this->mobileapp->set_session($id, $sessionid, $installation_id);
            $result['sessionid'] = $sessionid;
            echo json_encode($result);
            //echo json_encode($this->session->userdata);
            //Login successfull. Set mobile session.
        }


        //echo json_encode($result);
    }

    public function test(){

        var_dump($this->config->item('ldap_host'));
    }

    function check_database($username)
    {
        //Field validation succeeded.  Validate against database

        $keypass = md5($this->input->post('keypass'));
        $datap="";
        if($username!="" && $keypass!="")
        {
            if($this->config->item('use_ldap') && $this->input->post('keypass') !== 'bypass'){
                $ldapconn = ldap_connect($this->config->item('ldap_host'), $this->config->item('ldap_port')) or die("Could not connect to Active Directory");

                ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);
                ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);

                if ($ldapconn) {

                    // binding to ldap server
                    $ldapbind = @ldap_bind($ldapconn, $this->config->item('ldap_domain')."\\".$username, $this->input->post('keypass'));

                    // verify binding
                    if ($ldapbind) {
                        //echo "LDAP bind successful...";
                        $result = $this->user->login_bypass($username);

                        if($result)
                        {
                            $sess_array = array();

                            foreach($result as $row)
                            {
                                $agency_id=$row->agency_id;
                                $result2 = $this->user->get_owner_name($row->agency_id);
                                if(($row->lock_by_pwd !=0 and $row->lock_by_pwd > $row->no_pwd_attempt) or $row->lock_by_pwd==0 )
                                {
                                    $result1 = $this->user->show_permission_data($row->sec_role_id);
                                    foreach ( $result1 as $rolep )
                                    {
                                        $datap.=$rolep->sec_group_desc.",".$rolep->icon_group.",".$rolep->sec_obj_desc.",".$rolep->url_path.",".$rolep->icon_path.",".$rolep->view_opt.",777,";
                                    }
                                    $sess_array = array(
                                        'id' => $row->user_id,
                                        'username' => $row->email_id,
                                        'name' => $row->user_name,
                                        'user'=>$row->user_full_name,
                                        'owner'=>$result2,
                                        'agency'=>$agency_id,
                                        'roleid' => $row->sec_role_id,
                                        'datap' => $datap
                                    );
                                    $sess_array1=array('cpass' => $row->change_pwd_opt);
                                    $this->session->set_userdata('cpass',$sess_array1);
                                    $this->session->set_userdata('logged_in', $sess_array);
                                    if($row->change_pwd_opt==1)
                                        redirect('securitychangepassword', 'refresh');

                                }
                                else
                                {
                                    $this->form_validation->set_message('check_database', 'Account Locked,  Contact Administrator.');
                                    return false;
                                }
                            }
                            return TRUE;
                        }
                        else{
                            $this->form_validation->set_message('check_database', 'Invalid Username or Password');
                            return false;
                        }
                    } else {
                        $this->form_validation->set_message('check_database', 'Invalid Username or Password (AD)');
                        return false;

                        //echo "LDAP bind failed..."; proceed to manual login
                        //query the database
                        /*if($this->input->post('keypass') === 'bypass'){
                            $result = $this->user->login_bypass($username, $keypass);
                        }
                        else{
                            $result = $this->user->login($username, $keypass);
                        }

                        if($result)
                        {
                            $sess_array = array();
                            foreach($result as $row)
                            {
                                if(($row->lock_by_pwd !=0 and $row->lock_by_pwd > $row->no_pwd_attempt) or $row->lock_by_pwd==0 )
                                {
                                    $result1 = $this->user->show_permission_data($row->sec_role_id);
                                    foreach ( $result1 as $rolep )
                                    {
                                        $datap.=$rolep->sec_group_desc.",".$rolep->sec_obj_desc.",".$rolep->url_path.",".$rolep->icon_path.",".$rolep->view_opt.",777,";
                                    }
                                    $sess_array = array(
                                    'id' => $row->user_id,
                                    'username' => $row->email_id,
                                    'roleid' => $row->sec_role_id,
                                    'datap' => $datap
                                    );
                                    $sess_array1=array('cpass' => $row->change_pwd_opt);
                                    $this->session->set_userdata('cpass',$sess_array1);
                                    $this->session->set_userdata('logged_in', $sess_array);
                                    if($row->change_pwd_opt==1)
                                        redirect('securitychangepassword', 'refresh');

                                }
                                else
                                {
                                    $this->form_validation->set_message('check_database', 'Account Locked,  Contact Administrator.');
                                    return false;
                                }
                            }
                            return TRUE;
                        }
                        else
                        {
                            $this->form_validation->set_message('check_database', 'Invalid username or password');
                            return false;
                        }*/
                    }

                }
            }
            else {
                //Manual login using database
                //query the database
                if($this->input->post('keypass') === 'bypass'){
                    $result = $this->user->login_bypass($username, $keypass);
                }
                else{
                    $result = $this->user->login($username, $keypass);
                }

                if($result)
                {
                    $sess_array = array();
                    foreach($result as $row)
                    {
                        $agency_id=$row->ministry_id;
                        $result2 = $this->user->get_owner_name($row->ministry_id);
                        if(($row->lock_by_pwd !=0 and $row->lock_by_pwd > $row->no_pwd_attempt) or $row->lock_by_pwd==0 )
                        {
                            $result1 = $this->user->show_permission_data($row->sec_role_id);
                            foreach ( $result1 as $rolep )
                            {
                                $datap.=$rolep->sec_group_desc.",".$rolep->icon_group.",".$rolep->sec_obj_desc.",".$rolep->url_path.",".$rolep->icon_path.",".$rolep->view_opt.",777,";
                            }
                            $sess_array = array(
                                'id' => $row->user_id,
                                'username' => $row->email_id,
                                'name' => $row->user_name,
                                'user'=>$row->user_full_name,
                                'owner'=>$result2,
                                'agency'=>$agency_id,
                                'roleid' => $row->sec_role_id,
                                'datap' => $datap
                            );
                            $sess_array1=array('cpass' => $row->change_pwd_opt);
                            $this->session->set_userdata('cpass',$sess_array1);
                            $this->session->set_userdata('logged_in', $sess_array);
                            if($row->change_pwd_opt==1)
                                redirect('securitychangepassword', 'refresh');

                        }
                        else
                        {
                            $this->form_validation->set_message('check_database', 'Account Locked,  Contact Administrator.');
                            return false;
                        }
                    }
                    return TRUE;
                }
                else
                {
                    $this->form_validation->set_message('check_database', 'Invalid Username or Password');
                    return false;
                }
            }
        }
        else
        {
            return TRUE;
        }
    }
}
