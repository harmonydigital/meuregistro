const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")
let msg=document.getElementById ("msg")
let arrInputs=Array.from(inputs)
let step=document.querySelector('form').getAttribute('step')
let jsonArr=[]
 

document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault()
    
  arrInputs.map((mapInp)=>{ 
        var name=mapInp.getAttribute('name')
        jsonArr.push({
        [mapInp.getAttribute('name')]:mapInp.value, 
    }); 
  }) 
  
  localStorage.setItem(step, Array.from(jsonArr)); 
  
 if(step=="step-1"){  
   setTimeout(()=>{
    // window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/step-2.html" 
     // console.log(localStorage.getItem(step))
   },1000);
 }
 if(step=="step-2"){  
   setTimeout(()=>{
    window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/step-3.html" 
   },1000);
 }
 if(step=="step-3"){  
   setTimeout(()=>{
    window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/step-4.html" 
   },1000);
 }
 if(step=="step-4"){  
   setTimeout(()=>{
      window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/sucess.html" 
   },1000);
 }
  
  
 
 jsonArr.forEach((element, index, array) => {
    // console.log(element); // 100, 200, 300
    // console.log(index); // 0, 1, 2
    // console.log(array); // same myArray object 3 times
 
    console.log("this",Object.entries(element))
});
})
