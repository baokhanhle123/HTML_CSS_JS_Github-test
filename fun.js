//TO DO
function Check() {
    marks = document.getElementById("check_first_name").value;
    var point = 0;
    if (marks == "" || marks.length<2) {
        point++;
    } 
    marks2 = document.getElementById("check_last_name").value;
    if(marks2==""|| marks2.length<2){
        point++;
    } 
    marks3 = document.getElementById("check_email").value;
    if(marks3==""|| marks3.length<2){
        point++;
    }
    marks4 = document.getElementById("check_password").value;
    if(marks4==""|| marks4.length<2){
        point++;
    }
    let day = document.getElementById("check_day");
    let marks5 = day.options[day.selectedIndex].text;
    if(marks5=="Day"){
        point++;
    }
    let month = document.getElementById("check_month");
    let marks6 = month.options[month.selectedIndex].text;
    if(marks6=="Month"){
        point++;
    }
    let year = document.getElementById("check_year");
    let marks7 = year.options[year.selectedIndex].text;
    if(marks7=="Year"){
        point++;
    }
    var off_payment_method = document.getElementsByName('gender');
    var ischecked_method = false;
    for ( var i = 0; i < off_payment_method.length; i++) {
        if(off_payment_method[i].checked) {
            ischecked_method = true;
            break;
        }
    }
    if(!ischecked_method)   { 
        point++;
    }

    if(point==0){
        alert("Complete!");
    } else{
        alert("Please enter all information!!")
    }

}
function reset(){
    location.reload();
}