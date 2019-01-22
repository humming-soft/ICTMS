<!-- Bottom right menu -->
<ul class="fab-menu fab-menu-fixed fab-menu-bottom-right" data-fab-toggle="click">
    <li>
        <a class="fab-menu-btn btn bg-pink-300 btn-float rounded-round btn-icon">
            <i class="fab-icon-open icon-grid3"></i>
            <i class="fab-icon-close icon-cross2"></i>
        </a>

        <ul class="fab-menu-inner">
            <li>
                <div data-fab-label="Create Project">
                    <a href="#" class="btn btn-light rounded-round btn-icon btn-float">
                        <i class="icon-pencil"></i>
                    </a>
                </div>
            </li>
            <li>
                <div data-fab-label="Conversations">
                    <a href="#" class="btn btn-light rounded-round btn-icon btn-float">
                        <i class="icon-bubbles3"></i>
                    </a>
                    <span class="badge bg-primary-400">5</span>
                </div>
            </li>
        </ul>
    </li>
</ul>
<!-- /bottom right menu -->

<div class="navbar navbar-expand-lg navbar-light">
    <div class="text-center d-lg-none w-100">
        <button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
            <i class="icon-unfold mr-2"></i>
            Footer
        </button>
    </div>

    <div class="navbar-collapse collapse" id="navbar-footer">
        <span class="navbar-text">
            &copy; 2018 - 2019. <a href="#">Humworks</a> by <a href="https://www.hummingsoft.com.my" class="no-loader" target="_blank">Hummingsoft Sdn. Bhd.</a>
        </span>

        <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item"><a data-popup="tooltip" title="Current Version" class="navbar-nav-link font-weight-semibold"><span class="text-pink-400"><i class="icon-versions mr-2"></i> Version <?= $this->config->item('version')?></span></a></li>
            <li class="nav-item"><a data-popup="tooltip" title="Page Rendered" class="navbar-nav-link font-weight-semibold"><i class="icon-spinner mr-2"></i><?php echo  (ENVIRONMENT === 'development') ? '{elapsed_time}' : '' ?></a></li>
        </ul>
    </div>
</div>
</body>
</html>