var slideNum = 3;//Slide Num
var left = document.querySelector(".left")//left Button
var right = document.querySelector(".right");//Right Button
var num = 0;//Slider number
var i =0;
var speed=1200;
const slideshow =document.querySelector(".slideshow");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
var clickcount = 0;
var active = 0;
var dots = document.getElementsByClassName("dot");
var tod;
const shiftButton = document.querySelector(".slideshow-container");
var slidecount = 0;
//Onload Function
$(window).on('unload', function(){
    $(window).scrollTop(0);
  });
slideshow.style.transition = "none";
slideshow.style.left ="-"+(slideNum*speed)+"px"; 
screenRatio();
    

//button1 & button2
button1.addEventListener('click',()=>{
    //stopSlides();
    if(clickcount==0){
        slideNum--;
        slideshow.style.transition = "left 0.5s linear";
        slideshow.style.left ="-"+(slideNum*speed)+"px";
        clickcount=1;
        if(slideNum <2){
            slideshow.style.transition = "none";
            slideNum = 8;
            slideshow.style.left ="-"+(slideNum*speed)+"px";
            setTimeout(function(){slideNum--;
            slideshow.style.transition = "left 0.5s linear";
            slideshow.style.left ="-"+(slideNum*speed)+"px";
            },10)
        }
    }
    else{
        clickcount++
    }
    
})
button2.addEventListener('click',()=>{
   // stopSlides();
    if(clickcount==0){
        slideNum++
        slideshow.style.transition = "left 0.5s linear";
        slideshow.style.left ="-"+(slideNum*speed)+"px";
        clickcount=1;
        if(slideNum >8){
            slideshow.style.transition = "none";
            slideNum = 2;
            refresh=1;
            slideshow.style.left ="-"+(slideNum*speed)+"px";
            setTimeout(function(){slideNum++;
            slideshow.style.transition = "left 0.5s linear";
            slideshow.style.left ="-"+(slideNum*speed)+"px";
            },10)
        }
        }
    else{
        clickcount++
    }   
});
setInterval(function(){clickcount=0},1000);
//NewProducts Slider
function turnleft(){
    if(num==1){
        document.getElementById("newproduct").style.marginLeft = "0px";
        num--;
    }
}
function turnright(){
    if(num==0){
        document.getElementById("newproduct").style.marginLeft = "-230px"
        num++;
    }
}
//ScrollTop Effects
function animationOfProducts(){
    const slide = document.querySelector(".slide");
    const whyus = document.querySelector(".whyus-container");
    setTimeout(window.devicePixelRatio,1000)
    if(window.devicePixelRatio>=0.9 &&window.devicePixelRatio<=2.0){
    window.addEventListener('scroll',()=>{
    var scrollTop = document.documentElement.getBoundingClientRect().top;
    setTimeout(scrollTop,1);
    if(scrollTop<-350){
        slide.style.top = "50px"   ;
        slide.style.opacity = "1";
        

    }
    if(scrollTop<-650){
        whyus.style.top = "50px"   ;
        whyus.style.opacity = "1";  
        clearTimeout(screenChange);
    }
});
}
else{
    slide.style.top = "50px"   ;
    slide.style.opacity = "1"; 
    whyus.style.top = "50px"   ;
    whyus.style.opacity = "1";  
    clearTimeout(screenChange);
}

}
//Update Screen Ratio
function screenRatio(){
    setTimeout(window.devicePixelRatio,100);
    animationOfProducts();
    screenChange = setTimeout(screenRatio,100);
}
