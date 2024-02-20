const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")
let msg=document.getElementById ("msg")
let arrInputs=Array.from(inputs)
let step=document.querySelector('form').getAttribute('step')
let jsonArr=[]
var step1=[] 

document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault()
    
  
  
 if(step=="step-1"){  
    
   var iname=document.getElementById('iname').value
   var iemail=document.getElementById('iemail').value
   var itelefone=document.getElementById('itelefone').value
   var icpf=document.getElementById('icpf').value
   
   step1=[{
     name:iname,
     email:iemail,
     telefone:itelefone,
     cpf:icpf  
   }]
   
   // ===============================step1==============================
   
   setTimeout(()=>{
      // window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/step-2.html" 
     
     console.log(step1)
    
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
 
    console.log("this",element)
});
})
