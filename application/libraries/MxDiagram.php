<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__) . '/mxgraph/mxServer.php';

class MxDiagram extends mxServer
{
    function __construct()
    {
        parent::__construct();
    }
}