<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Project extends ICTMS_Controller {

    function __construct()
    {
        parent::__construct();
    }
	public function index($pid=null)
	{
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        if($session_data['roleid'] == 14){
            $_header["support"] = array("uniform","slick");
            $_header["page_js"] = "dashboard";

            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar');
            $this->load->view('core/projects/overview');
            $this->load->view('core/fragments/footer');
        }else if($session_data['roleid'] == 15){
            $_header["support"] = array("uniform","slick","orgchart","pikadate","repeater","multiselect");
            $_header["page_js"] = "dashboard";
            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar');
            $this->load->view('core/projects/overview_pprisa');
            $this->load->view('core/fragments/footer');
        }
    }

    public function create(){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        
        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/create');
        $this->load->view('core/fragments/footer');
    }

    public function stakeholder_analysis($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("footable");
        $_header["page_js"] = "stakeholder_analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/stakeholder_analysis');
        $this->load->view('core/fragments/footer');
    }

    public function prob_analysis($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }

        $_header["support"] = array("diagram");
        $_header["pid"] = "02849";
        $_header["page"] = "prob-analysis";
        $_header["page_js"] = "prob_analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/prob_analysis');
        $this->load->view('core/fragments/footer');
    }

    public function prob_analysis_open($pid=null){
        header("Content-type: text/xml");
        $file_location = APPPATH . "views";
        $xml_file = file_get_contents($file_location."/resources/_pj/02849/prob_a/001.xml");
        echo $xml_file;
    }

    public function prob_analysis_save($pid=null){
        $xml_file = file_get_contents('php://input');
        if(strlen($xml_file) > 0){
            $file_location = APPPATH . "views";
            $file_path = $file_location."/resources/_pj/02849/prob_a/001.xml";
            $file_instance = fopen($file_path, 'w');
            fwrite($file_instance, $xml_file);
            fclose($file_instance);
        }
        echo $this->arrayToXml(array('status'=>1, 'msg'=>"Problem Tree saved successfully"));
    }

    /**
     * @param array $array the array to be converted
     * @param string? $rootElement if specified will be taken as root element, otherwise defaults to 
     *                <root>
     * @param SimpleXMLElement? if specified content will be appended, used for recursion
     * @return string XML version of $array
     */
    function arrayToXml($array, $rootElement = null, $xml = null) {
        $_xml = $xml;
    
        if ($_xml === null) {
            $_xml = new SimpleXMLElement($rootElement !== null ? $rootElement : '<root/>');
        }
    
        foreach ($array as $k => $v) {
            if (is_array($v)) { //nested array
                arrayToXml($v, $k, $_xml->addChild($k));
            } else {
                $_xml->addChild($k, $v);
            }
        }
    
        return $_xml->asXML();
    }

    public function prob_analysis_export($pid=null){
        $this->load->library('mxdiagram');
        $format = $this->input->post('format');
        $xml = urldecode($this->input->post("xml"));
        if (isset($xml))
        {
            if (isset($format))
	        {
                $mxd= new MxDiagram($xml,$format);
                $file_location = APPPATH . "views";
                $file_path = $file_location."/resources/_pj/02849/prob_a/001.xml";
                $mxd->exportToImage($xml);
            }
        }
    }

    public function obj_analysis($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $file_location = APPPATH . "views";
        $xml = file_get_contents($file_location."/resources/_pj/02849/prob_a/001.xml");
        $data['p_a_xml'] = htmlspecialchars($xml);
        $_header["support"] = array("diagram");
        $_header["pid"] = "02849";
        $_header["page"] = "obj-analysis";
        $_header["page_js"] = "obj_analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/obj_analysis',$data);
        $this->load->view('core/fragments/footer');
    }

    public function obj_analysis_open($pid=null){
        header("Content-type: text/xml");
        $file_location = APPPATH . "views";
        $file_path = $file_location .'/resources/_pj/'. $pid . '/obj_a/002.xml';
        if(file_exists($file_path)){
            $xml_file = file_get_contents($file_path);
            echo $xml_file;
        }else{
            echo "";
        }
    }

    public function stat_analysis($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("steps","uniform","jqueryUi","slick");
        $_header["page_js"] = "stat_analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/strategic_analysis',$data);
        $this->load->view('core/fragments/footer');
    }

    public function obj_analysis_save($pid = null){
        $xml_file = file_get_contents('php://input');
        if(strlen($xml_file) > 0){
            $file_location = APPPATH . "views";
            if(!is_dir($file_location .'/resources')) {
                mkdir($file_location .'/resources', 0777, true);
            }
            if(!is_dir($file_location .'/resources/_pj')) {
                mkdir($file_location .'/resources/_pj', 0777, true);
            }
            if(!is_dir($file_location .'/resources/_pj/'. $pid)) {
                mkdir($file_location .'/resources/_pj/'. $pid, 0777, true);
            }
            if(!is_dir($file_location .'/resources/_pj/'. $pid . '/obj_a')) {
                mkdir($file_location .'/resources/_pj/'. $pid . '/obj_a', 0777, true);
            }
            $file_path = $file_location .'/resources/_pj/'. $pid . '/obj_a/002.xml';
            $file_instance;
            if(!file_exists($file_path)){
                $file_instance = fopen($file_path, 'w');
                fwrite($file_instance, $xml_file);
                fclose($file_instance);
            }else{
                $file_instance = fopen($file_path, 'w');
                fwrite($file_instance, $xml_file);
                fclose($file_instance);
            }
        }
        echo $this->arrayToXml(array('status'=>1, 'msg'=>"Objective Tree saved successfully"));
    }

    public function logframe($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("steps","uniform","jqueryUi","slick");
        $_header["page_js"] = "logframe";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/logframe',$data);
        $this->load->view('core/fragments/footer');
    }

    public function resources($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message = $messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("steps","uniform","diagram");
        $_header["page_js"] = "resources";
        $_header["pid"] = "02849";
        $_header["page"] = "prob-analysis";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/resources');
        $this->load->view('core/fragments/footer');
    }

    public function maintenance($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message = $messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array();
        $_header["page_js"] = "maintenance";
        $_header["pid"] = "02849";
        $_header["page"] = "maintenance";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/maintenance');
        $this->load->view('core/fragments/footer');
    }

    public function approval($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message = $messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform");
        $_header["page_js"] = "approval";
        $_header["pid"] = "02849";
        $_header["page"] = "approval";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/approval');
        $this->load->view('core/fragments/footer');
    }

    public function risk($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform");
        $_header["page_js"] = "risk";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/risk');
        $this->load->view('core/fragments/footer');
    }

    public function download($pid= null){
        $this->load->helper('download');
        $data = file_get_contents(APPPATH . "views/resources/download/business_case.pdf");
        force_download('business_case.pdf', $data);
    }

    public function business($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/business_options');
        $this->load->view('core/fragments/footer');
    }

    public function benefits($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/expected_benefits');
        $this->load->view('core/fragments/footer');
    }

    public function approach($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/approach');
        $this->load->view('core/fragments/footer');
    }

    public function architecture($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/architecture');
        $this->load->view('core/fragments/footer');
    }

    public function milestones($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }

        if($session_data['roleid'] == 33){
            $_header["support"] = array("gantt","chosen","multiselect","pikadate");
            $_header["page_js"] = "milestones_vendor";

            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar');
            $this->load->view('core/projects/milestones_vendor');
            $this->load->view('core/fragments/footer');
        }else{
            $_header["support"] = array("gantt","chosen","multiselect","pikadate");
            $_header["page_js"] = "milestones";

            $this->load->view('core/fragments/header',$_header);
            $this->load->view('core/projects/fragments/main_navbar',$data1);
            $this->load->view('core/projects/fragments/secondary_navbar');
            $this->load->view('core/projects/milestones');
            $this->load->view('core/fragments/footer');
        }
    }

    public function deliverables($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform","slick");
        $_header["page_js"] = "dashboard";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/deliverables');
        $this->load->view('core/fragments/footer');
    }

    public function org($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("orgchart");
        $_header["page_js"] = "org";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/org');
        $this->load->view('core/fragments/footer');
    }

    public function reporting_structure($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array();
        $_header["page_js"] = "reporting_structure";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/reporting_structure');
        $this->load->view('core/fragments/footer');
    }

    public function info_vendor($pid=null){
        $session_data = $this->session->userdata('logged_in');
        $data['username'] =$data1['username'] = $session_data['username'];

        if($this->session->userdata('message'))
        {
            $messagehrecord=$this->session->userdata('message');
            $message=$messagehrecord['message'];
            $this->session->unset_userdata('message');
        }
        else
        {
            $message='';
        }
        $_header["support"] = array("uniform");
        $_header["pid"] = "02849";
        $_header["page"] = "info_vendor";
        $_header["page_js"] = "info_vendor";

        $this->load->view('core/fragments/header',$_header);
        $this->load->view('core/projects/fragments/main_navbar',$data1);
        $this->load->view('core/projects/fragments/secondary_navbar');
        $this->load->view('core/projects/info_vendor');
        $this->load->view('core/fragments/footer');
    }
}