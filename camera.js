
function startVideoFromCamera(){
	navigator.mediaDevices.getUserMedia( { video:true,audio:true} ).then(stream=>{
	   const elementVideo=document.querySelector('video')
 


		const mediaSource = new MediaSource();
		const video = document.createElement("video");
		// Older browsers may not have srcObject
		if ("srcObject" in video) {
		  try {
		    video.srcObject = mediaSource;
		  } catch (err) {
		    if (err.name !== "TypeError") {
		      throw err;
		    }
		    // Even if they do, they may only support MediaStream
		    elementVideo.src = URL.createObjectURL(mediaSource);
		  }
		} else {
		  elementVideo.src = URL.createObjectURL(mediaSource);
		}

	}).catch(error=>{
	 
		
		console.log(error)
		
		
	})
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)