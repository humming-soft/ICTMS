<div class="page-content pt-0">
    <div class="content-wrapper">
    <div class="page-header " style="border-left: 1px solid #ddd; border-right: 1px solid #ddd; margin-bottom: 0;">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title">
                    <div class="breadcrumb mt-1">
                        <a href="<?=site_url('dashboard')?>" class="breadcrumb-item py-0 text-primary"><i class="icon-home2"></i></a>
                        <a href="<?=site_url('projects/02849')?>" class="breadcrumb-item py-0 text-primary">Transport Information Data Exchange (TIDE)</a>
                        <span class="breadcrumb-item py-0 active">Risk Register</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="d-md-flex align-items-md-start">
                <div class="flex-fill overflow-auto">
                    <div class="row m-0">
                        <div class="col-sm-9">
                            <div class="card">
                                <div class="card-header header-elements-inline p-3">
                                    <h5 class="card-title text-uppercase"><i class="icon-shield-notice mr-2"></i>Risk Register</h5>
                                </div>                              
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <table class="table table-bordered table-hover" id="editable1">
                                                <thead>
                                                <tr>
                                                    <th rowspan="2" width="5%">NO</th>
                                                    <th rowspan="2" width="25%">RISK CAUSE</th>
                                                    <th style="text-align: center;" colspan="3" width="15%">IMPACT</th>
                                                    <th style="text-align: center;" colspan="2" width="30%">COUNTER MEASURES</th>
                                                    <th style="text-align: center;" rowspan="2" width="10%">PROB(%)</th>
                                                </tr>
                                                <tr>
                                                    <td>DEADLINE</td>
                                                    <td>COST</td>
                                                    <td>QUALITY</td>
                                                    <td>PREVENTION</td>
                                                    <td>CORRECTIVE</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td class="no idr">R21</td>
                                                    <td id="first">Real-time Commuting Data extracted from the various Public Transportation Authorities and Operators are inaccurate.</td>
                                                    <td class="secrads" align="center"> <input type="radio" value="option1" id="question3" name="soft1" class="secrad1"></td>
                                                    <td class="secrads1" align="center">  <input type="radio" value="option2" id="question4" name="soft1" class="secrad1">  </td>
                                                    <td class="secrads2" align="center"> <input type="radio" value="option3" checked="" id="question4" name="soft1" class="secrad1"> </td>
                                                    <td><textarea rows="2" class="form-control" id="first">Data Quality Test to be included as part of the Technical Study Phase</textarea></td>
                                                    <td><textarea rows="2" class="form-control" id="first"></textarea></td>
                                                    <td align="center"><select class=" form-control m-b select1" id="riskSelect1">
                                                            <option>%</option>
                                                            <option value="15">15</option>
                                                            <option value="30">30</option>
                                                            <option value="45" selected>45</option>
                                                            <option value="60">60</option>
                                                            <option value="75">75</option>
                                                        </select></td>
                                                </tr>
                                                <tr>
                                                    <td class="no idr">R22</td>
                                                    <td id="first">Carbon emission data collected by Jabatan Alam Sekitar is inaccurate.</td>
                                                    <td class="secrads" align="center"> <input type="radio" value="option1" id="question3" name="soft2" class="secrad2"></td>
                                                    <td class="secrads1" align="center">  <input type="radio" value="option2" id="question4" name="soft2" class="secrad2">  </td>
                                                    <td class="secrads2" align="center"> <input type="radio" value="option3" checked="" id="question4" name="soft2" class="secrad2"> </td>
                                                    <td><textarea rows="2" class="form-control" id="first">Data Quality Test to be included as part of the Technical Study Phase</textarea></td>
                                                    <td><textarea rows="2" class="form-control" id="first"></textarea></td>
                                                    <td align="center"><select class=" form-control m-b select1" id="riskSelect2">
                                                            <option>%</option>
                                                            <option value="15">15</option>
                                                            <option value="30">30</option>
                                                            <option value="45" selected>45</option>
                                                            <option value="60">60</option>
                                                            <option value="75">75</option>
                                                        </select></td>

                                                </tr>
                                                <tr>
                                                    <td class="no idr">R23</td>
                                                    <td id="first">Hospitals do not have accurate data on Accident cases.</td>
                                                    <td class="secrads" align="center"> <input type="radio" value="option1" id="question3" name="soft3" class="secrad3"></td>
                                                    <td class="secrads1" align="center">  <input type="radio" value="option2" id="question4" name="soft3" class="secrad3">  </td>
                                                    <td class="secrads2" align="center"> <input type="radio" value="option3" checked="" id="question4" name="soft3" class="secrad3"> </td>
                                                    <td><textarea rows="2" class="form-control" id="first">Data Quality Test to be included as part of the Technical Study Phase</textarea></td>
                                                    <td><textarea rows="2" class="form-control" id="first"></textarea></td>
                                                    <td align="center"><select class=" form-control m-b select1" id="riskSelect3">
                                                            <option>%</option>
                                                            <option value="15" selected>15</option>
                                                            <option value="30">30</option>
                                                            <option value="45">45</option>
                                                            <option value="60">60</option>
                                                            <option value="75">75</option>
                                                        </select></td>

                                                </tr>
                                                <tr>
                                                    <td class="no idr">R24</td>
                                                    <td id="first">LLM is capturing inaccurate data on Traffic and Road Maintenance.</td>
                                                    <td class="secrads" align="center"> <input type="radio" value="option1" id="question3" name="soft4" class="secrad4"></td>
                                                    <td class="secrads1" align="center">  <input type="radio" value="option2" id="question4" name="soft4" class="secrad4">  </td>
                                                    <td class="secrads2" align="center"> <input type="radio" value="option3" checked="" id="question4" name="soft4" class="secrad4"> </td>
                                                    <td><textarea rows="2" class="form-control" id="first">Data Quality Test to be included as part of the Technical Study Phase</textarea></td>
                                                    <td><textarea rows="2" class="form-control" id="first"></textarea></td>
                                                    <td align="center"><select class=" form-control m-b select1" id="riskSelect4">
                                                            <option>%</option>
                                                            <option value="15">15</option>
                                                            <option value="30" selected>30</option>
                                                            <option value="45">45</option>
                                                            <option value="60">60</option>
                                                            <option value="75">75</option>
                                                        </select></td>
                                                </tr>
                                                <tr>
                                                    <td class="no idr">R25</td>
                                                    <td id="first">Collaboration efforts has not been agreed between the Public Transportation Operators and Authority.</td>
                                                    <td class="secrads" align="center"> <input type="radio" value="option1" checked="" id="question3" name="soft5" class="secrad5"></td>
                                                    <td class="secrads1" align="center"><input type="radio" value="option2" id="question4" name="soft5" class="secrad5">  </td>
                                                    <td class="secrads2" align="center"><input type="radio" value="option3" id="question4" name="soft5" class="secrad5"> </td>
                                                    <td><textarea rows="2" class="form-control" id="first"></textarea></td>
                                                    <td><textarea rows="2" class="form-control" id="first">Top Managements from all Public Transportation Operators, Authority and Ministry meet to establish collaboration</textarea></td>
                                                    <td align="center"><select class=" form-control m-b select1" id="riskSelect5">
                                                            <option>%</option>
                                                            <option value="15">15</option>
                                                            <option value="30">30</option>
                                                            <option value="45">45</option>
                                                            <option value="60" selected>60</option>
                                                            <option value="75">75</option>
                                                        </select></td>

                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-header header-elements-inline p-3">
                                    <h5 class="card-title text-uppercase"><i class="icon-target2 mr-2"></i>Impact</h5>
                                </div>                              
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <table class="table table-bordered table-hover ">
                                                <tbody>
                                                <tr>
                                                    <td><span style="font-weight: bold; width: 97%; height: 20px; text-align: center;display: block;">45%</span><div id="45one" style="font-weight: bold; width: 97%; height: 82px;"><div></div><br><span><i class="icon-circle-small"></i>R21<span></div></td>
                                                    <td><span style="font-weight: bold; width: 97%; height: 20px; text-align: center;display: block;">60%</span><div type="text" id="60one" style="font-weight: bold; width: 97%; height: 82px;"><div></div></div></td>
                                                    <td><span style="font-weight: bold; width: 97%; height: 20px; text-align: center;display: block;">75%</span><div type="text" id="75one" style="font-weight: bold; width: 97%; height: 82px;"><div></div></div></td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" value="30%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="30two" style="font-weight: bold; width: 97%; height: 82px;"><div></div><br><span><i class="icon-circle-small"></i>R24<span></div></td>
                                                    <td><input type="text" value="45%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="45two" style="font-weight: bold; width: 97%; height: 82px;"><div></div></div></td>
                                                    <td><input type="text" value="60%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="60two" style="font-weight: bold; width: 97%; height: 82px;"><div></div><br><span><i class="icon-circle-small"></i>R25<span></div></td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" value="15%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="15three" style="font-weight: bold; width: 97%; height: 82px;"><div></div><br><span><i class="icon-circle-small"></i>R23<span></div></td>
                                                    <td><input type="text" value="30%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="30three" style="font-weight: bold; width: 97%; height: 82px;"><div></div></div></td>
                                                    <td><input type="text" value="45%" style="font-weight: bold; width: 97%; height: 20px; text-align: center " readonly=""><br><div type="text" id="45three" style="font-weight: bold; width: 97%; height: 82px;"><div></div><br><span><i class="icon-circle-small"></i>R22<span></div></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <div class="text-center pt-2"> <label style="font-weight: bold">IMPACT ON THE PROJECT <br> (Deadlines,Cost,Quality)</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <fieldset class="card-body text-right">
                        <a href="<?=site_url('projects/02849')?>" class="btn btn-light ml-3">Cancel</a>
                        <a href="<?=site_url('projects/02849')?>" class="btn bg-success gx_save"><i class="icon-paperplane mr-1"></i> Save</a>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        $(".risk").addClass("active");
     /*   $('#editable1').DataTable();*/
        $(document).on("change",".select1",function(){
            var valRad = $(this).closest("tr").find(".no").text();
            var riskId = $(this).closest("tr").find(".idr").text();
             if(riskId == 'R21'){
                var radioValue =  $(this).closest("tr").find("input[type=radio]").val();
                var selsctVal=$("#riskSelect1").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(radioValue == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(radioValue == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(radioValue == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if(radioValue == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
            if(riskId == 'R22'){
                var radioValue = $("input[name='soft2']:checked").val();
                var selsctVal=$("#riskSelect2").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft2']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft2']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft2']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft2']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
            if(riskId == 'R23'){
                var radioValue = $("input[name='soft3']:checked").val();
                var selsctVal=$("#riskSelect3").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft3']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft3']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft3']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft3']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
            if(riskId == 'R24'){
                var radioValue = $("input[name='soft4']:checked").val();
                var selsctVal=$("#riskSelect4").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft4']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft4']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft4']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft4']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
            if(riskId == 'R25'){
                var radioValue = $("input[name='soft5']:checked").val();
                var selsctVal=$("#riskSelect5").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft5']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft5']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft5']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft5']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            } if(riskId == 'R26'){
                var radioValue = $("input[name='soft6']:checked").val();
                var selsctVal=$("#riskSelect6").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft6']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft6']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft6']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft6']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
            if(riskId == 'R27'){
                var radioValue = $("input[name='soft7']:checked").val();
                var selsctVal=$("#riskSelect7").val();
                if(selsctVal == '75'){
                    $("#75one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if(selsctVal == '15'){

                    $("#15three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft7']:checked").val() == 'option1' && selsctVal == '45') {

                    $("#45one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft7']:checked").val() == 'option2' && selsctVal == '45') {

                    $("#45two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option3'  && selsctVal == '45') {

                    $("#45three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');
                }
                if($("input[name='soft7']:checked").val() == 'option1' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option2' && selsctVal == '60') {

                    $("#60two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option3'  && selsctVal == '60') {

                    $("#60three").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option1' && selsctVal == '30') {

                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option2' && selsctVal == '30') {
                    $("#30one").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
                if($("input[name='soft7']:checked").val() == 'option3'  && selsctVal == '30') {
                    $("#30two").append('<br><span><i class="icon-circle-small"></i>' + riskId + '<span>');

                }
            }
        });
        $( "#addrow1" ).click(function() {
            $("#editable1").append('<tr> <td class="no">7</td> <td ><input type="text" class="form-control idr" id="riskId7"></td> <td > <textarea  rows="2"    class="form-control" id="first"  ></textarea></td> <td class="secrads" align="center"> <input type="radio"  value="option1" id="question3" name="soft7" class="secrad6"></td> <td class="secrads1" align="center">  <input type="radio" value="option2" checked="" id="question4" name="soft7" class="secrad6">  </td> <td class="secrads2" align="center"> <input type="radio" value="option3" checked="" id="question4" name="soft7" class="secrad6"> </td> <td ><textarea  rows="2"   class="form-control" id="first"  ></textarea></td> <td ><textarea  rows="2"    class="form-control" id="first"  ></textarea></td> <td align="center"><select class=" form-control m-b select1" id="riskSelect7"> <option>%</option> <option value="15">15</option> <option value="30">30</option> <option value="45">45</option> <option value="60">60</option> <option value="75">75</option> </select></td> <td><a href="overview.php" class="btn btn-white btn-sm"> <i class="fa fa-trash"></i> Delete </a></td> </tr>');
        });
        /* Init DataTables */
       /* $('.scroll_content').slimscroll({
            height: '732px'
        });*/
    });
    /* Apply the jEditable handlers to the table */



</script>
