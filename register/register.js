function validation(){
    var username = document.getElementById("username");
    var tel = document.getElementById('tel');
    var password = document.getElementById('password');
    var Cpassword = document.getElementById('Cpassword');
    var email = document.getElementById('email');
    var agreements = document.getElementById('agreements')
    if(username.value.length < 8){
        alert('Username must more than or equal to 8 characters');
        username.focus();
        username.select();
        return false;
    }
    if(password.value.length <8 ){
        alert('Password must consist of 8 or more charatcers');
        password.focus();
        password.select();
        return false;
    }
    if(Cpassword.value != password.value){
        alert("Confirm password is not same with password!!");
        Cpassword.focus();
        Cpassword.select();
        return false;
    }
    if(email.value.indexOf("@")==-1 || email.value.length < 10){
        alert("Please Enter Valid Email");
        email.focus();
        email.select();
        return false;
    }
    if(isNaN(tel.value)==true){
        alert('Contact Number should only consist of NUMBERIC!');
        tel.focus();
        tel.select();
        return false;
    }
    if(tel.value.length <= 8 ){
        alert('Contact Number must more than 8');
        tel.focus();
        tel.select();
        return false;
    }
    if(agreements.checked==false){
        alert('You must agree the Terms & Conditions');
        return false;
    }
    //alert("Your account has be registered");
    var active = {status:1,username:username.value};
    localStorage.setItem("active",JSON.stringify(active));
    let newUser = {username:username.value,password:password.value}
    if (localStorage.getItem("users") === null){
        var users = []
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));

    }
    else{
        var users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));

    }
    location.replace("../home/homepage.html")
    
    
}

