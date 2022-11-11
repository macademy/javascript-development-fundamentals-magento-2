// JavaScript Components use the "define" keyword rather than "require"
define(['jquery'], function($) {
    'use strict'

    /*
     * To create reusable JavaScript Components, it's best practice to not define
     * implementation details. The functionality of this component dynamically
     * changes based on what parameters are passed to it.
     */
    return function (className, duration) {
        /*
         * Since parameter defaults only exist in ES6 and beyond, to make code
         * with the highest level of compatibility, you can define defaults with
         * the "||" (OR) symbol to define value fallbacks.
         */
        $(className).hide().fadeIn(duration || 2000);
    };
});
