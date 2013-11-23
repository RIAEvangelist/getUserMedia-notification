app.data.imagePath='app/img/';

app.data["HTML5-bar"]={
    defaults:{
        notHTML5    : 'This browser is not HTML5 Compliant, or is blocking HTML5 Audio/Video',
        message     : 'Please allow access',
        type        : 'video',
        lineHeight  : 100,
        fontSize    : 30
    },
    show : function(){
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
}