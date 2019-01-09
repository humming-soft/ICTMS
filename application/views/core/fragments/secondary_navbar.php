    <!-- Secondary navbar -->
	<div class="navbar navbar-expand-md navbar-light">
		<div class="text-center d-md-none w-100">
			<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-navigation">
				<i class="icon-unfold mr-2"></i>
				Navigation
			</button>
		</div>

		<div class="navbar-collapse collapse" id="navbar-navigation">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a href="<?=site_url('dashboard')?>" class="navbar-nav-link active">
						<i class="icon-home4 mr-2"></i>
						Dashboard
					</a>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
						<i class="icon-strategy mr-2"></i>
						Manage
					</a>

					<div class="dropdown-menu">
						<div class="dropdown-header">Basic layouts</div>
						<a href="#" class="dropdown-item"><i class="icon-grid2"></i> Projects</a>
						<div class="dropdown-submenu">
							<a href="#" class="dropdown-item dropdown-toggle"><i class="icon-paragraph-justify3"></i> Navbars</a>
							<div class="dropdown-menu">
								<a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_4/LTR/default/seed/navbar_main_fixed.html" class="dropdown-item">Main navbar fixed</a>
								<a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_4/LTR/default/seed/navbar_main_hideable.html" class="dropdown-item">Main navbar hideable</a>
								<a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_4/LTR/default/seed/navbar_secondary_sticky.html" class="dropdown-item">Secondary navbar sticky</a>
								<a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_4/LTR/default/seed/navbar_both_fixed.html" class="dropdown-item">Both navbars fixed</a>
							</div>
						</div>
						<div class="dropdown-header">Optional layouts</div>
						<a href="http://demo.interface.club/limitless/demo/bs4/Template/layout_4/LTR/default/seed/layout_boxed.html" class="dropdown-item"><i class="icon-align-center-horizontal"></i> Boxed layout</a>
					</div>
				</li>
			</ul>

			<ul class="navbar-nav ml-md-auto">
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
						<i class="icon-make-group mr-2"></i>
						Connect
					</a>

					<div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
						<div class="dropdown-content-body p-2">
							<div class="row no-gutters">
								<div class="col-12 col-sm-4">
									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-portfolio icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">Roles</div>
									</a>

									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-bin text-blue-400 icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">Trash</div>
									</a>
								</div>
								
								<div class="col-12 col-sm-4">
									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-people text-pink-400 icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">People</div>
									</a>

									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-statistics text-success-400 icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">Status</div>
									</a>
								</div>

								<div class="col-12 col-sm-4">
									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-make-group text-info-400 icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">Groups</div>
									</a>

									<a href="#" class="d-block text-default text-center ripple-dark rounded p-3">
										<i class="icon-cogs text-danger icon-2x"></i>
										<div class="font-size-sm font-weight-semibold text-uppercase mt-2">Preferences</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</li>

				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
						<i class="icon-cog3"></i>
						<span class="d-md-none ml-2">Settings</span>
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="#" class="dropdown-item"><i class="icon-user-lock"></i> Account security</a>
						<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Analytics</a>
						<a href="#" class="dropdown-item"><i class="icon-accessibility"></i> Accessibility</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item"><i class="icon-gear"></i> All settings</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
    <!-- /secondary navbar -->