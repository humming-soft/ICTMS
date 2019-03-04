<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta id="csrf_token" name="<?=$this->security->get_csrf_token_name()?>" content="<?=$this->security->get_csrf_hash()?>">
    <title>Dashboard - Humworks Data Capture System (DCS)</title>
    <link rel="shortcut icon" href="<?=site_url('assets/img/fav/favicon.png')?>">

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/icons/icomoon/styles.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/bootstrap.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/humworks.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/layout/default.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/core.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/css/colors.min.css')?>" rel="stylesheet" type="text/css">
    <link href="<?=site_url('assets/js/plugins/scroll/jquery.mCustomScrollbar.css')?>" rel="stylesheet" type="text/css">

    <script src="<?=site_url('assets/js/main/jquery.min.js')?>"></script>
    <script src="<?=site_url('assets/js/main/bootstrap.bundle.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/loaders/blockui.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/scroll/jquery.mCustomScrollbar.concat.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/ui/fab.min.js')?>"></script>

    <?php if(isset($support)){ ?>
    <?php if(in_array("dataTable",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/tables/datatables/datatables.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/tables/datatables/dataTables.bootstrap4.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/tables/datatables/extensions/buttons.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/tables/datatables/extensions/responsive.min.js')?>"></script>
    <script src="<?=site_url('assets/js/initlib/datatable.js')?>"></script>
    <?php } ?>
    <?php if(in_array("bootBox",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/notifications/bootbox.min.js')?>"></script>
    <?php } ?>
    <?php if(in_array("uniform",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/forms/styling/uniform.min.js')?>"></script>
    <?php } ?>
    <?php if(in_array("repeater",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/forms/repeater/jquery.repeater.min.js')?>"></script>
    <?php } ?>
    <?php if(in_array("pikadate",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/pickers/pikaday/moment.min.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/pickers/pikaday/pikaday.min.js')?>"></script>
    <?php } ?>
    <?php if(in_array("footable",$support)){ ?>
    <script src="<?=site_url('assets/js/plugins/tables/footable/footable.min.js')?>"></script>
    <?php } ?>
    <?php if(in_array("gantt",$support)){ ?>
    <link href="<?=site_url('assets/js/plugins/gantt/dhtmlxgantt.css')?>" rel="stylesheet" type="text/css">
    <script src="<?=site_url('assets/js/plugins/gantt/dhtmlxgantt.js')?>"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_smart_rendering.js')?>" type="text/javascript" charset="utf-8"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_marker.js')?>" type="text/javascript" charset="utf-8"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_fullscreen.js')?>" type="text/javascript" charset="utf-8"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_critical_path.js')?>" type="text/javascript" charset="utf-8"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_auto_scheduling.js')?>" type="text/javascript" charset="utf-8"></script>
    <script src="<?=site_url('assets/js/plugins/gantt/ext/dhtmlxgantt_undo.js')?>" type="text/javascript" charset="utf-8"></script>

    <?php } ?>
    <?php if(in_array("orgchart",$support)){ ?>
    <link href="<?=site_url('assets/js/plugins/visualization/orgchart/jquery.orgchart.css')?>" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="<?=site_url('assets/js/plugins/visualization/orgchart/jquery.orgchart.js')?>"></script>
    <?php } ?>
    <?php if(in_array("multiselect",$support)){ ?>
        <script src="<?=site_url('assets/js/plugins/forms/selects/bootstrap_multiselect.js')?>"></script>
    <?php } ?>
    <?php if(in_array("slick",$support)){ ?>
    <link href="<?=site_url('assets/js/plugins/ui/slick/slick.css')?>" rel="stylesheet" type="text/css">
    <script src="<?=site_url('assets/js/plugins/ui/slick/slick.min.js')?>"></script>
    <?php }} ?>

    <script src="<?=site_url('assets/js/app.js')?>"></script>

    <?php if(isset($page_js)){ ?>
    <script src="<?=site_url('assets/js/pages/').$page_js.'.js'?>"></script>
    <?php } ?>

    <script type="text/javascript">var base_url="<?=site_url()?>"; <?php if(isset($base_url)){ ?> var c_url="<?=$base_url?>"; <?php } ?></script>

</head>

<body>
<div class="splash">
    <div class="splash-title">
        <div class="dcs_s_ir">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <h4>Loading..</h4>
    </div>
</div>