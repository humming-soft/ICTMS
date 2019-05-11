<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Activities & Deliverables</span>
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
                        <div class="alert bg-success-400 text-white alert-dismissible" style="display:none">
                            <button type="button" class="close" data-dismiss="alert"><span>×</span></button>
                            <span class="font-weight-semibold message"></span>
                        </div>
                        <div class="card">
                            <div class="card-header header-elements-inline p-3">
                                <h6 class="card-title text-uppercase"><i class="icon-paragraph-right3 mr-2"></i>Activities & Deliverables</h6>
                                <div class="header-elements">
                                    <div class="text-right">

                                        <div class="btn-group">
                                            <a class="btn btn-light gantt-control" data-control="undo" href="#"><i class="icon-undo2"></i></a>
                                            <a class="btn btn-light gantt-control" data-control="redo" href="#"><i class="icon-redo2"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-light gantt-control" data-control="fullscreen" href="#"><i class="icon-enlarge"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-light gantt-control" data-control="zoom-in" href="#"><i class="icon-zoomout3"></i></a>
                                            <a class="btn btn-light gantt-control" data-control="zoom-out" href="#"><i class="icon-zoomin3"></i></a>
                                        </div>
                                        <div class="btn-group">
                                            <a class="btn btn-light gantt-control" data-control="save" href="#" title="Save"><i class="icon-floppy-disk"></i></a>
                                        </div>
                                        <div class="btn-group">
                                            <a href="#" class="btn btn-light gantt-control" data-control="critical-path"><i class="icon-split text-danger"></i> Critical Path</a>
                                        </div>
                                        <div class="btn-group">
                                            <a href="#" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-expanded="false">View</a>
                                            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-73px, 36px, 0px);">
                                                <a href="#" class="dropdown-item gantt-control active" data-column="" data-control="column-view"> Activity ID</a>
                                                <a href="#" class="dropdown-item gantt-control active" data-column="text" data-control="column-view"> Activity Name</a>
                                                <a href="#" class="dropdown-item gantt-control active" data-column="start_date" data-control="column-view"> Start Date</a>
                                                <a href="#" class="dropdown-item gantt-control" data-column="end_date" data-control="column-view"> End Date</a>
                                                <a href="#" class="dropdown-item gantt-control active" data-column="duration" data-control="column-view"> Duration</a>
                                                <a href="#" class="dropdown-item gantt-control" data-column="cost" data-control="column-view"> Cost</a>
                                                <a href="#" class="dropdown-item gantt-control" data-column="owner" data-control="column-view"> Resources</a>
                                                <a href="#" class="dropdown-item gantt-control" data-column="text_comment" data-control="column-view">  Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-group ml-2">
                                        <a href="#" data-toggle="modal" data-target="#gantt-lb" class="btn btn-light"><i class="icon-plus2 mr-1"></i> New Resources</a>
                                    </div>
								</div>
                            </div>
                            
                            <div class="card-body">
                                <div class="row m-0">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div id="wbs_milestones" style='min-height:500px;'></div>
                                    </div>
                                </div>
                                <fieldset class="card-body text-right">
                                    <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                                    <a href="#" class="btn bg-success"><i class="icon-paperplane mr-1"></i> Save</a>
                                    <a href="<?=site_url('projects/02849/maintenance')?>" class="btn bg-blue gx_save">Save And Continue - Maintenance <i class="icon-arrow-right7 ml-1"></i></a>
                                </fieldset>
                                <hr>
                                <div class="row m-0">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <h6 class="text-uppercase pb-3"><i class="icon-history mr-2"></i>Change Log</h6>
                                        <div class="timed-activities padded">
                                            <div class="timed-activity">
                                                <div class="ta-date"><span>21st Apr, 2019</span></div>
                                                <div class="ta-record-w">
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>11:55</strong> am</div>
                                                        <div class="ta-activity">Uploaded Evidence of Activity for <a href="#">Production of TBM Parts in Malaysia.</a></div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>2:34</strong> pm</div>
                                                        <div class="ta-activity">Updated Calculation for <a href="#">Production of TBM Parts in Malaysia.</a></div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>7:12</strong> pm</div>
                                                        <div class="ta-activity">Status of the project <a href="#">Steel Fibre Reinforced Concrete (SFRC) Tunnel Linings</a> changed from <span class="badge badge-info">PENDING APPROVAL</span> to <span class="badge badge-success">APPROVED</span>.</div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>9:39</strong> pm</div>
                                                        <div class="ta-activity">Rejected with Comment <b>"Please elaborate the milestone, and simplyfy the activities"</b> by <a href="#">Project Manager.</a> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timed-activity">
                                                <div class="ta-date"><span>3rd Apr, 2019</span></div>
                                                <div class="ta-record-w">
                                                <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>9:33</strong> pm</div>
                                                        <div class="ta-activity">Status changed from <span class="badge badge-dark">NEW</span> to <span class="badge badge-info">PENDING APPROVAL</span>.</div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>9:32</strong> pm</div>
                                                        <div class="ta-activity">Submitted Work Breakdown Structure for Approval by You.</div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>5:14</strong> pm</div>
                                                        <div class="ta-activity">Updated Start Time to <a href="#">15-Jun-2019</a> and End Time to <a href="#">21-Dec-2019</a> of the Activity 
                                                            <a href="#">Installing Warning Signs</a> by You.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="timed-activity">
                                                <div class="ta-date"><span>21st Feb, 2019</span></div>
                                                <div class="ta-record-w">
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>11:55</strong> am</div>
                                                        <div class="ta-activity">Added Activity <a href="#">Installing Warning Signs</a> under MIlestone 
                                                        <a href="#">Population more aware of the danger of waste dumping</a> by You.
                                                        </div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>2:34</strong> pm</div>
                                                        <div class="ta-activity">Added Milestone <a href="#">Population more aware of the danger of waste dumping</a> under Project 
                                                        <a href="#">Integrated Labout Market Analysis And Reporting</a> by You.
                                                        </div>
                                                    </div>
                                                    <div class="ta-record">
                                                        <div class="ta-timestamp"><strong>9:39</strong> pm</div>
                                                        <div class="ta-activity">Added Milestone <a href="#">Increased capital investment and improved business planning within Local Government is established, including cost of recovery mechanisms</a> 
                                                        under Project  <a href="#">Integrated Labout Market Analysis And Reporting</a> by You.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
<div class="hmwks-modal modal show" id="gantt-lb" tabindex="-1">
    <div class="modal-dialog modal-dialog-md modal-dialog-centered">
        <div class="modal-content">
            <div class="popup-body">
                <div class="hmwks-slider-w">
                    <div class="hmwks-slide">
                        <div class="hmwks-content with-gradient text-center" style="padding:30px">
                            <h4 class="hmwks-title">New Task</h4>
                            <div class="hmwks-text mb-2">Please add new Milestone/Activity</div>
                            <div class="row text-left">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
										<label>Description:</label>
										<textarea rows="2" name="description" style="resize: none;" value="" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Resources</label>
                                        <select class="form-control multiselect" multiple="multiple" data-fouc>
                                            <optgroup label="HUMAN RESOURCES">
                                                <option value="6">Chief Information Officer</option>
                                                <option value="7">Program Director</option>
                                                <option value="8">Project Director</option>
                                                <option value="9">Service Delivery Director</option>
                                                <option value="10">Sales Director</option>
                                                <option value="11">Insides Sales Manager</option>
                                                <option value="12">Project Manager</option>
                                                <option value="13">Business Development Manager</option>
                                                <option value="14">IT Supply Chain Manager</option>
                                                <option value="15">Account Manager</option>
                                                <option value="16">IT Procurement Specialist</option>
                                                <option value="17">IT Marketing Communications Executive</option>
                                                <option value="18">IT Trainer</option>
                                                <option value="19">Channel Sales Specialist</option>
                                                <option value="20">Inside Sales Specialist</option>
                                                <option value="22">SAP Team Lead</option>
                                                <option value="23">Software Development Manager</option>
                                                <option value="24">Senior Solutions Architect</option>
                                                <option value="25">Lead Software Developer</option>
                                                <option value="26">Business Consultant</option>
                                                <option value="27">SAP Consultant</option>
                                                <option value="28">Software Sales manager</option>
                                                <option value="29">ETL Developers</option>
                                                <option value="30">Websphere Application Developers</option>
                                                <option value="31">BI Consultant</option>
                                                <option value="32">System Analyst</option>
                                                <option value="33">QA Specialist</option>
                                                <option value="34">Junior Solutions Architect</option>
                                                <option value="35">Software Engineer</option>
                                                <option value="36">Software Programmer</option>
                                                <option value="37">Web Designer</option>
                                                <option value="38">Analyst Programmer</option>
                                                <option value="39">Java Developer</option>
                                                <option value="40">Programmer</option>
                                                <option value="41">Billing System Specialist</option>
                                                <option value="42">Implementation &amp; Technical Support
                                                    Manager</option>
                                                <option value="43">Information Security Manager</option>
                                                <option value="44">UNIX Specialist</option>
                                                <option value="45">Service Delivery Manager</option>
                                                <option value="46">Senior System Engineer</option>
                                                <option value="47">Wintel Specialist</option>
                                                <option value="48">IT Manager</option>
                                                <option value="49">Problem &amp; change Management Specialist</option>
                                                <option value="50">Security Analyst</option>
                                                <option value="51">Technical Writer</option>
                                                <option value="52">Unix &amp; linux OS Engineer</option>
                                                <option value="53">Pre-Sales Engineer</option>
                                                <option value="54">Billing System Engineer</option>
                                                <option value="55">Database Administrator</option>
                                                <option value="56">System Engineer</option>
                                                <option value="57">Technical Consultant</option>
                                                <option value="58">Helpdesk Tech Support(Foreign Language
                                                    Expertise)</option>
                                                <option value="60">Help Desk Analyst</option>
                                                <option value="61">IT Executive</option>
                                                <option value="62">Automation Support Engineer</option>
                                                <option value="63">Technician</option>
                                                <option value="64">IT Administrator</option>
                                            </optgroup>
                                            <optgroup label="HARDWARE RESOURCES">
                                                <option value="65">Hard Drive: Minimum 32 GB</option>
                                                <option value="66">Ethernet connection (LAN) OR a wireless
                                                    adapter (Wi-Fi)</option>
                                                <option value="67">Processor</option>
                                                <option value="68">Memory (RAM): Minimum 1 GB</option>
                                            </optgroup>
                                            <optgroup label="OFFICE REQUIREMENTS">
                                                <option value="73">Bookcases</option>
                                                <option value="74">File cabinets</option>
                                                <option value="75">Wall whiteboard and markers</option>
                                            </optgroup>
                                            <optgroup label="SOFTWARE REQUIREMENTS">
                                                <option value="69">Appery.io</option>
                                                <option value="70">Mobile Roadie</option>
                                                <option value="71">TheAppBuilder</option>
                                                <option value="72">AppMachine</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
										<label>Start Date:</label>
										<div class="form-group form-group-feedback form-group-feedback-right">
                                            <input type="text" class="form-control" name="start_date" id="start_date" readonly>
                                            <div class="form-control-feedback">
                                                <i class="icon-calendar"></i>
                                            </div>
                                        </div>
									</div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
										<label>End Date:</label>
										<div class="form-group form-group-feedback form-group-feedback-right">
                                            <input type="text" class="form-control" name="end_date" id="end_date" readonly>
                                            <div class="form-control-feedback">
                                                <i class="icon-calendar"></i>
                                            </div>
                                        </div>
									</div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="d-sm-flex">
                                        <button type="button" class="btn btn-success" name="save">
                                            <i class="icon-checkmark3 mr-1"></i>
                                            Save
                                        </button>

                                        <button type="button" class="btn btn-danger ml-1" name="delete">
                                            <i class="icon-bin mr-1"></i>
                                            Delete
                                        </button>

                                        <div class="ml-auto">
                                            <button type="button" class="btn btn-light float-right" name="close">
                                                <i class="icon-cross mr-1"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    </div>
</div>
<script type ="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        d_data = <?php echo $p_a_json; ?>;
        Js.init(d_data);
    });
</script>