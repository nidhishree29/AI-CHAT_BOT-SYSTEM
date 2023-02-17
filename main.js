function myfunction(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
function validate(){
    var password=document.getElementById("pass");
    var length=document.getElementById("length");
    if(password.value =="Admin123"){  
        window.location.replace("http://127.0.0.1:5000");
        return false;
    }
    else{
        alert("Login Failed");
    }
}