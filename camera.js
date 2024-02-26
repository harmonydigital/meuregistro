function startVideoFromCamera(){
	navigator.mediaDevices.getUserMedia( { video:true,audio:true} ).then(stream=>{
		const elementVideo=querySelector('#video')
		elementVideo.srcObject(stream)
	}).catch(error=>{
		console.log(error)
	})
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera())