<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('projects/02849')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">JPICT/JTISA Approval</span>
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
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h5 class="card-title text-uppercase"><i class="icon-checkmark-circle2 mr-2"></i>JPICT/JTISA Approval</h5>
                            </div>
                            
                            <div class="card-body">
                                <div class="row m-0">
                                    <div class="col-sm-12">
                                        <div class="form-group text-center" style="font-size:1rem;">
                                            <label>Project Status:</label>
                                            <div class="form-group mb-0">
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" value="1" name="l_i[1]" class="form-input-styled app-status" data-fouc>
                                                        Approved
                                                    </label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" value="0" name="l_i[1]" class="form-input-styled app-status" data-fouc>
                                                        Rejected
                                                    </label>
                                                </div>

                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="radio" value="2" name="l_i[1]" class="form-input-styled app-status"  data-fouc>
                                                        Keep In View (KIV)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="f-appvd" style="display:none;">
                                    <div class="row m-0 border-top border-top-1 pt-3">
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label>EPU Approved Project Value:</label>
                                                <h4 class="font-weight-semibold mb-0"><span>RM 10,230,120.00</span></h4>
                                                
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
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <label>Additional Criteria(s):</label>
                                                <textarea name="" id="" cols="30" class="form-control b-maint" rows="3"></textarea>
                                                <small>Criteria Separated by Comma(,)</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row m-0">
                                        <div class="col-sm-7">
                                            <div class="form-group">
                                                <label class="col-form-label">Approval Document Upload:</label>
                                                <input type="file" class="form-input-styled">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-0">
                                    <div class="col-sm-12">
                                        <hr>
                                        <fieldset class="card-body text-right">
                                            <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                            <a href="<?=site_url('projects/02849')?>" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
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
$(document).on("click",".app-status", function(){
    if($(this).val() == 1){
        $("#f-appvd").show();
    }else{
        $("#f-appvd").hide();
    }
});
</script>