<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('projects/02849')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Objective Analysis</span>
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
                                <h5 class="card-title text-uppercase"><i class="icon-stack2 mr-2"></i>Objective Analysis</h5>
                                <div class="header-elements">
                                    <div class="list-icons">                                    
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Export</button>
                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-73px, 36px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <a href="#" class="dropdown-item"><i class="icon-menu7"></i> PNG</a>
                                                <a href="#" class="dropdown-item"><i class="icon-screen-full"></i> JPEG</a>
                                                <a href="#" class="dropdown-item"><i class="icon-mail5"></i> PDF</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <p class="mb-3">Build the visualisation using the inversion of the problems into objectives leading into an objective tree. The objective tree provides a summary picture of the desired future situation, including the indicate means by which ends can be achieved. See example <a href="">here</a> </p>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-5">
                                        <h5 class="text-center">PROBLEMS</h5>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-7">
                                        <h5 class="text-center">OBJECTIVES</h5>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-5">
                                        <div id="graphContainer" style="overflow:hidden;display:none;width:100%;height:700px;background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')">
                                            <?=$p_a_xml?>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-7 border-1 border-light-gray">
                                        <div id="graphContainer2" style="overflow:hidden;width:100%;height:700px;"></div>
                                    </div>
							    </div>
                                <hr>
                                <fieldset class="card-body text-right">
                                    <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
									<a href="#" class="btn bg-success gx_save"><i class="icon-paperplane mr-1"></i> Save</a>
                                    <a href="<?=site_url('projects/02849/stat-analysis')?>" class="btn bg-blue gx_save">Save And Continue - Strategic Analysis <i class="icon-arrow-right7 ml-1"></i></a>
								</fieldset>
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
<div class="hmwks-modal modal animated" id="edit-sha" tabindex="-1">
        <div class="modal-dialog modal-dialog-md modal-dialog-centered">
            <div class="modal-content">
                <a href="#" class="modal-close" data-dismiss="modal" aria-label="Close"><em class="icon icon-cross2"></em></a>
                <div class="popup-body">
                    <div class="hmwks-slider-w">
                        <div class="hmwks-slide">
                            <div class="hmwks-content with-gradient text-center">
                                <h4 class="hmwks-title">Create New Project</h4>
                                <div class="hmwks-text">This is a multi step project creation process, you
                                    can use it to provide project information which includes scope, objective of the project
                                    and project team etc. before you start your project.</div>
                                <div class="row text-left">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input type="text" id="p_name" name="pjt_name" class="form-control form-control-lg" placeholder="Enter Project Name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div><!-- Modal End -->
<script type ="text/javascript">

</script>
<script type ="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        ObjAnalysis.init();
    });
</script>