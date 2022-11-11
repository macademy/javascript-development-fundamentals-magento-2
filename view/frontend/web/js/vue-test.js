// When you request both "jquery" and "Macademy_JsFun/js/jquery-log", async
// requests are made to request both files.
define(['vue', 'jquery', 'Macademy_JsFun/js/jquery-log'], function(Vue, $) {
    'use strict';

    // However, there's no way of knowing which library loads first, possibly
    // causing the jQuery plugin to be loaded before the jQuery library loads.
    // This can cause unexpected results when executing the following code:
    $.log('Testing output to the console');
});
