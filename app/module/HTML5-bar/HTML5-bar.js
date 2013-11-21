(
    function(){
        var moduleName='HTML5-bar';
        var bar=false;
        var hasMedia = false;
        
        function render(el){
            hasMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia ||
                       false);
            bar=el;
        }
        
        function showBar(data){
            var defaults=app.data['HTML5-bar'].defaults;
            if(!data){
                data=defaults;
            }
            
            if(!hasMedia){
                errorBar(
                    (
                        data.notHTML5||
                        defaults.notHTML5
                    )
                );
                return;
            }
            
            bar.style.backgroundColor='rgba(200,200,50,.75)';
        }
        
        
        function errorBar(error){
            bar.style.backgroundColor='rgba(200,50,50,.75)';
            bar.innerHTML='';
            bar.style.fontSize   = '20px';
            bar.style.textAlign  = 'center';
            bar.innerText=error;
        }
        
        function hideBar(){
            bar.style.backgroundColor='rgba(20,80,200,.75)';
        }
        
        exports(moduleName,render);
        app.on('HTML5-bar-show', showBar);
        app.on('HTML5-bar-hide', hideBar);
        app.on('HTML5-bar-error', errorBar);
        
    }
)();