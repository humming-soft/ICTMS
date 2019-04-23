<div class="page-content pt-0">
    <div class="content-wrapper">
    <!-- Content area -->
    <div class="content">
        <!-- Inner container -->
        <div class="d-md-flex align-items-md-start">
            <!-- Right content -->
            <div class="flex-fill overflow-auto">

                <div class="row m-0">
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title"><i class="icon-profile mr-2"></i>VENDOR INFORMATION</h6>
                                <!-- <div class="header-elements">
                                    <a class="btn btn-primary btn-sm" href="#" data-toggle="modal" data-target="#target_group" data-dismiss="modal"><i class="icon-plus3 mr-1"></i> Add New</a>
                                </div> -->
                            </div>
                            
                            <div class="card-body" style="min-height:470px">
                                <form action="#" class="ml-4">
									<fieldset>
										<legend class="font-weight-semibold text-uppercase font-size-sm">
											Company information
											<a href="#" class="float-right text-default" data-toggle="collapse" data-target="#demo1" aria-expanded="true">
												<i class="icon-circle-down2"></i>
											</a>
										</legend>

										<div class="collapse show" id="demo1" style="">
											<div class="form-group">
												<label>Company Name:</label>
												<input type="text" class="form-control" placeholder="Enter Company Name...">
											</div>

											<div class="form-group">
												<label>ROC No./SSM No.:</label>
												<input type="text" class="form-control" placeholder="Enter ROC No./SSM No...">
											</div>

											<div class="form-group">
												<label>Address Line 1:</label>
												<input type="text" class="form-control" placeholder="Enter the Address...">
                                            </div>
                                            
                                            
											<div class="form-group">
												<label>Address Line 2:</label>
												<input type="text" class="form-control" placeholder="Enter the Address...">
                                            </div>
                                            
                                            
											<div class="form-group">
												<label>Address Line 3:</label>
												<input type="text" class="form-control" placeholder="Enter the Address...">
                                            </div>
                                            
											<div class="form-group">
												<label>State:</label>
												<select class="form-control">
                                                    <option>--SELECT--</option>
                                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </optgroup>
                                                    <optgroup label="Pacific Time Zone">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="WA">Washington</option>
                                                    </optgroup>
                                                    <optgroup label="Mountain Time Zone">
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="WY">Wyoming</option>
                                                    </optgroup>
                                                    <optgroup label="Central Time Zone">
                                                        <option value="AL">Alabama</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="KY">Kentucky</option>
                                                    </optgroup>
                                                    <optgroup label="Eastern Time Zone">
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="WV">West Virginia</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <div class="form-group">
												<label>City:</label>
												<input type="text" class="form-control" placeholder="Enter the City...">
                                            </div>
                                            <div class="form-group">
												<label>Post Code:</label>
												<input type="text" class="form-control" placeholder="Enter the Post Code...">
                                            </div>
                                            <div class="form-group">
												<label>Telehpne No.:</label>
												<input type="text" class="form-control" placeholder="Enter the Telehpne No...">
                                            </div>
                                            <div class="form-group">
												<label>Company Email Address:</label>
												<input type="text" class="form-control" placeholder="Enter the Company Email Address...">
                                            </div>
										</div>
									</fieldset>

									<fieldset>
										<legend class="font-weight-semibold text-uppercase font-size-sm">
											Project Information
											<a class="float-right text-default" data-toggle="collapse" data-target="#demo2">
												<i class="icon-circle-down2"></i>
											</a>
										</legend>

										<div class="collapse show" id="demo2">
                                            <div class="form-group">
												<label>Project Cost Awarded:</label>
												<input type="text" class="form-control" placeholder="Enter Project Cost Awarded...">
											</div>
			                			</div>
                                    </fieldset>
                                    
                                    <fieldset>
										<legend class="font-weight-semibold text-uppercase font-size-sm">
											Account Information
											<a class="float-right text-default" data-toggle="collapse" data-target="#demo2">
												<i class="icon-circle-down2"></i>
											</a>
										</legend>

										<div class="collapse show" id="demo2">
                                            <div class="form-group">
												<label>Email Address (Username):</label>
												<input type="text" class="form-control" placeholder="Enter Company Email Address...">
                                            </div>
                                            
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-input-styled" checked data-fouc>
                                                    Sent Account Infomration to the Provided mail Address.
                                                </label>
                                            </div>
			                			</div>
									</fieldset>
								</form>
                                <div class="card-body text-right">
                                    <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                    <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                        <div class="row m-0">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="card">
                                    <div class="card-header header-elements-inline p-3">
                                        <h6 class="card-title"><i class="icon-upload mr-2"></i>UPLOAD TENDER DOC</h6>
                                    </div>
                                    
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label class="col-form-label">Tendor Document Upload:</label>
                                            <input type="file" class="form-input-styled">
                                        </div>
                                        <div class="card-footer bg-white d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <ul class="list-inline list-inline-dotted mb-0">
                                                <li class="list-inline-item"></li>
                                            </ul>

                                            <ul class="list-inline list-inline-dotted mb-0 mt-1 mt-sm-0">
                                                <li class="list-inline-item"><a href="#" class="btn btn-success btn-sm"><i class="icon-paperplane mr-1"></i> Save Document</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="card">
                                    <div class="card-header header-elements-inline p-3">
                                        <h6 class="card-title"><i class="icon-upload mr-2"></i>UPLOAD SUPPORTING DOC(S)</h6>
                                    </div>
                                    
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label class="col-form-label">Supporting Document(s) Upload:</label>
                                            <input type="file" multiple class="form-input-styled">
                                        </div>
                                        <div class="card-footer bg-white d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <ul class="list-inline list-inline-dotted mb-0">
                                                <li class="list-inline-item"></li>
                                            </ul>

                                            <ul class="list-inline list-inline-dotted mb-0 mt-1 mt-sm-0">
                                                <li class="list-inline-item"><a href="#" class="btn btn-success btn-sm"><i class="icon-paperplane mr-1"></i> Save Document(s)</a></li>
                                            </ul>
                                        </div>
                                    </div>
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
<script type ="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    Js.init();
});
</script>