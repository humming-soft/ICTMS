<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Project Team</span>
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
                    <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-users mr-2"></i>PROJECT TEAM</h6>
                                <!-- <div class="header-elements">
                                    <div class="list-icons">                                    
                                        <a class="list-icons-item btn bg-blue btn-icon" data-action="reload"></a>
                                        <a class="list-icons-item btn bg-pink-400 btn-icon" data-action="fullscreen"></a>
                                    </div>
                                </div> -->
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

                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input pos_type" value="1" name="node-type" id="pos_type_parent" checked>
                                                <label class="custom-control-label" for="pos_type_parent">Parent</label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input pos_type" value="2" name="node-type" id="pos_type_sibling">
                                                <label class="custom-control-label" for="pos_type_sibling">Sibling</label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                                <input type="radio" class="custom-control-input pos_type" value="3" name="node-type" id="pos_type_child">
                                                <label class="custom-control-label" for="pos_type_child">Child</label>
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
<script type ="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            <?php if($u == 15){ ?>
            var datascource =  {
                'name': 'Mr. Idrul Fairuz Ali', 
                'title': 'Project Manager',
                'children': [
                    {
                        'name': 'Mohd Nizam bin Morad', 'title': 'Department manager',
                        'children': [
                            {'name': 'Mazmi bin Mohamad', 'title': 'Senior engineer'},
                            {
                                'name': 'Roslan bin Ramli', 'title': 'Senior engineer',
                                'children': [
                                    {'name': 'Syafiqa binti Talib', 'title': 'Engineer'},
                                    {'name': 'Faizal bin Osman', 'title': 'Engineer'},
                                    {'name': 'Zulhaimi bin Mat Hussin', 'title': 'Engineer'}
                                ]
                            }
                        ]
                    },
                    {
                        'name': 'Marni binti Hasmar', 'title': 'Department manager',
                        'children': [
                            {'name': 'Mat Hussin', 'title': 'Senior engineer'},
                            {
                                'name': 'Roslan bin Ramli', 'title': 'Senior engineer',
                                'children': [
                                    {'name': 'Xiang Xiang', 'title': 'UE engineer'},
                                    {'name': 'Maszlee bin Malik', 'title': 'Engineer'},
                                    {'name': 'Rohani binti Karim', 'title': 'Engineer'}
                                ]
                            }
                        ]
                    }
                ]
            };
            <?php }else{ ?>
                var datascource =  {
                'name': 'Mr. Muhammed Faizal Bin Ahamed', 
                'title': 'Project Manager'};
            <?php }?>
            Org.init(datascource);
        });
</script>