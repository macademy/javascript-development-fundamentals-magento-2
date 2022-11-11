/**
 * If you use "*" to target all elements, the element property within the
 * callback will be null because RequireJS won't know which specific element you
 * wish to refeference. In this case, hardcode a selector or use an HTML class
 * attribute rather than an ID selector within your JS initialization.
 */
define(['vue'], function(Vue) {
    'use strict'

    return function(config, element) {
        return new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        });
    };
});
