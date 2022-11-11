/**
 * Your override file can then contain any custom code that modifies the original
 * file. In this case, a prompt was added so the user can confirm that they do
 * indeed wish to submit their review.
 */
define([
    'jquery',
    'mage/translate'
], function ($, $t) {
    'use strict';

    return function (config, element) {
        $(element).on('submit', function (e) {
            if ($(this).valid()) {
                if (confirm($t('Are you sure you want to submit a review?'))) {
                    $(this).find('.submit').attr('disabled', true);
                } else {
                    e.preventDefault();
                }
            }
        });
    };
});
