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
                                <h5 class="card-title text-uppercase"><i class="icon-stack2 mr-2"></i>Objective Analysis</h5>
                            </div>
                            
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-5">
                                        <h5 class="text-center">PROBLEMS</h5>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-7">
                                        <h5 class="text-center">OBJECTIVES</h5>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-5">
                                        <div id="graphContainer" style="overflow:hidden;width:100%;height:700px;background:url('<?=site_url('assets/js/plugins/diagram/mxgraph/images/grid.gif')?>')"></div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-7">
                                        <div id="graphContainer2" style="overflow:hidden;width:100%;height:700px;background:url('<?=site_url('assets/js/plugins/diagram/mxgraph/images/grid.gif')?>')"></div>
                                    </div>
							    </div>
                                <hr>
                                <fieldset class="card-body text-right">
                                    <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
									<a href="<?=site_url('projects/02849')?>" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                    <a href="<?=site_url('projects/02849/obj-analysis')?>" class="btn bg-blue">Save And Continue - Strategic Analysis <i class="icon-arrow-right7 ml-1"></i></a>
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
        ProbAnalysis.init();
    });
</script>