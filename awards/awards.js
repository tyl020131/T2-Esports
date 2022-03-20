//FIRST IMAGE
// Get the modal
 var modal = document.getElementById("myModal");
        
 // Get the image and insert it inside the modal, display the 'alt' text on below the image
 var img = document.getElementById("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user click 'x' on the top right corner, close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }

 //repeat the same for the SECOND IMAGE
  var modal2 = document.getElementById("myModal2");
        
  var img2 = document.getElementById("myImg2");
  var modalImg2 = document.getElementById("img02");
  var captionText2 = document.getElementById("caption2");
  img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  }
  
  var span2 = document.getElementsByClassName("close2")[0];
  
  span2.onclick = function() { 
    modal2.style.display = "none";
  }

  
 //repeat the same for the THIRD IMAGE
  var modal3 = document.getElementById("myModal3");
        
  var img3 = document.getElementById("myImg3");
  var modalImg3 = document.getElementById("img03");
  var captionText3 = document.getElementById("caption3");
  img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
  }
  
  var span3 = document.getElementsByClassName("close3")[0];
  
  span3.onclick = function() { 
    modal3.style.display = "none";
  }

  //repeat the same for the FOURTH IMAGE
  var modal4 = document.getElementById("myModal4");
        
  var img4 = document.getElementById("myImg4");
  var modalImg4 = document.getElementById("img04");
  var captionText4 = document.getElementById("caption4");
  img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
  }
  
  var span4 = document.getElementsByClassName("close4")[0];
  
  span4.onclick = function() { 
    modal4.style.display = "none";
  }