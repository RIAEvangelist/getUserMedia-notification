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
            console.log('showing;');
            var defaults=app.data['HTML5-bar'].defaults;
            var barIcons=false;
            var barArrow='up';
            
            if(!data){
                data=defaults;
            }
            
            bar.style.lineHeight=(
                data.lineHeight||
                defaults.lineHeight
            )+'px';
            
            bar.style.fontSize=(
                data.fontSize||
                defaults.fontSize
            )+'px';
            
            if(!hasMedia){
                errorBar(
                    (
                        data.notHTML5||
                        defaults.notHTML5
                    )
                );
                return;
            }
            
            barIcons=app.data.imagePath+'icons/HTML5-bar-';
            
            bar.querySelector('.HTML5-bar-message')[app.normalize.innerText]=(
                data.message||
                defaults.message
            );
            
            bar.querySelector('.HTML5-bar-arrow-up').src=barIcons+'up.png';
            bar.querySelector('.HTML5-bar-arrow-left').src=barIcons+'left.png';
            bar.querySelector('.HTML5-bar-type').src=barIcons+(
                data.type||
                defaults.type
            )+'.png';
            
            if(!navigator.userAgent.match(
                    /webkit|chrome|safari|iphone|android|mobile/i
                )
            ){
                barArrow='left';
            }
            
            bar.querySelector('.HTML5-bar-arrow-'+barArrow).classList.remove('HTML5-bar-hide')
        }
        
        
        function errorBar(error){
            bar.classList.add('HTML5-bar-error');
            bar.querySelector('.HTML5-bar-message')[app.normalize.innerText]=error;
        }
        
        function hideBar(){
            bar.classList.add('HTML5-bar-hide');
        }
        
        exports(moduleName,render);
        app.on('HTML5-bar-show', showBar);
        app.on('HTML5-bar-hide', hideBar);
        app.on('HTML5-bar-error', errorBar);
        
    }
)();