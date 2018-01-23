(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function

    main();
}

/******** Our main function ********/
function main() {
    jQuery(document).ready(function($) {
        /******* Load CSS *******/
        var css_link = $("<link>", {
            rel: "stylesheet",
            type: "text/css",
            href: "http://localhost:4000/style.css"
        });
        css_link.appendTo('head');
        var html = '<div id="bloomin-bot-container"><div class="bloomin-bot-app-container"><div class="bloomin-bot-app bot-app-launcher-enabled"><div class="bloomin-bot"><iframe src="' + window.pulseSettings.link + '" frameborder="0"></iframe></div><div class="bloomin-bot-launcher-badge"></div><div class="bloomin-bot-launcher"><div class="bloomin-bot-launcher-open-icon"></div><div class="bloomin-bot-launcher-close-icon"></div></div></div></div></div>';

        var body = $('body');
        body.append(html);

        var botLauncher = $('.bloomin-bot-launcher');
        var bot = $('.bloomin-bot');
        botLauncher.on('click', function(){
          botLauncher.toggleClass('bloomin-bot-launcher-active');
          bot.toggleClass('slide-top');
        })

        /******* Load HTML *******/
        // var jsonp_url = "http://al.smeuh.org/cgi-bin/webwidget_tutorial.py?callback=?";
        // $.getJSON(jsonp_url, function(data) {
        //   $('#example-widget-container').html("This data comes from another server: " + data.html);
        // });
    });
    window.$ = jQuery
}

})(); // We call our anonymous function immediately