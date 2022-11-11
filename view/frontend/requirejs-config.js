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
*/
var config = {
    "map": {
        "*": {
            "fadeInElement": "Macademy_JsFun/js/fade-in-element"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue/dist/vue",
            "Macademy_JsFun/js/vue"
        ]
    }
};
