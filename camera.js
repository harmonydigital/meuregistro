
function startVideoFromCamera(){
	navigator.mediaDevices.getUserMedia( { video:true,audio:true} ).then(stream=>{
	   const elementVideo=document.querySelector('video')

		elementVideo.srcObject(stream)
		alert('striming')
	}).catch(error=>{
		const elementVideo=document.querySelector('video')
		
		console.log(error)
		
		
	})
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)