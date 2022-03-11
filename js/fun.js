var IDs = "#fname, #lname, #mail, #pwd";
var Days = [31,28,31,30,31,30,31,31,30,31,30,31];
$(document).ready(function(){    
    var option = '<option value="Day">Day</option>';
    $('#day').append(option);
    for (var i=1;i <= Days[0];i++){
        $('#day').append($('<option>', {
            value: i,
            text: i
        }));
    }

    var option = '<option value="month">Month</option>';
    $('#month').append(option);
    for (var i=1;i <= 12;i++){
        $('#month').append($('<option>', {
            value: i,
            text: i
        }));
    }

    var d = new Date();
    var option = '<option value="year">Year</option>';
    $('#year').append(option);
    for (var i=1930;i <= d.getFullYear();i++){
        $('#year').append($('<option>', {
            value: i,
            text: i
        }));
    }
});

$(IDs).keypress(function(event){
    var ew = event.which;
    if(ew == 32 || ew == 46)
        return true;
    if(35 <= ew && ew <= 38)
        return true;
    if(48 <= ew && ew <= 57)
        return true;
    if(64 <= ew && ew <= 90)
        return true;
    if(97 <= ew && ew <= 122)
        return true;
    return false;
});

function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	      return false;
	  } else if (year % 400 == 0) {
	      return true;
	  } else if (year % 100 == 0) {
	      return false;
	  } else {
	      return true;
	  }
}

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
	  {
		    Days[1] = 29;
		    
    }
    else {
        Days[1] = 28;
    }
    if( $("#month").val() == 2)
		    {
			       var day = $('#day');
			       var val = $(day).val();
			       $(day).empty();
			       var option = '<option value="day">Day</option>';
			       for (var i=1;i <= Days[1];i++){ 
				         option += '<option value="'+ i + '">' + i + '</option>';
             }
			       $(day).append(option);
			       if( val > Days[ month ] )
			       {
				          val = 1;
			       }
			       $(day).val(val);
		     }
  }

function change_month(select) {
    var day = $('#day');
    var val = $(day).val();
    $(day).empty();
    var option = '<option value="day">Day</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ 
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(day).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(day).val(val);
}


function submit(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pwd = document.getElementById("pwd").value;
    var abt = document.getElementById("abt").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var unknow = document.getElementById('unknow').checked;
    if((fname.length >= 2 && fname.length <= 20) &&
        (lname.length >= 2 && lname.length <= 20) &&
        (pwd.length >= 2 && pwd.length <= 20) &&
        (abt.length <= 20) &&
        (day != "Day") &&
        (month != "Month") &&
        (year != "Year") &&
        (male || female || unknow)){
            alert("Complete");
    }
    else alert("Error");
}

function reset(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("mail").value = "";
    document.getElementById('abt').value = '';
    document.getElementById('abt').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('unknow').checked = false;
    alert("Reset");
}
