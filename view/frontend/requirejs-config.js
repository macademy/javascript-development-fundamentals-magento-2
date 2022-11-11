/*
The "*" in the "map" prop makes the alias available to all JavaScript components.
The format for aliases is: "alias": "<Vendor_Module>/js/filename"

The area can either be "base", "frontend", or "adminhtml".

<Vendor_Module>/js/filename
maps to ->
<Vendor>/<Module>/view/<area>/web/js/filename.js

Paths can be used for non-AMD JavaScript modules & external files, just be sure
to not include the ".js" extension as this is automatically appended.

You can set a path value to an array, and define multiple script sources.
If the first script fails to load, the next one will be used as a fallback.

Shims are used to define relationships. By defining a shim, mapping
"jquery-log" to "jquery", we can be sure jQuery loads before the plugin.

Defining a file under "deps" ensures it loads on every single page. This
is generally an anti-pattern, as explicit dependency loading is preferred.

Use "map" to easily override any other JavaScript component. The asterisk
tells Magento to override this file for all RequireJS modules, and the
convention is "FileToOverride": "FileThatOverrides" using RequireJS notation.

Mixins are specific to Magento and not part of the standard RequireJS spec,
which is why Magento nests these within a child "config" property. These are
used when you'd like to "extend" the original JavaScript component, rather
than override it. This includes adding, updating or removing specific
functions of the original object.

Similar to other RequireJS implementations, this works by defining the
original object you'd like to modify in the shorthand notation, and then
assigning it to a child property of the JavaScript component you are extending
it with, and setting that property to true.
*/
var config = {
    "map": {
        "*": {
            "fadeInElement": "Macademy_JsFun/js/fade-in-element",
            "Magento_Review/js/submit-review": "Macademy_JsFun/js/submit-review"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue/dist/vue",
            "Macademy_JsFun/js/vue"
        ]
    },
    "shim": {
        "Macademy_JsFun/js/jquery-log": ["jquery"]
    },
    "deps": ["Macademy_JsFun/js/every-page"],
    "config": {
        "mixins": {
            "Magento_Ui/js/view/messages": {
                "Macademy_JsFun/js/messages-mixin": true
            }
        }
    }
};
