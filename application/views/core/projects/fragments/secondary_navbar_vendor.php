	<div class="page-header page-header-light">
		<div class="page-header-content p-2">
			<div class="page-title text-center">
				<h5 class="text-uppercase">Transport Information Data Exchange (TIDE)</h5>
			</div>
		</div>
	</div>	
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
						<i class="icon-briefcase mr-2"></i> Project Overview
					</a>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						<i class="icon-box-add mr-2"></i>
						Implementation
					</a>

					<div class="dropdown-menu">
						<div class="dropdown-header">PROJECT IMPLEMENTATION</div>
						<a href="<?=site_url('projects/02849/resources')?>" class="dropdown-item"><i class="icon-users"></i>Manage Resources</a>
						<a href="<?=site_url('projects/02849/gantt')?>" class="dropdown-item"><i class="icon-paragraph-right3"></i>Activities & Deliverables</a>
						<a href="<?=site_url('projects/02849/risk')?>" class="dropdown-item"><i class="icon-shield2"></i>Risk Register</a>
						<a href="<?=site_url('projects/02849/issues')?>" class="dropdown-item"><i class="icon-shield-notice"></i>Manage Issues</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						<i class="icon-clipboard3 mr-2"></i>
						Reporting
					</a>

					<div class="dropdown-menu">
						<div class="dropdown-header">PROJECT REPORTING</div>
						<a href="<?=site_url('projects/02849/site-diary')?>" class="dropdown-item"><i class="icon-book"></i>Project Diary (Daily Report)</a>
						<a href="<?=site_url('projects/02849/meeting')?>" class="dropdown-item"><i class="icon-calendar"></i>Progress Meetings</a>
						<a href="<?=site_url('projects/02849/collaboration')?>" class="dropdown-item"><i class="icon-bubbles6"></i>Collaboration</a>
					</div>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('projects/02849/closure')?>" class="navbar-nav-link">
						<i class="icon-enter6 mr-2"></i>
						Closure
					</a>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle"  data-toggle="dropdown" aria-expanded="false">
						<i class="icon-hammer-wrench mr-2"></i>
						Maintenance
					</a>

					<div class="dropdown-menu">
						<div class="dropdown-header">PROJECT MAINTENANCE</div>
						<a href="<?=site_url('projects/02849/m/gantt')?>" class="dropdown-item"><i class="icon-paragraph-right3"></i>Activities</a>
						<a href="<?=site_url('projects/02849/m/meeting')?>" class="dropdown-item"><i class="icon-calendar"></i>Progress Meetings</a>
						<a href="<?=site_url('projects/02849/m/collaboration')?>" class="dropdown-item"><i class="icon-bubbles6"></i>Collaboration</a>
						<a href="<?=site_url('projects/02849/m/issues')?>" class="dropdown-item"><i class="icon-bug2"></i>Manage Issues (Bugs)</a>
					</div>
				</li>
				<!-- <li class="nav-item">
					<a href="<?=site_url('projects/02849/business')?>" class="navbar-nav-link">
						<i class="icon-split mr-2"></i> Business Options
					</a>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('projects/02849/benefits')?>" class="navbar-nav-link">
						<i class="icon-stars mr-2"></i> Expected Benefits
					</a>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('projects/02849/approach')?>" class="navbar-nav-link">
						<i class="icon-enter3 mr-2"></i> Approach
					</a>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('projects/02849/architecture')?>" class="navbar-nav-link">
						<i class="icon-design mr-2"></i> Architecture
					</a>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('projects/02849/milestones')?>" class="navbar-nav-link">
						<i class="icon-task mr-2"></i> Milestones
					</a>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
						<i class="icon-menu"></i>
						<span class="d-md-none ml-2">More</span>
					</a>

					<div class="dropdown-menu">
						<a href="<?=site_url('projects/02849/deliverables')?>" class="dropdown-item"><i class="icon-inbox"></i> Deliverables</a>
						<a href="<?=site_url('projects/02849/resources')?>" class="dropdown-item"><i class="icon-man-woman"></i> Resources</a>
						<a href="<?=site_url('projects/02849/cost')?>" class="dropdown-item"><i class="icon-cash4"></i> Cost</a>
						<a href="<?=site_url('projects/02849/risk')?>" class="dropdown-item"><i class="icon-menu6"></i> Risk Register</a>
						<a href="<?=site_url('projects/02849/org')?>" class="dropdown-item"><i class="icon-tree6"></i> Org. Strucure</a>
					</div>
				</li> -->
			</ul>

			<ul class="navbar-nav ml-md-auto">
			<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
						<i class="icon-cog3 mr-2"></i>Settings
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="#" class="dropdown-item"><i class="icon-user-lock"></i> Account security</a>
						<a href="#" class="dropdown-item"><i class="icon-statistics"></i> Analytics</a>
						<a href="#" class="dropdown-item"><i class="icon-accessibility"></i> Accessibility</a>
						<div class="dropdown-divider"></div>
						<a href="#" class="dropdown-item"><i class="icon-gear"></i> All settings</a>
					</div>
				</li>
				<!-- <li class="nav-item dropdown">
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
				</li> -->
			</ul>
		</div>
	</div>
    <!-- /secondary navbar -->