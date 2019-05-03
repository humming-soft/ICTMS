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
                                <h5 class="card-title text-uppercase"><i class="icon-package mr-2"></i>Maintenance</h5>
                            </div>
                            
                            <div class="card-body">
                                <div class="row m-0">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Duration of Maintenance (Year):</label>
                                            <input type="number" class="form-control b-maint" id="num-main" value="5" placeholder="Enter Duration of Maintenance...">
                                        </div>
                                        <div class="form-group">
                                            <label>% of Cost Equivalent to Main Project/Annum:</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control b-maint" id="per-main" value="20" placeholder="Enter % of Cost Equivalent to Main Project/Annum...">
                                                <span class="input-group-append">
                                                    <span class="input-group-text">%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="main-r font-weight-semibold text-danger"><div class="main-r font-weight-semibold text-danger">Estimated Maintenance Cost: <b>RM 5,000,000</b></div></div>
                                    </div>
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
    // document.addEventListener('DOMContentLoaded', function() {
    //     Js.init();
    // });
    $(document).on("keypress",".b-maint",function(){
        var v1 = $("#num-main").val();
        var v2 = $("#per-main").val();
        console.log(v1+"-"+v2);
        if(v1 != "" && v2 != ""){
            $(".main-r").html("Estimated Maintenance Cost: <b>"+ ((v2/100)*1667500)*v1+"</b>");
        }else{
            $(".main-r").html("");
        }
    });

</script>