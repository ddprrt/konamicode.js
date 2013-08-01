/**

    Author: Stefan Baumgartner (@ddprrt)
    File: konamicode.jquery.js
    Requires: konamicode.js, jQuery

    Description: Small jQuery extension for the konamicode.js

**/

!function ($, window, undefined) {

    $.fn.konamicode = function(callback) {
        if(window.konamicode) {
            window.konamicode(this[0], callback);
        }
    }

}(jQuery, window)