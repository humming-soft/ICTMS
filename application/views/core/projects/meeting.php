<div class="page-content pt-0">
    <div class="content-wrapper">
        <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Progress Meeting</span>
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
                                <h6 class="card-title text-uppercase"><i class="icon-paragraph-right3 mr-2"></i>Progress Meeting</h6>
                                <div class="header-elements">
									<button type="button" data-toggle="modal" data-target="#gantt-lb" class="btn bg-success"><i class="icon-plus2 mr-1"></i> Schedule Meeting</button>
								</div>
                            </div>
                            
                            <div class="card-body">
                                <p class="mb-3">FullCalendar allows you to change the color of all events on the calendar using the <code>eventColor</code> option. Also you can change text, border and background colors for events in a specific Event Source with <code>event source</code> options (backgroundColor, color, textColor and borderColor) and for individual events with <code>color</code> option, which sets an event's background and border color. Example below demonstrates event colors based on a day of the week.</p>

                                <div class="fullcalendar-event-colors"></div>
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
                            <h4 class="hmwks-title">Schedule Meeting</h4>
                            <div class="hmwks-text mb-2">Schedule New Meetings/Edit Meetings</div>
                            <div class="row text-left">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
										<label>Title:</label>
										<textarea rows="2" name="description" style="resize: none;" value="" class="form-control"></textarea>
                                    </div>                                  
                                    <div class="form-group">
                                        <label>Date & Time:</label>
                                        <div class="row text-left">
                                            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="start_date" value="<?=date("d-M-Y")?>" id="start_date" readonly>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                                                <div class="form-group">
                                                    <select class="form-control">
                                                        <option value="6">12:00am</option>
                                                        <option value="6">12:30am</option>
                                                        <option value="6">1:00am</option>
                                                        <option value="6">1:30am</option>
                                                        <option value="6">2:00am</option>
                                                        <option value="6">2:30am</option>
                                                        <option value="6">3:00am</option>
                                                        <option value="6">3:30am</option>
                                                        <option value="6">4:00am</option>
                                                        <option value="6">4:30am</option>
                                                        <option value="6">5:00am</option>
                                                        <option value="6">5:30am</option>
                                                        <option value="6">6:00am</option>
                                                        <option value="6">6:30am</option>
                                                        <option value="6">7:00am</option>
                                                        <option value="6">7:30am</option>
                                                        <option value="6">8:00am</option>
                                                        <option value="6">8:30am</option>
                                                        <option value="6" selected>9:00am</option>
                                                        <option value="6">9:30am</option>
                                                        <option value="6">10:00am</option>
                                                        <option value="6">10:30am</option>
                                                        <option value="6">11:00am</option>
                                                        <option value="6">11:30am</option>
                                                        <option value="6">12:00pm</option>
                                                        <option value="6">12:30pm</option>
                                                        <option value="6">1:00pm</option>
                                                        <option value="6">1:30pm</option>
                                                        <option value="6">2:00pm</option>
                                                        <option value="6">2:30pm</option>
                                                        <option value="6">3:00pm</option>
                                                        <option value="6">3:30pm</option>
                                                        <option value="6">4:00pm</option>
                                                        <option value="6">4:30pm</option>
                                                        <option value="6">5:00pm</option>
                                                        <option value="6">5:30pm</option>
                                                        <option value="6">6:00pm</option>
                                                        <option value="6">6:30pm</option>
                                                        <option value="6">7:00pm</option>
                                                        <option value="6">7:30pm</option>
                                                        <option value="6">8:00pm</option>
                                                        <option value="6">8:30pm</option>
                                                        <option value="6">9:00pm</option>
                                                        <option value="6">9:30pm</option>
                                                        <option value="6">10:00pm</option>
                                                        <option value="6">10:30pm</option>
                                                        <option value="6">11:00pm</option>
                                                        <option value="6">11:30pm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                                                <div class="form-group">
                                                <select class="form-control">
                                                        <option value="6">12:00am</option>
                                                        <option value="6">12:30am</option>
                                                        <option value="6">1:00am</option>
                                                        <option value="6">1:30am</option>
                                                        <option value="6">2:00am</option>
                                                        <option value="6">2:30am</option>
                                                        <option value="6">3:00am</option>
                                                        <option value="6">3:30am</option>
                                                        <option value="6">4:00am</option>
                                                        <option value="6">4:30am</option>
                                                        <option value="6">5:00am</option>
                                                        <option value="6">5:30am</option>
                                                        <option value="6">6:00am</option>
                                                        <option value="6">6:30am</option>
                                                        <option value="6">7:00am</option>
                                                        <option value="6">7:30am</option>
                                                        <option value="6">8:00am</option>
                                                        <option value="6">8:30am</option>
                                                        <option value="6">9:00am</option>
                                                        <option value="6">9:30am</option>
                                                        <option value="6">10:00am</option>
                                                        <option value="6">10:30am</option>
                                                        <option value="6">11:00am</option>
                                                        <option value="6">11:30am</option>
                                                        <option value="6">12:00pm</option>
                                                        <option value="6" selected>12:30pm</option>
                                                        <option value="6">1:00pm</option>
                                                        <option value="6">1:30pm</option>
                                                        <option value="6">2:00pm</option>
                                                        <option value="6">2:30pm</option>
                                                        <option value="6">3:00pm</option>
                                                        <option value="6">3:30pm</option>
                                                        <option value="6">4:00pm</option>
                                                        <option value="6">4:30pm</option>
                                                        <option value="6">5:00pm</option>
                                                        <option value="6">5:30pm</option>
                                                        <option value="6">6:00pm</option>
                                                        <option value="6">6:30pm</option>
                                                        <option value="6">7:00pm</option>
                                                        <option value="6">7:30pm</option>
                                                        <option value="6">8:00pm</option>
                                                        <option value="6">8:30pm</option>
                                                        <option value="6">9:00pm</option>
                                                        <option value="6">9:30pm</option>
                                                        <option value="6">10:00pm</option>
                                                        <option value="6">10:30pm</option>
                                                        <option value="6">11:00pm</option>
                                                        <option value="6">11:30pm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="end_date" value="<?=date("d-m-Y")?>" id="end_date" readonly>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Guests</label>
                                        <select class="form-control multiselect" multiple="multiple" data-fouc>
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
                                        </select>
                                    </div>
                                    <div class="form-group">
										<label>Location:</label>
										<div class="form-group">
                                            <input type="text" class="form-control">                                           
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
                                            <button type="button" class="btn btn-light float-right" name="close" data-dismiss="modal">
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
        Js.init();
    });
</script>