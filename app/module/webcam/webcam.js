(
    function(){
        var moduleName='webcam';
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;
        function loadWebcam(localMediaStream) {
            window.a=localMediaStream;
            console.log(window.URL.createObjectURL(localMediaStream));
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(localMediaStream);
        }
        
        function loadError(e) {
            document.getElementById('webcam-required').style.display='block';
            
            if(typeof e=='string'){
                document.getElementById('webcam-required').innerHTML=e;
                return;
            }
            
            document.getElementById('webcam-required').innerText='Error connecting to webcam';
        }
        
        function render(el){
            navigator.getUserMedia(
                {
                    video:{
                        optional:[
                            {minFrameRate:30},
			                {minAspectRatio: screen.availWidth/screen.availHeight},
                            {minWidth:screen.availWidth}
                        ]
                    }
                }, 
                loadWebcam,
                loadError
            );
        }
        
        exports(moduleName,render);    
    }
)();