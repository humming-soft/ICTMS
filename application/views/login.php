<!-- Content area -->
<div class="content d-flex justify-content-center align-items-center">
<!-- <span class="back-text d-none d-md-block">HUM</span> -->
    <?=form_open('login/verify_login', array('id'=>'hm_l_f','class'=>'login-form')) ?>
        <div class="card mb-0 card-login">
            <div class="card-body">
                <div class="text-center mb-3">
                    <div class="thumb rounded-round pb-3 pt-0">
                        <img src="<?php echo site_url('assets/img/logo/logo_dk.png'); ?>" alt="Humworks">
                    </div>
                    <h5 class="mb-0"><?php echo $this->lang->line('log_header'); ?></h5>
                    <div class="form-group text-center text-muted content-divider">
                        <span class="px-2"><?php echo $this->lang->line('log_sub_header'); ?></span>
                    </div>
                </div>

                <div class="form-group form-group-feedback form-group-feedback-left">
                    <!--<label class="text-danger"><span id="errormsg"></span><?php /*echo form_error('email'); */?></label>-->
                    <input type="text" name="email" id="email" class="form-control" <!--value="--><?php /*echo $emails; */?>" placeholder="<?php echo $this->lang->line('log_username'); ?>" autofocus>
                    <div class="form-control-feedback">
                        <i class="icon-user text-success"></i>
                    </div>
                </div>

                <div class="form-group form-group-feedback form-group-feedback-left">
                   <!-- <label class="text-danger"><?php /*echo form_error('keypass'); */?></label>-->
                    <input type="password" name="keypass" id="keypass" class="form-control" placeholder="<?php echo $this->lang->line('log_password'); ?>" required>
                    <div class="form-control-feedback">
                        <i class="icon-lock2 text-primary"></i>
                    </div>
                </div>

                <div class="form-group">
                    <button id="hw_s_b" type="submit" class="btn btn-primary btn-block"><?php echo $this->lang->line('log_btn_signin'); ?><i class="icon-circle-right2 ml-2"></i></button>
                </div>


                <div class="form-group d-flex align-items-center">
                    <div class="form-check mb-0">
                        <label class="form-check-label">
                            <input type="checkbox" name="hw_r_m" class="f_i_s" checked data-fouc>
                            <?php echo $this->lang->line('log_remeber'); ?>
                        </label>
                    </div>

                    <a href="<?php echo site_url('recover_password'); ?>" class="ml-auto"><?php echo $this->lang->line('log_forgot_pass'); ?></a>
                </div>

                <div class="form-group text-center text-muted content-divider">
                    <span class="px-2"><?php echo $this->lang->line('log_disclaimer'); ?></span>
                </div>

                <span class="form-text text-center text-muted"><?php echo $this->lang->line('log_disclaimer_desc'); ?></span>
            </div>
        </div>
    <?php echo form_close();?>
    <!-- /login form -->
    <!-- <span class="back-text d-none d-md-block">RKS</span> -->
</div>
<!-- /content area -->