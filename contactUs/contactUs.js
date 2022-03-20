function validation(){
    var name=document.getElementById("name");
    var message=document.getElementById("message");
    var tel=document.getElementById("tel");
    var email=document.getElementById("email");
    if(name.value.length <3){
        alert("Please Enter Valid Name");
        name.focus();
        name.select();
        return false;
    }
    
    if(tel.value.length <7 || isNaN(tel.value)==true){
        alert("Please Enter Valid Contact Number");
        tel.focus();
        tel.select();
        return false;
    }
    if(email.value.indexOf("@")==-1 || email.value.length < 12){
        alert("Please Enter Valid Email");
        email.focus();
        email.select();
        return false;
    }
    if(message.value.length <10){
        alert("Please Enter more than 10 words");
        message.focus();
        message.select();
        return false;
    }

    if(confirm("Are you sure you want to submit the message?")==1){
        alert("Submit successful!!");
        return true;
    }
    else{
        return false;
    }

}

