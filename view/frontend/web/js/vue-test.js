/**
 * The properties defined within the attribute are now accessible within the callback. For example,
 * the "message" property is now accessible as config.message.
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
