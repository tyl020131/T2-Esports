const cartBody=document.querySelector(".cart-container")
const carts = document.querySelectorAll(".products");
var duplicate;
var cartcount =0;
//Call Function Immediately
if(localStorage.getItem("list")!=null){
    var list = JSON.parse(localStorage.list);
    for( i=0;i<list.length;i++){
        displayCart();
    }
}


checkProduct();
countTotal();   
    
function displayCart(){
        //Create Div
        const productDiv=document.createElement("div");
        productDiv.classList.add("products");
        //Add Image
        const bigimg = document.createElement("div")
        const productImg=document.createElement("img");
        productImg.setAttribute("src",list[i].imgsrc);
        productImg.setAttribute("height","200");
        productImg.setAttribute("width","300");
        bigimg.classList.add("imgdiv");
        bigimg.appendChild(productImg);
        productDiv.appendChild(bigimg);
        //Add Name
        const productName=document.createElement("p");
        productName.innerHTML = list[i].namesrc;
        productName.classList.add("productname");
        productDiv.appendChild(productName);
        //Add Price
        const productPrice=document.createElement("p");
        productPrice.innerHTML = "Rm"+list[i].pricesrc;
        productPrice.classList.add("productprice");
        productDiv.appendChild(productPrice);
        //Add QTY
        const productQty=document.createElement("input");
        productQty.setAttribute("type","number");
        productQty.setAttribute("value",list[i].qty);
        productQty.setAttribute("id",list[i].namesrc);
        productQty.setAttribute("onclick","addTotal(this)");
        productQty.classList.add("qty");
        productDiv.appendChild(productQty);
        //Total
        const totalPrice=document.createElement("p");
        const val = document.querySelectorAll(".qty");
        totalPrice.innerHTML = "Rm"+(list[i].pricesrc*list[i].qty).toFixed(2);
        totalPrice.classList.add("totalprice");
        productDiv.appendChild(totalPrice);
        //Add Remove Button
        const removeButton=document.createElement("button");
        removeButton.setAttribute("type","submit");
        removeButton.setAttribute("id",list[i].namesrc);
        removeButton.setAttribute("onclick","pRemove(this)")
        removeButton.innerHTML="Remove"
        productDiv.appendChild(removeButton);
        //Add Div To Body
        cartBody.appendChild(productDiv);
        cartcount++;
        
}
function pRemove(e){
    e.parentElement.remove();
    for( i=0;i<list.length;i++){
        if(list[i].namesrc==e.id){
            list.splice(i,1);
            if(list.length==0){
                localStorage.removeItem("list");
            }
            else{
                localStorage.setItem("list", JSON.stringify(list));
            }
            
        }
    }
    countTotal();
}
function addTotal(e){
    if(e.value<1){
        e.parentElement.remove()
        for( i=0;i<list.length;i++){
            if(list[i].namesrc==e.id){
                list.splice(i,1);
                if(list.length==0){
                    localStorage.removeItem("list");
                }
                else{
                    localStorage.setItem("list", JSON.stringify(list));
                }              
            }
        }  
        countTotal();
    }
    else{
        for( i=0;i<list.length;i++){
            if(list[i].namesrc==e.id){
                e.nextElementSibling.innerHTML="Rm" +(list[i].pricesrc*e.value).toFixed(2);
                list[i].qty=e.value;
                localStorage.setItem("list", JSON.stringify(list));
                countTotal();
            }
        }
    }
}
function countTotal(){
    const allTotal = document.querySelectorAll(".totalprice")
    const subtotal = document.getElementById("subtotal");
    const sst = document.getElementById("sst")
    const shipping = document.getElementById("ship")
    const final = document.getElementById("final");
    var counting = 0;
    for(var i = 0;i<allTotal.length;i++){
        var toArray = allTotal[i].innerHTML.split("");
        toArray.splice(0,2);
        toArray = toArray.join("");
        var bobo = parseFloat(toArray);
        counting += bobo;
    }
    subtotal.innerHTML = "Rm"+parseFloat(counting).toFixed(2);
    sst.innerHTML = "Rm"+(counting*6/100).toFixed(2);
    var x =(counting*6/100).toFixed(2);
    if(counting>50){
        shipping.innerHTML="RM0.00"
        final.innerHTML = "Rm"+(parseInt(counting)+parseFloat(x)).toFixed(2);
    }
    else if(counting==0){
        shipping.innerHTML="RM0.00"
        final.innerHTML = "Rm0.00";
    }
    else {
        shipping.innerHTML="RM15.00"
        final.innerHTML = "Rm"+parseFloat(15).toFixed(2);
    }
    var totals = final.innerHTML.split("");
    totals.splice(0,2);
    totals = totals.join("");
    localStorage.setItem("total",parseFloat(totals));
    
}
function checkProduct(){
    const allname = document.querySelectorAll(".productname");
    const allprice=document.querySelectorAll(".productprice");
    const allTotal =document.querySelectorAll(".totalprice");
    for(var i =0;i<allname.length;i++){
        if(allname[i].innerHTML.indexOf("Razer")>-1){
            if(list[i].discount!=1){
                allprice[i].innerHTML="<span>Rm"+list[i].pricesrc+"</span></br><span>Rm"+(list[i].pricesrc/100*90).toFixed(2)+"</span>";
                list[i].pricesrc=(list[i].pricesrc/100*90).toFixed(2);
                allTotal[i].innerHTML ="Rm"+ (list[i].pricesrc*list[i].qty).toFixed(2);
                list[i].discount = 1;
                localStorage.setItem("list",JSON.stringify(list));
            }
            else{
                allprice[i].innerHTML="<span>Rm"+(list[i].pricesrc*100/90).toFixed(2)+"</span></br><span>Rm"+list[i].pricesrc+"</span>";
            }             
        }       
    } 
}
const checkout = document.getElementById("checkout");
checkout.addEventListener('click',()=>{
    
    var proceed = localStorage.getItem("total");
    if(proceed>0){
        location.replace("../payment/payment.html");
        return;
    }
    alert('Please Make Order To Continue');
    

})
