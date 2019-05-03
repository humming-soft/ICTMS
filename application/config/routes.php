<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'login';
$route['404_override'] = 'pagenotfound';
$route['(\w{2})/(.*)'] = '$2';
$route['(\w{2})'] = $route['default_controller'];
$route['projects'] = 'projects/project/index';
$route['projects/create'] = 'projects/project/create';
$route['projects/(:num)'] = 'projects/project/index/$1';
$route['projects/(:num)/stakeholder-analysis'] = 'projects/project/stakeholder_analysis/$1';
$route['projects/(:num)/prob-analysis'] = 'projects/project/prob_analysis/$1';
$route['projects/(:num)/prob-analysis/save'] = 'projects/project/prob_analysis_save/$1';
$route['projects/(:num)/prob-analysis/open'] = 'projects/project/prob_analysis_open/$1';
$route['projects/(:num)/prob-analysis/export'] = 'projects/project/prob_analysis_export/$1';
$route['projects/(:num)/obj-analysis'] = 'projects/project/obj_analysis/$1';
$route['projects/(:num)/obj-analysis/save'] = 'projects/project/obj_analysis_save/$1';
$route['projects/(:num)/obj-analysis/open'] = 'projects/project/obj_analysis_open/$1';
$route['projects/(:num)/obj-analysis/export'] = 'projects/project/obj_analysis_export/$1';
$route['projects/(:num)/stat-analysis'] = 'projects/project/stat_analysis/$1';

$route['projects/(:num)/logframe'] = 'projects/project/logframe/$1';
$route['projects/(:num)/gantt'] = 'projects/project/milestones/$1';
$route['projects/(:num)/resources'] = 'projects/project/resources/$1';
$route['projects/(:num)/maintenance'] = 'projects/project/maintenance/$1';
$route['projects/(:num)/approval'] = 'projects/project/approval/$1';
$route['projects/(:num)/risk'] = 'projects/project/risk/$1';
$route['projects/(:num)/org'] = 'projects/project/org/$1';
$route['projects/(:num)/reporting-structure'] = 'projects/project/reporting_structure/$1';
$route['projects/(:num)/info-vendor'] = 'projects/project/info_vendor/$1';
$route['projects/(:num)/meeting'] = 'projects/project/meeting/$1';
$route['projects/(:num)/collaboration'] = 'projects/project/collaboration/$1';
$route['projects/(:num)/site-diary'] = 'projects/project/site_diary/$1';
$route['projects/(:num)/issues'] = 'projects/project/issues/$1';
$route['projects/(:num)/download'] = 'projects/project/download/$1';

$route['projects/(:num)/business'] = 'projects/project/business/$1';
$route['projects/(:num)/benefits'] = 'projects/project/benefits/$1';
$route['projects/(:num)/approach'] = 'projects/project/approach/$1';
$route['projects/(:num)/architecture'] = 'projects/project/architecture/$1';
$route['projects/(:num)/deliverables'] = 'projects/project/deliverables/$1';
$route['translate_uri_dashes'] = FALSE;
