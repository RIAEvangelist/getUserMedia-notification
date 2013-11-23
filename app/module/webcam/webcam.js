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
        
        function showHTML5bar(){
            if(app.exists('HTML5-bar-show')){
                setTimeout(
                    function(){
                        app.trigger(
                            'HTML5-bar-show',
                            {
                                message:'Please allow webcam access.'
                            }
                        );
                    },100
                );
                return;
            }
            setTimeout(showHTML5bar,100)
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
            
            showHTML5bar();
        }
        
        exports(moduleName,render);    
    }
)();