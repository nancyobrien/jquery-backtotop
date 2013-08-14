jquery-backtotop
================

jQuery Back to top button

This plugin adds a Back to Top button to any control on your webpage, although you would most likely want to add it to your body tag.

There are several options available, and any can be passed when the funtion is called.

OPTIONS:

Name (default) - description

debug (false) - writes messages to the FireBug console to let you know what is happening
scrollTime (250) - number of millisecond the page will take to scroll to the top
revealPosition (290) - number of pixels the page must be scrolled before the Back to Top button is shown
id (false) - specify an id for the control if you want one
class (backToTopSF) - class that will be assigned to the container for the Back to Top button
zIndex (1000) - z-index that will be assigned so the Back to Top button will always be on top
content (<span class='arrow'></span><span class='text'>back to top</span>) - the text/markup that will be inside the Back to Top button.  This content is wrapped in a <div> and an <a> tag.
fadeInTime (fast) - the time it takes for the jQuery animation to show the Back to Top button in (takes milliseconds or an valid jQuery animation time constant)
fadeOutTime (fast) - the time it takes for the jQuery animation to hide the Back to Top button in (takes milliseconds or an valid jQuery animation time constant)

