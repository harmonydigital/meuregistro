 // import { getFirestore, storage } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
     const firebaseConfig = {

        apiKey: "AIzaSyD5PzIgcmI8oKaitM1Orstt2vJ2Utmtpjo",
        authDomain: "registerdata-bc1b8.firebaseapp.com",
        projectId: "registerdata-bc1b8",
        storageBucket: "registerdata-bc1b8.appspot.com",
        messagingSenderId: "810207129485",
        appId: "1:810207129485:web:95838fb8ca2ef3b7bfd7c4"

      }; 
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig); 

      var fileItem;
      var fileName;
      var percentVal;
      var uploadPercent=document.getElementById('uploadPercent')
      var progressbar=document.getElementById('progressbar')

              

      document.getElementById('cpfimage').addEventListener('change',(e)=>{

             fileItem=e.target.files[0];
             fileName=fileItem.name; 
          
      })


      document.getElementById('sendimage').addEventListener('click',(e)=>{
          console.log('send')
          
          let storageRef=firebase.storage().ref("images/"+fileName)
          let uploadTask=storageRef.put(fileItem)

          

          uploadTask.on("state_changed",(snapshot)=>{
            console.log(snapshot)

              percentVal=Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100)

              console.log('percentVal',percentVal)

              progressbar.style.cssText='display:block'
              progressbar.style.width=percentVal+"%"
             
              uploadPercent.innerHTML=percentVal+"%"
              
          },(err)=>{
              console.log(err) 
          },()=>{

              uploadTask.snapshot.ref.getDownloadURL().then((URL)=>{
                console.log('URL',URL)

                document.querySelector('.imageUpload').style.cssText='display:block'
                document.getElementById('imageCPF').setAttribute('src',URL)
              })  
          })

          
      })
