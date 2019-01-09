<div class="page-header page-header-light">
    <div class="page-header-content header-elements-md-inline p-2">
        <div class="page-title d-flex">
        <h4><i class="icon icon-package mr-1"></i> Create New Project</h4>
            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>
    </div>

    <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
        <div class="d-flex">
            <div class="breadcrumb">
                <a href="<?=site_url('dashboard')?>" class="breadcrumb-item"><i class="icon-home2"></i></a>
                <span class="breadcrumb-item active">Create New Project</span>
            </div>

            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>

        <div class="header-elements d-none">
            <div class="breadcrumb justify-content-center">
                <a href="#" class="breadcrumb-elements-item">
                    <i class="icon-pulse2 mr-1"></i>
                    Activities
                </a>
                <div class="breadcrumb-elements-item dropdown p-0">
                    <a href="#" class="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
                        <i class="icon-gear mr-1"></i>
                        Manage
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
                    <!-- <div class="dropdown-menu dropdown-menu-right">
                        <a href="#" class="dropdown-item"><i class="icon-user-lock"></i> Account security</a>
                        <a href="#" class="dropdown-item"><i class="icon-statistics"></i> Analytics</a>
                        <a href="#" class="dropdown-item"><i class="icon-accessibility"></i> Accessibility</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="icon-gear"></i> All settings</a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
<div class="page-content pt-0">
    <div class="content-wrapper">
    <!-- Content area -->
    <div class="content">
        <!-- Inner container -->
        <div class="d-md-flex align-items-md-start">
            <!-- Right content -->
            <div class="flex-fill overflow-auto">

                <div class="row m-0">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-menu7 mr-2"></i>Project Startup Document</h6>
                                <div class="header-elements">
                                    <div class="list-icons">                                    
                                        <a class="list-icons-item btn bg-blue btn-icon" data-action="reload"></a>
                                        <a class="list-icons-item btn bg-pink-400 btn-icon" data-action="fullscreen"></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div class="row text-left">
                                    <div class="col-sm-6">
                                        <div class="form-group"><label for="">Project Sponsor</label>
                                            <input type="text" class="form-control" disabled value="Ministry Of Finance">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group"><label for="">Project Owner's Agency Name</label>
                                            <input type="text" class="form-control" disabled value="Ministry Of Transport">
                                        </div>
                                    </div>
                                </div>
                                <div class="row text-left">
                                    <div class="col-sm-6">
                                        <div class="form-group"><label for="">Executive In Charge</label>
                                            <input type="text" class="form-control" disabled value="Mr. Idrul Fairuz Ali Khan">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group"><label for="">Date Prepared</label>
                                            <input type="text" class="form-control" disabled value="<?=strtoupper(date('d-M-Y'))?>">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group mb-4 mb-md-4 text-left">
                                            <label class="d-block">Is that problem that is required to be resolved?</label>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input" name="rd_resolvable" id="rd_resolvable_yes">
                                                <label class="custom-control-label" for="rd_resolvable_yes">YES</label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input" name="rd_resolvable" id="rd_resolvable_no" checked>
                                                <label class="custom-control-label" for="rd_resolvable_no">NO</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group mb-3 mb-md-4 text-left">
                                            <label class="d-block text-left">Is it an opportunity that is required to be created that will enhance or bring benefit to the organization?</label>
                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input" name="rd_benefit_org" id="rd_benefit_org_yes">
                                                <label class="custom-control-label" for="rd_benefit_org_yes">YES</label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input" name="rd_benefit_org" id="rd_benefit_org_no" checked>
                                                <label class="custom-control-label" for="rd_benefit_org_no">NO</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group text-left"><label for="">Project Name</label>
                                            <input type="text" class="form-control" placeholder="Enter Project Name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group text-left"><label for="">File Reference No.</label>
                                            <input type="text" class="form-control" disabled value="RF000045">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group text-left"><label for="">Senior Officer In Charge</label>
                                            <select class=" form-control m-b">
                                                <option>SELECT</option>
                                                <option>Dato’ Zailani Safari</option>
                                                <option>Mazmi bin Mohamad</option>
                                                <option>Zulhaimi bin Mat Hussin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group text-left"><label for="">Remarks</label>
                                            <textarea rows="3" cols="3" class="form-control" placeholder="Enter Remarks"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-light">Cancel <i class="icon-cross2 ml-2"></i></button>
                                    <button type="submit" class="btn btn-primary">Save <i class="icon-paperplane ml-2"></i></button>
							    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /right content -->
        </div>
        <!-- /inner container -->
    </div>
    <!-- /content area -->
    </div>
</div>