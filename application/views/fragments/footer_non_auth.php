<!-- Footer -->
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
<!-- /footer -->

</div>
<!-- /main content -->

</div>
<!-- Page content -->
</body>
</html>