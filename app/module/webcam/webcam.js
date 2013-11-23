(
    function(){
        var moduleName='webcam';
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia || navigator.msGetUserMedia;
        function loadWebcam(localMediaStream) {
            app.trigger('HTML5-bar-hide');
            window.a=localMediaStream;
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(localMediaStream);
        }
        
        function loadError(e) {
            if(typeof e=='string'){
                app.trigger('HTML5-bar-error', e);
                return;
            }
            
            e='Error connecting to webcam';
            app.trigger('HTML5-bar-error', e);
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
            
            app.data["HTML5-bar"].show();
        }
        
        exports(moduleName,render);    
    }
)();