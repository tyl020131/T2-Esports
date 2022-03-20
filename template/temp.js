var x=JSON.parse(localStorage.active);
if(x.status==1)
{
    document.getElementById("login").innerHTML=x.username;
    document.getElementById("login").setAttribute("onclick","clicked()");
}

else{

    document.getElementById("login").innerHTML="LOGIN/REGISTER";
    

}
var link = document.getElementById("login").getAttribute("href");
document.getElementById("login").removeAttribute("href");
document.getElementById("login").onmouseover = function(){
    document.getElementById("login").style.cursor = "pointer";
}
function clicked(){
    var j = confirm("Once You Log Out,your cart data will be lost.Do you want To Continue?");
    
    if(j== true){
        localStorage.removeItem("active");
        localStorage.removeItem("list");
        localStorage.removeItem("total");
        location.replace(link);
    }
    else{
        return;
    }
    
}
