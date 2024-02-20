  const form = document.getElementById ("dataSubmit")

  let inputs=document.querySelectorAll("input")
  let msg=document.getElementById ("msg")
  let arrInputs=Array.from(inputs)
  let step=document.querySelector('form').getAttribute('step')
  let jsonArr=[]
  var step1=[]
  var step2=[]
  var step3=[]
      
  var step4=[] 

  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()



   if(step=="step-1"){ 
     
   // ===============================step1==============================
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
     
      localStorage.setItem(step, Array.from(step1)); 

     // ===============================step1==============================

     setTimeout(()=>{
         window.location.href="https://harmonydigital.github.io/Cadastro-Prianti/step-2.html" 

      
     },1000);
   }
   if(step=="step-2"){  
     
          
   // ===============================step2==============================
     var irg=document.getElementById('irg').value
     var iorgaoemissor=document.getElementById('iorgaoemissor').value
     var idataemissao=document.getElementById('idataemissao').value
     var inomemae=document.getElementById('inomemae').value
     var inomepai=document.getElementById('inomepai').value

     step2=[{
       rg:irg,
       orgaoemissor:iorgaoemissor,
       dataemissao:idataemissao,
       nomemae:inomemae,
       nomepai:inomepai
     }]
     
      localStorage.setItem(step, Array.from(step2)); 

     // ===============================step1==============================
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



 
  })
