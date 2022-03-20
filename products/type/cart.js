function addToCart(image,name,price){
    if(localStorage.getItem('active')===null){
        alert('Please Sign In To Continue');
        return;
        
    }
    this.image=image;
    this.name=name;
    this.price=price;
    var duplicate;
    //Save To Local Storage
    this.saveLocal=function(){
        let newProduct={
            imgsrc:this.image,namesrc:this.name,pricesrc:this.price,qty:1,discount:0
        }
        if (localStorage.getItem("list") === null){
            list=[];
            list.push(newProduct);
            
        }
        else{
            list = JSON.parse(localStorage.getItem("list"));
            for(var i=0;i<list.length;i++){
                if(list[i].namesrc==this.name){
                        list[i].qty+=1;
                        duplicate = 1;
                        break;  
                }
                else{
                    duplicate=0;
                }   
            }
            if(duplicate==0){
                list.push(newProduct);
                
            }
                    
        }
        alert("Added To Cart Successfully!")
        localStorage.setItem("list", JSON.stringify(list));
        console.log(localStorage.list)
    }
    this.saveLocal();
}