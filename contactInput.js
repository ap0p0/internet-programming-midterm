function reserve()
{
    if(!document.getElementById("defaultCheck1").checked){
        alert("Must validate before answer");
      }
    else{
    var surname = document.getElementById("SurnameInput").value;
    localStorage.setItem("SurnameInput",surname);
    var name = document.getElementById("NameInput").value;
    localStorage.setItem("NameInput",name);
    var studentID = document.getElementById("IDinput").value;
    localStorage.setItem("IDinput",studentID);
    var email = document.getElementById("EmailInput").value;
    localStorage.setItem("EmailInput",email);
    } 
}