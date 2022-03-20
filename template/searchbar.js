const pages = ['Products','Support','Desktop','Laptop','Accessories'];
const pageslink = ['products','support','desktop','laptop','accessories'];
const topDiv = document.querySelector(".top");
const searchBar = document.querySelector(".searchbar");
const searchBtn = document.getElementById("icon1");
var i;
var value;
var result;
searchBar.addEventListener('keyup',()=>{
    result = document.querySelector(".searchresult");
    //remove all result
    if(result!=null){
        result.remove();
        
    }
    //get the input of user
    value = searchBar.value.toUpperCase();
    if(value.length<2){
        return;
    }
    //create div to store input result
    const resultDiv = document.createElement("div")
    resultDiv.classList.add("searchresult");
    //loop to display result that is equal to input
    for( i=0;i<pages.length;i++){
        if(pages[i].toUpperCase().indexOf(value)>-1){
            const smallDiv = document.createElement("div");
            const smallink = document.createElement("a");
            smallink.classList.add("link");
            if(i>1){
                smallink.setAttribute("href","../products/type/"+pageslink[i]+".html");
            }
            else{
                smallink.setAttribute("href","../"+pageslink[i]+"/"+pageslink[i]+".html");
            }
            var url = window.location.href;
            if(url.indexOf("type")>-1){
                if(i>1){
                    smallink.setAttribute("href",pageslink[i]+".html");
                }
                else{
                    smallink.setAttribute("href","../../../"+pageslink[i]+"/"+pageslink[i]+".html");
                }
            }
            if(url.indexOf("details")>-1){
                if(i>1){
                    smallink.setAttribute("href","../../../"+pageslink[i]+".html");
                }
                else{
                    smallink.setAttribute("href","../../../../../"+pageslink[i]+"/"+pageslink[i]+".html");
                }
            }
            smallDiv.innerHTML = pages[i];
            smallink.appendChild(smallDiv);
            resultDiv.appendChild(smallink);
        }
}
//add To Top
topDiv.appendChild(resultDiv);
//remove if users remove searchvalue
if(value.length<1){
    if(result!=null){
        result = document.querySelector(".searchresult");
        console.log('deleted')
        result.remove(); 
    }
    
}
});
//search button
searchBtn.addEventListener('click',()=>{
    
    
    if(document.querySelector('.link')==null){
        alert("No Relevant Results");
        
    }
    else{
        const firstlink = document.querySelector('.link');
        const direct = firstlink.href;
        location.replace(direct);
    }
})
searchBar.onblur = function(){
    window.addEventListener('click',()=>{
        result = document.querySelector(".searchresult");
        result.remove(); 
    })
}