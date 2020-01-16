

function myFunction() {
  var mailidValue = document.getElementById("mailid").value;
  var passwordValue = document.getElementById("password").value;
  
  
  if (passwordValue === "" || mailidValue === "") {
    alert("ERROR!");
    return
  }
  alert("SUCCESS!");
}

