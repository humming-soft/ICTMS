	<div class="page-header page-header-light">
		<div class="page-header-content p-2">
			<div class="page-title text-center">
				<h5 class="text-uppercase">Transport Information Data Exchange (TIDE) </h5>
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
					<a href="<?=site_url('dashboard')?>" class="navbar-nav-link">
						<i class="icon-home4 text-success"></i>
					</a>
				</li>
				<li class="nav-item">
					<a href="<?=site_url('dashboard')?>" class="navbar-nav-link active">
						<i class="icon-stack2 mr-2"></i> Project Overview
					</a>
				</li>
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
					<i class="icon-stack-text mr-2"></i> Planning
					</a>

					<div class="dropdown-menu">
						<a href="<?=site_url('projects/02849/org')?>" class="dropdown-item"><i class="icon-users"></i> Manage Project Team</a>
						<a href="<?=site_url('projects/02849/reporting-structure')?>" class="dropdown-item"><i class="icon-tree7"></i> Reporting Structure</a>
						<a href="<?=site_url('projects/02849/info-vendor')?>" class="dropdown-item"><i class="icon-profile"></i> Vendor Information</a>
						<a href="<?=site_url('projects/02849/gantt')?>" class="dropdown-item"><i class="icon-paragraph-right3"></i> Activities & Deliverables Approval</a>
						<a href="<?=site_url('projects/02849/lad')?>" class="dropdown-item"><i class="icon-equalizer"></i> Liquidated & Ascertained Damages(LAD) Mapping</a>
					</div>
				</li> 
				<li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
					<i class="icon-clipboard2 mr-2"></i> Monitor & Control
					</a>

					<div class="dropdown-menu">
						<a href="http://localhost/ictms-dashboard/projects/2019/1002" target="_blank" class="dropdown-item no-loader"><i class="icon-screen3"></i> Dashboard</a>
						<a href="<?=site_url('projects/02849/org')?>" class="dropdown-item"><i class="icon-statistics"></i> Progress Diary Approval</a>
						<a href="<?=site_url('projects/02849/reporting-structure')?>" class="dropdown-item"><i class="icon-bubbles6"></i> Collaboration</a>
						
					</div>
				</li> 
			</ul>

			<ul class="navbar-nav ml-md-auto">

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