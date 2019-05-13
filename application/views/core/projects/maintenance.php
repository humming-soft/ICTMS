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
                                        <div class="row m-0">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Project Implementation Cost:</label>
                                                    <h4>RM 48,545,905.00</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>Project Impact:</label>
                                                    <h4>RM 3,007,200,000</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="form-group">
                                            <label>Duration of Maintenance (Year):</label>
                                            <input type="number" class="form-control b-maint" id="num-main" value="2" placeholder="Enter Duration of Maintenance...">
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
                                        <div class=" font-weight-semibold text-danger"><div class="main-r font-weight-semibold text-danger main-r" style="font-size: 20px">Estimated Maintenance Cost: <b>RM 29,127,543.00</b></div></div>
                                    </div>
                                    <div class="col-sm-6">
                                        <form action="#" class="dropzone dz-clickable" id="dropzone_multiple">
                                            <div class="dz-default dz-message1 text-center" style="padding-top:15%">
                                                <span class="font-weight-semibold">Creativity Index</span>
                                                <h1 style="font-size: 40px" class="font-weight-semibold text-muted ci-tx">44.25%</h1>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-sm-12">
                                    <hr>
                                        <fieldset class="card-body text-right">
                                            <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                            <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                            <a href="<?=site_url('projects/02849/risk')?>" class="btn bg-blue gx_save">Save And Continue - Risk Register <i class="icon-arrow-right7 ml-1"></i></a>
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
    $(document).on("keyup",".b-maint",function(){
        var v1 = $("#num-main").val();
        var v2 = $("#per-main").val();
        console.log(v1+"-"+v2);
        if(v1 != "" && v2 != ""){
            var emc = ((v2/100)*48545905)*v1;
            var ci = 3007200000/(48545905+emc);
            $(".main-r").html("Estimated Maintenance Cost: <b>RM "+ formatMoney(emc)+"</b>");
            $(".ci-tx").html(ci.toFixed(2)+"%");
        }else{
            $(".main-r").html("");
            $(".ci-tx").html(0+"%");
        }

        function formatMoney(n, c, d, t) {
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        };
    });

</script>