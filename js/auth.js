function checkPswd() {
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("pswd").value;
    if (username == "rootM" && password == "rootM") {
         window.location="dcr.html";
    }
    else if( username == "icm1" && password == "icm1") {
      window.location.href="https://sites.google.com/view/innocmf/career";
    // login Google Site - External
    }
    else if( username == "icmfadmin" && password == "icmfadmin") {
      window.location.href="https://sites.google.com/view/innocmf/career/exam-records";
    // login Main - Exam Records
    }
    else if( username == "icmit" && password == "icmit") {
      window.location="https://sites.google.com/view/innocmf/it-team-reports";
    // login Main - IT Team Reports
    }
    else if( username == "opm" && password == "admin") {
      window.location="dcr.html";
    // login Main
    }
    else if( username == "admin2" && password == "admin") {
      window.location="#";
    // login Main
    }
    else if( username == "admin3" && password == "admin") {
      window.location="#";
    // login Main
    }
    else{
        alert("Passwords do not match.");
    }
}