<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Reporting Structure</span>
                    </div>
                </div>
            </div>
        </div>
    <!-- Content area -->
    <div class="content">
        <!-- Inner container -->
        <div class="d-md-flex align-items-md-start">
            <!-- Right content -->
            <div class="flex-fill overflow-auto">

                <div class="row m-0">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-stack2 mr-2"></i>REPORTING STRUCTURE</h6>
                                <div class="header-elements">
                                    <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#target_group" data-dismiss="modal"><i class="icon-plus3 mr-1"></i> Add New</a>
                                </div>
                            </div>
                            
                            <div class="card-body" style="min-height:470px">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Frequency</th>
                                            <th>Targetted Group</th>
                                            <th>Media of Communication</th>
                                            <th>Chairman</th>
                                            <th class="text-center" style="width: 20px;"><i class="icon-arrow-down12"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <a href="#" class="text-default font-weight-semibold"> <span class="badge badge-mark border-blue mr-1"></span> Project Progress Report</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="text-muted">Weekly</span></td>
                                            <td>Project Team</td>
                                            <td>Project Team Meeting</td>
                                            <td><span class="badge bg-blue">Active</span></td>
                                            <td class="text-center">
                                                <div class="list-icons">
                                                    <div class="list-icons-item dropdown">
                                                        <a href="#" class="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-menu7"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item"><i class="icon-pencil7"></i> Edit</a>
                                                            <a href="#" class="dropdown-item"><i class="icon-copy3"></i> Duplicate</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a href="#" class="dropdown-item"><i class="icon-bin"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <a href="#" class="text-default font-weight-semibold"> <span class="badge badge-mark border-blue mr-1"></span> Project Progress Report</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="text-muted">Monthly</span></td>
                                            <td>Technical Commitee Member</td>
                                            <td>Technical Commitee Member Meeting</td>
                                            <td><span class="badge bg-danger">Closed</span></td>
                                            <td class="text-center">
                                                <div class="list-icons">
                                                    <div class="list-icons-item dropdown">
                                                        <a href="#" class="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-menu7"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item"><i class="icon-pencil7"></i> Edit</a>
                                                            <a href="#" class="dropdown-item"><i class="icon-copy3"></i> Duplicate</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a href="#" class="dropdown-item"><i class="icon-bin"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <a href="#" class="text-default font-weight-semibold"> <span class="badge badge-mark border-blue mr-1"></span> Project Progress Report</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="text-muted">Quarterly</span></td>
                                            <td>Steering Committee</td>
                                            <td>Steering Committee Meeting</td>
                                            <td><span class="badge bg-grey-400">On hold</span></td>
                                            <td class="text-center">
                                                <div class="list-icons">
                                                    <div class="list-icons-item dropdown">
                                                        <a href="#" class="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i class="icon-menu7"></i></a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a href="#" class="dropdown-item"><i class="icon-pencil7"></i> Edit</a>
                                                            <a href="#" class="dropdown-item"><i class="icon-copy3"></i> Duplicate</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a href="#" class="dropdown-item"><i class="icon-bin"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>                                     
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-body text-right">
                                <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                <a href="<?=site_url('projects/02849/download')?>" class="btn bg-blue gx_save no-loader">Download - Business Case  <i class="icon-arrow-right7 ml-1"></i></a>
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
<div class="hmwks-modal modal animated" id="target_group" tabindex="-1">
    <div class="modal-dialog modal-dialog-md modal-dialog-centered">
        <div class="modal-content">
            <a href="#" class="modal-close" data-dismiss="modal" aria-label="Close"><em class="icon icon-cross2"></em></a>
            <div class="popup-body">
                <div class="hmwks-slider-w">
                    <div class="hmwks-slide">
                        <div class="hmwks-content with-gradient text-center" style="    padding-bottom: 40px;">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group text-left"><label for="">Activity (Type of Report)</label>
                                        <input type="text" class="form-control" placeholder="Enter Activity name.." id="activity_name" name="activity_name">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group text-left"><label for="">Reporting Frequency</label>
                                        <select class=" form-control m-b" id="report_freq" name="report_freq" >
                                            <option value="0">SELECT</option>
                                            <option value="1">Daily</option>
                                            <option value="2">Weekly</option>
                                            <option value="3">Biweekly</option>
                                            <option value="4">Monthly</option>
                                            <option value="5">Bimonthly</option>
                                            <option value="6">Quarterly</option>
                                            <option value="7">Yearly</option>
                                            <option value="-1">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 other_rf" style="display:none">
                                    <div class="form-group text-left"><label for="">Reporting Frequency Others (Specify)</label>
                                        <input type="text" class="form-control" placeholder="Enter Activity name.." id="activity_name" name="activity_name">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group text-left"><label for="">Targetted Group</label>
                                        <select class=" form-control m-b" id="report_freq" name="report_freq" >
                                            <option value="0">SELECT</option>
                                            <option value="1">Project Team</option>
                                            <option value="2">Technical Committe Members</option>
                                            <option value="3">Steering Committee</option>
                                            <option value="-1">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 other_rf" style="display:none">
                                    <div class="form-group text-left"><label for="">Targetted Group (Specify)</label>
                                        <input type="text" class="form-control" placeholder="Enter Activity name.." id="activity_name" name="activity_name">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group text-left"><label for="">Media of Communication</label>
                                        <select class=" form-control m-b" id="report_freq" name="report_freq" >
                                            <option value="0">SELECT</option>
                                            <option value="1">Project Team Meeting</option>
                                            <option value="2">Technical Committe Members Meeting</option>
                                            <option value="3">Steering Committee Meeting</option>
                                            <option value="-1">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 other_rf" style="display:none">
                                    <div class="form-group text-left"><label for="">Media of Communication Others (Specify)</label>
                                        <input type="text" class="form-control" placeholder="Enter Activity name.." id="activity_name" name="activity_name">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group text-left"><label for="">Chairman</label>
                                        <select class=" form-control m-b" id="report_freq" name="report_freq" >
                                            <option value="0">SELECT</option>
                                            <option value="1">Project Manager</option>
                                            <option value="2">ICT Manager</option>
                                            <option value="3">Head of Agency</option>
                                            <option value="4">Deputy Head of Agency</option>
                                            <option value="5">Project Director</option>
                                            <option value="-1">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12 other_rf" style="display:none">
                                    <div class="form-group text-left"><label for="">Chairman - Others (Specify)</label>
                                        <input type="text" class="form-control" placeholder="Enter Activity name.." id="activity_name" name="activity_name">
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel <i class="icon-cross2 ml-2"></i></button>
                                <button type="submit" class="btn btn-primary"  data-dismiss="modal" id="addNewTarget" >Add <i class="icon-paperplane ml-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </div><!-- .modal-content -->
    </div><!-- .modal-dialog -->
</div><!-- Modal End -->