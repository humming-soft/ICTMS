
<!-- Main navbar -->
<div class="section gradient-1">
    <div class="navbar navbar-expand-md navbar-dark nav-hmwks">
        <div class="navbar-brand">
            <a href="<?php echo site_url(); ?>" class="d-inline-block">
                <img src="<?php echo site_url('assets/img/logo/logo.png'); ?>" alt="">
            </a>
        </div>
        
        <div class="d-md-none">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                <i class="icon-grid4"></i>
            </button>
        </div>
        <?php 
        $lang = $this->input->cookie('user_lang',TRUE);
        if(!isset($lang)){
            $lang = 'en';
        }
        ?>
        <div class="collapse navbar-collapse" id="navbar-mobile">
        <span class="navbar-text ml-md-3 mr-md-auto"></span>
        <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="<?php echo site_url('assets/img/lang/'.$lang.'.png'); ?>" class="img-flag mr-2" alt="">
                        <span class="text-uppercase"><?php echo $lang; ?></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <?php foreach($this->config->item('avail_languages') as $code => $name){ ?>
                        <a href="<?php echo site_url($code.uri_string());?>" class="dropdown-item <?=$name?> <?php echo $lang == $code ? 'active' : '' ?>"><img src="<?=site_url('assets/img/lang/'.$code.'.png') ?>" class="img-flag" alt=""> <?=$name?></a>
                        <?php } ?>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- /main navbar -->


<!-- Page content -->
<div class="page-content">

    <!-- Main content -->
    <div class="content-wrapper">