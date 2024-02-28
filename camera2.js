
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
  console.log("Let's get this party started")
  
  async function getMedia(constraints) {
  let stream = null;
	 const status=document.getElementById('status')

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
	console.log('1stream',stream)
	 const elementVideo=document.querySelector('video')
	 status.innerHTML='streaming now'
	
		elementVideo.srcObject(stream)
  } catch (err) {
    /* handle the error */
	 status.innerHTML='streaming err'
  }
}
}else{
	  console.log("Recurso de mídia não disponivel")
	 status.innerHTML='resurce err'
	  
}

function startVideoFromCamera(){
	navigator.mediaDevices.getUserMedia( { video:true,audio:true} ).then(stream=>{
	   const elementVideo=document.querySelector('video')

		elementVideo.srcObject(stream)
	}).catch(error=>{
		const elementVideo=document.querySelector('video')
		
		console.log(error)
		console.log('elementVideo',elementVideo)
	})
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)