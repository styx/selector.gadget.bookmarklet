window.addEventListener("load", function() {
    var theButton;
    var toolbar = opera.contexts.toolbar;
    var ToolbarUIItemProperties = {
        title: "Add to Google bookmarks",
        icon: "icons/sg-18.png",

        onclick: function() {
            var extension = window.opera.extension;
            var tab = extension.tabs.getFocused();

            if (tab) {
                tab.postMessage({type: 'load_selector_gadget', value: ''})
            }
        }

    };
    theButton = toolbar.createItem(ToolbarUIItemProperties);
    toolbar.addItem(theButton);
}, false);
