 
 
 
 const inputRG=document.getElementById('irg')
 
 const rgMask = () =>{
	 
	 
if(inputRG.value.length==2 || inputRG.value.length==6  ){
	inputRG.value+="."
}
if(inputRG.value.length==10  ){
	inputRG.value+="-"
}
 }
 
 
 inputRG.addEventListener('keypress', rgMask)