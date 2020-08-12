//Function -  BEGIN

function bgChanger(){
   if(this.scrollY > this.innerHeight / 1.5){
       document.body.classList.add("bg-active");
       console.log(document.body);
   }
   else{
       document.body.classList.remove("bg-active");
       console.log(document.body);
   }
}

//EventListener

window.addEventListener('scroll', bgChanger);



 // Funtion for MIDDLE

 function bgChanger3(){
    if(this.scrollY > this.innerHeight / 0.6){
        document.body.classList.add("cng");
        console.log(document.body);
    }
    else{
        document.body.classList.remove("cng");
        console.log(document.body);
    }
 }
 
 //EventListener
 
 window.addEventListener('scroll', bgChanger3);
 
 


// Funtion for END

function bgChanger2(){
    if(this.scrollY > this.innerHeight / 0.36){
        document.body.classList.add("bg-active2");
        console.log(document.body);
    }
    else{
        document.body.classList.remove("bg-active2");
        console.log(document.body);
    }
 }
 
 //EventListener
 
 window.addEventListener('scroll', bgChanger2);




 
 
