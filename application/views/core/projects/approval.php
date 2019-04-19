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
                                <h5 class="card-title text-uppercase"><i class="icon-checkmark-circle2 mr-2"></i>Approval</h5>
                            </div>
                            
                            <div class="card-body">
                                <div class="row m-0">
                                    <div class="col-sm-12">
                                        <div class="form-group text-center font-size-lg">
                                            <label>Project Status:</label>
                                            <div class="form-group mb-0">
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" name="l_i[1]" class="form-input-styled" data-fouc>
                                                        Approved
                                                    </label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" name="l_i[1]" class="form-input-styled" data-fouc>
                                                        Rejected
                                                    </label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" name="l_i[1]" class="form-input-styled"  data-fouc>
                                                        Keep In View (KIV)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <label>Estimated Project Value:</label>
                                            <h4 class="font-weight-semibold mb-0"><span>RM 12,930,678.00</span></h4>
                                            
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Approved Project Value:</label>
                                            <div class="input-group">
                                                <span class="input-group-prepend">
                                                    <span class="input-group-text">RM</span>
                                                </span>
                                                <input type="number" class="form-control b-maint" id="per-main" placeholder="Enter Approved Project Value...">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-sm-12">
                                        <hr>
                                        <fieldset class="card-body text-right">
                                            <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                            <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                            <a href="<?=site_url('projects/02849/resources')?>" class="btn bg-blue gx_save">Save And Continue - Resources <i class="icon-arrow-right7 ml-1"></i></a>
                                        </fieldset>
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