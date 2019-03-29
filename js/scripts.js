/*
    Author:         Grigoris Chatzinicolaou
    Title:          4ty Settings Editor
    Description:    JSON web editor with auto-completion and snippets, specifically written for the settings of web
                    pages made in 4ty's CMS.
*/


var settingsJSON = '';


function initEditor() {
    // Initializes Ace editor with all the proper settings. Loads the settings snippets and attached the editor to
    // the #editor DOM element.

    var langTools = ace.require("ace/ext/language_tools");
    var snippetManager = ace.require("ace/snippets").snippetManager;
    snippetManager.register(settingsSnippets, "json");
    var editor = ace.edit("editor");

    editor.setOptions({
        mode: "ace/mode/json",
        showPrintMargin: false,
        showInvisibles: false,
        fontSize: '16px',
        theme: "ace/theme/chrome",
        tooltipFollowsMouse: true,
        newLineMode: "unix",
        useSoftTabs: true,
        tabSize: 4,
        wrap: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
    });

    editor.setValue(settingsJSON);

    editor.focus();

    // Copy to clipboard
    $('#btn-copy').on('click', function(e) {
        navigator.clipboard.writeText(editor.getValue());
        toastr.success('Settings copied to the clipboard.');
    });
}


$(document).ready(function() {
    toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
    };
    initEditor();
});
