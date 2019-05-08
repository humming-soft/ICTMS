<div class="section gradient-1">
    <div class="navbar navbar-expand-md navbar-dark nav-hmwks">
        <div class="navbar-brand wmin-0 mr-5">
            <a href="<?=site_url('dashboard');?>" class="d-inline-block">
                <img src="<?=site_url('assets/img/logo/logo.png');?>" alt="">
            </a>
        </div>

        <div class="d-md-none">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                <i class="icon-tree5"></i>
            </button>
        </div>

        <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
					<a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
						<i class="icon-bubbles4"></i>
						<span class="d-md-none ml-2">Messages</span>
						<span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
					</a>
					
                    <div class="dropdown-menu dropdown-content wmin-md-400">
						<div class="dropdown-content-header">
							<span class="font-weight-semibold">Messages</span>
							<a href="#" class="text-default"><i class="icon-compose"></i></a>
						</div>

						<div class="dropdown-content-body dropdown-scrollable">
							<ul class="media-list">
								<li class="media">
									<div class="mr-3 position-relative">
										<img src="" width="36" height="36" class="rounded-circle" alt="">
									</div>

									<div class="media-body">
										<div class="media-title">
											<a href="#">
												<span class="font-weight-semibold">James Alexander</span>
												<span class="text-muted float-right font-size-sm">04:58</span>
											</a>
										</div>

										<span class="text-muted">who knows, maybe that would be the best thing for me...</span>
									</div>
								</li>

								<li class="media">
									<div class="mr-3 position-relative">
										<img src="" width="36" height="36" class="rounded-circle" alt="">
									</div>

									<div class="media-body">
										<div class="media-title">
											<a href="#">
												<span class="font-weight-semibold">Margo Baker</span>
												<span class="text-muted float-right font-size-sm">12:16</span>
											</a>
										</div>

										<span class="text-muted">That was something he was unable to do because...</span>
									</div>
								</li>

								<li class="media">
									<div class="mr-3">
										<img src="" width="36" height="36" class="rounded-circle" alt="">
									</div>
									<div class="media-body">
										<div class="media-title">
											<a href="#">
												<span class="font-weight-semibold">Jeremy Victorino</span>
												<span class="text-muted float-right font-size-sm">22:48</span>
											</a>
										</div>

										<span class="text-muted">But that would be extremely strained and suspicious...</span>
									</div>
								</li>

								<li class="media">
									<div class="mr-3">
										<img src="" width="36" height="36" class="rounded-circle" alt="">
									</div>
									<div class="media-body">
										<div class="media-title">
											<a href="#">
												<span class="font-weight-semibold">Beatrix Diaz</span>
												<span class="text-muted float-right font-size-sm">Tue</span>
											</a>
										</div>

										<span class="text-muted">What a strenuous career it is that I've chosen...</span>
									</div>
								</li>

								<li class="media">
									<div class="mr-3">
										<img src="" width="36" height="36" class="rounded-circle" alt="">
									</div>
									<div class="media-body">
										<div class="media-title">
											<a href="#">
												<span class="font-weight-semibold">Richard Vango</span>
												<span class="text-muted float-right font-size-sm">Mon</span>
											</a>
										</div>
										
										<span class="text-muted">Other travelling salesmen live a life of luxury...</span>
									</div>
								</li>
							</ul>
						</div>

						<div class="dropdown-content-footer justify-content-center p-0">
							<a href="#" class="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i class="icon-menu7 d-block top-0"></i></a>
						</div>
					</div>
				</li>

                <li class="nav-item dropdown">
                    <a href="#" class="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown" title="Activity">
                        <i class="icon-bell3"></i>
                        <span class="d-md-none ml-2">Activity</span>
                        <span class="badge badge-pill bg-orange ml-auto ml-md-0" id="dcs_a-c"></span>
                    </a>

                    <div class="dropdown-menu dropdown-content wmin-md-400">
                        <div class="dropdown-content-header">
                            <span class="font-weight-semibold">Latest Activity</span>
                            <a data-action="reload" data-popup="tooltip" title="Refresh List" class="text-default"></a>
                        </div>

                        <div class="dropdown-content-body alert-content-body dropdown-scrollable mCustomScrollbar" data-mcs-theme="dark-3">
                            <ul class="media-list" id="dcs_a-l">
                            </ul>
                        </div>

                        <div class="dropdown-content-footer bg-light">
                            <a href="#" class="text-grey mr-auto">All activity</a>
                            <div>
                                <a href="#" class="text-grey" data-popup="tooltip" title="Clear list"><i class="icon-checkmark3"></i></a>
                                <a href="#" class="text-grey ml-2" data-popup="tooltip" title="Settings"><i class="icon-gear"></i></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <span class="badge bg-success-400 badge-pill ml-md-3 mr-md-auto">2 Projects</span>
            <?php 
            $lang = $this->input->cookie('user_lang',TRUE);
            if(!isset($lang)){
                $lang = 'en';
            }
            ?>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a href="#" class="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="<?=site_url('assets/img/lang/'.$lang.'.png'); ?>" class="img-flag mr-2" alt="">
                        <span class="text-uppercase"><?=$lang; ?></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="<?=site_url('en'.uri_string());?>" class="dropdown-item en <?=$lang == 'en'? 'active' : '' ?>"><img src="<?=site_url('assets/img/lang/en.png') ?>" class="img-flag" alt=""> English</a>
                        <a href="<?=site_url('ms'.uri_string());?>" class="dropdown-item ms <?=$lang == 'ms'? 'active' : '' ?>"><img src="<?=site_url('assets/img/lang/ms.png') ?>" class="img-flag" alt=""> Bahasa Melayu</a>
                    </div>
                </li>

                <li class="nav-item dropdown dropdown-user">
                    <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                        <img src="<?=site_url('assets/img/avatar/av1.png');?>" class="rounded-circle mr-2" height="34" alt="">
                        <span><?=$username; ?></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
                        <a href="#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
                        <a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-blue ml-auto">58</span></a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
                        <a href="<?=site_url('logout')?>" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>