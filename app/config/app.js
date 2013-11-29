app.data.imagePath='app/img/';

app.data["HTML5-bar"]={
    defaults:{
        notHTML5    : 'Your browser is not HTML5 compliant Audio/Video access denied.',
        message     : 'Please allow access',
        type        : 'video',
        lineHeight  : 100,
        fontSize    : 30
    },
    show : function(options){
        if(app.exists('HTML5-bar-show')){
            setTimeout(
                function(){
                    app.trigger(
                        'HTML5-bar-show',
                        options
                    );
                },100
            );
            return;
        }
        (
            function(){
                setTimeout(app.data["HTML5-bar"].show(options),100)
            }
        )(options);
    }
}