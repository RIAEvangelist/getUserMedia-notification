getUserMedia-notification
=========================

This HTML module or plugin is designed to help make the getUserMedia ( audio and video) and other HTML5 prompts more noticeable to the user. The idea was thought up by and created for Alexander De Ridder. It will automatically re arrange itself for the various browsers notification styles.

---
### Use
1) include the app folder  
2) include the required scripts as shown in the head of the index.html demo 

    <script src='app/core/app.js'></script>
    <script src='app/core/app-polyfills.js'></script>
    <script src='app/config/app.js'></script>

3) include the HTNL5-bar element as shown in the index.html demo 

    <section class='appModule HTML5-bar' 
        data-moduletype='HTML5-bar'
        data-css='true' 
        data-html='true'></section>

4) trigger the HTML5-bar events in your getUserMedia call as shown in the `` app/module/webcam/webcam.js `` example
    
    navigator.getUserMedia(...);
    app.data["HTML5-bar"].show();
    
    function loadError(e) {
        if(typeof e=='string'){
            app.trigger('HTML5-bar-error', e);
            ...
            return;
        }
        
        e='Error connecting to webcam';
        app.trigger('HTML5-bar-error', e);
        ...
    }
    
    function loadWebcam(localMediaStream) {
        app.trigger('HTML5-bar-hide');
        ...
    }

---
## Customizing bar

`` app.data["HTML5-bar"].show `` accepts the following options :

    {
        notHTML5    : 'This browser is not HTML5 Compliant, or is blocking HTML5 Audio/Video',
        message     : 'Please allow access',
        type        : 'video',
        lineHeight  : 100,
        fontSize    : 30
    }

If you wish to dive deeper it will be very simple to do so just by tweaking the  `` app/module/HTML5-bar/HTML5-bar.css `` file.

---
## trouble shooting

If you can not put the app module in the same directory as the html file calling it, you can change the app module directory inside of the `` app/core/app.js `` file on line 8 this should be relative to the end file in which the HTML-Bar will be rendered, or the root of the server with a preceding / like so : `` /app/module/ ``. Provided this is specified the app directory can reside anywhere you like. Feel free to make this a variable provided you set the value before including the app script.

    var config={
        modulesPath : 'app/module/'
    }


> Written with [StackEdit](https://stackedit.io/).