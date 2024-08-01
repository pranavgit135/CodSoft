let string= "";
let opt=["*","/","-","+"]
document.querySelector(".input").value="0"
let buttons= document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value= string;
        }
      
        else if(e.target.innerHTML == "AC"){
            string = "";
           
            document.querySelector("input").value= string + "0";
        }
        else{
        
        string = string + e.target.innerHTML;
        
        document.querySelector("input").value= string;
    }
    
   for(let i=0;i<opt.length;i++){
    if(string.startsWith(opt[i])){
        string=`NAN - press 'AC' first`;
        document.querySelector("input").value= string;
        
    }
   }
    })
   
})