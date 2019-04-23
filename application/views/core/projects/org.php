<div class="page-content pt-0">
    <div class="content-wrapper">
    <!-- Content area -->
    <div class="content">
        <!-- Inner container -->
        <div class="d-md-flex align-items-md-start">
            <!-- Right content -->
            <div class="flex-fill overflow-auto">

                <div class="row m-0">
                    <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-stack2 mr-2"></i>ORGANIZATION STRUCTURE</h6>
                                <div class="header-elements">
                                    <div class="list-icons">                                    
                                        <a class="list-icons-item btn bg-blue btn-icon" data-action="reload"></a>
                                        <a class="list-icons-item btn bg-pink-400 btn-icon" data-action="fullscreen"></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div id="orgchart-container" style="height:516px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-plus2 mr-2"></i>ADD NEW</h6>
                            </div>
                            
                            <div class="card-body">
                                <form action="#">
									<fieldset>
										<div class="form-group">
											<label>Selected Hirachy:</label>
											<input type="text" class="form-control selected-node-group" id="selected-node"  disabled>
										</div>

										<div class="form-group" id="new-nodelist">
											<label>Employee:</label>
											<input type="text" class="form-control new-node" placeholder="Enter Emloyee Name">
										</div>

										<div class="form-group">
											<label>Position:</label>
                                            <select class=" form-control" id="position">
                                                <option>Senior Manager</option>
                                                <option>Junior Engeneer</option>
                                                <option>Accountant</option>
                                                <option>Finance Manager</option>
                                            </select>
										</div>

                                        <div class="form-group">
											<label class="d-block">Position Type:</label>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<div class="uniform-choice"><span class="checked"><input type="radio" name="node-type" id="rd-parent" class="form-input-styled" data-fouc=""></span></div>
													Parent (Root)
												</label>
											</div>

											<div class="form-check form-check-inline">
												<label class="form-check-label">
													<div class="uniform-choice"><span><input type="radio" name="node-type" id="rd-sibling" class="form-input-styled" data-fouc=""></span></div>
													Sibling
												</label>
											</div>

                                            <div class="form-check form-check-inline">
												<label class="form-check-label">
													<div class="uniform-choice"><span><input type="radio" name="node-type" id="rd-child" class="form-input-styled" checked="" data-fouc=""></span></div>
													Child
												</label>
											</div>
			                			</div>
									</fieldset>

									<div class="text-center mb-2">
										<button type="button" class="btn btn-success btn-block" id="btn-add-nodes"><i class="icon-plus2 mr-2"></i>Add</button>
                                        <button type="button" class="btn btn-danger btn-block" id="btn-delete-nodes"><i class="icon-bin mr-2"></i>Delete</button>
									</div>
                                    <hr>
									<div class="text-center">
										<button type="button" class="btn btn-light  btn-block" id="btn-reset">
                                                <i class="icon-plus2 mr-2"></i>Reset</button>
                                        <button type="button" class="btn btn-primary  btn-block"  id="btn-report-path"><i class="icon-bin mr-2"></i>Report path</button>
                                    </div>
								</form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-right">
                        <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                        <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                        <a href="<?=site_url('projects/02849/reporting-structure')?>" class="btn bg-blue gx_save no-loader">Save and Continue - Reporting Structure <i class="icon-arrow-right7 ml-1"></i></a>
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