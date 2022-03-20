window.onload = function(){
    var total = localStorage.getItem("total");
    document.getElementById("amount").setAttribute("placeholder","RM"+parseFloat(total).toFixed(2));
}
function promo(){
    var promo=document.getElementById('promo').value;
    var total = localStorage.getItem("total");
    if (promo=="G1SALE"){
        alert("Promo Applied");
        document.getElementById("amount").setAttribute("placeholder","RM"+(total/100*80).toFixed(2));

    }
    else{
        alert("Invalid Promo Code");
        promoCode.focus();
        promoCode.select();
    }
    
}

function validation(){
    
    var fname=document.getElementById('fname');
    var lname=document.getElementById('lname');
    var pnumber=document.getElementById('pnumber');
    var postcode=document.getElementById('postcode');
    var total = localStorage.getItem(total);
    
    if(fname.value.length <=3){
        alert('Please Enter Valid First Name');
        return;
       
    }
    if(lname.value.length <=1){
        alert('Please Enter Valid Last Name');
        return;
        
    }
    if(isNaN(pnumber.value)){
        alert('Phone Number Should Only Consist of NUMBERiC');
        return;
       
    }
    if(pnumber.value.length <= 8){
        alert('Please Enter Valid Phone Number');
        return;
        
    }
    if(postcode.value.length <5){
        alert('Please Enter Valid Postcode');
        return;
       
    }
    alert("Transaction Completed!Your Orders Will Be Delivered To Your Place Within 14 Days!Thanks For Buying With G1 TECH")
    localStorage.removeItem("total");
    localStorage.removeItem("list");
    location.replace("../cart/cart.html")
}