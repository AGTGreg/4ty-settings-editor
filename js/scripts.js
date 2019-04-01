/*
    Author:         Grigoris Chatzinicolaou
    Title:          4ty Settings Editor
    Description:    JSON web editor with auto-completion and snippets, specifically written for the settings of web
                    pages made in 4ty's CMS.
*/


var currentSettings = {
    name: '',
    content: ''
};
var filenamePreffix = 'savedSetting__';


function storageAvailable() {
    // Check if our browser supports the localStorage object.
    var storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        toastr.error('Your browser does not support the saving functionallity.');
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


var storageManager = {
    // This is a set of functions for loading and saving Settings Files in the local storage.
    init: function() {
        if (storageAvailable()) {
            // Get the saved settings from local storage or init a new object.
            var st = window.localStorage;
            for (var ssName in st) {
                if (ssName.startsWith(filenamePreffix) && st.hasOwnProperty(ssName)) {
                    console.log(ssName);
                    ssName = ssName.replace(filenamePreffix, '');
                    $('#saved-settings').append('<option>'+ssName+'</option>');
                }
            }
            console.log(st);
        } else {
            $('#btn-save, #btn-delete').addClass('disabled');
        }
        return false;
    },
    nameExists: function(filename) {
        if (storageAvailable()) {
            var st = window.localStorage;
            for (var ssName in st) {
                if (ssName == filename) return true;
            }
        }
        return false
    },
    save: function() {
        if (currentSettings.name.length > 0) {
            if (storageAvailable()) {
                var st = window.localStorage;
                if (st) {
                    var filename = filenamePreffix + currentSettings.name;
                    st.setItem(filename, currentSettings.content);
                    toastr.success('Settings saved.');
                    return true;
                }
            }
        }
        return false;
    },
    load: function(filename) {
        if (storageAvailable()) {
            var st = window.localStorage;
            if (st) {
                filenameWithPrefix = filenamePreffix + filename;
                currentSettings.name = filename;
                currentSettings.content = st.getItem(filenameWithPrefix);
                return currentSettings;
            }
        }
        return false;
    },
    delete: function() {
        if (storageAvailable()) {
            var st = window.localStorage;
            if (st) {
                filename = filenamePreffix + currentSettings.name;
                st.removeItem(filename);
                toastr.success('Deleted ' + filename);
                return true;
            }
        }
        return false;
    }
}


function saveSettings() {

}


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

    editor.setValue(currentSettings.content);
    editor.focus();

    // Actions ---------------------------------------------------------------------------------------------------------
    // Load a settings file
    $('#saved-settings').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        console.log($('#saved-settings').val());
        var savedSettings = storageManager.load($('#saved-settings').val());
        if (savedSettings) {
            editor.setValue(currentSettings.content);
            editor.focus();
            $('#btn-delete').removeClass('disabled');
        }
    });

    // Save to local storage
    $('#btn-save').on('click', function(e) {
        if ($('#btn-save').hasClass('disabled') === false) {
            function getNewName() {
                newFilename = prompt("Save settings as: ");
                if (window.localStorage.hasOwnProperty(filenamePreffix + newFilename) === true) {
                    var saveConf = confirm('Save over ' + newFilename + '?');
                    if (saveConf === false) getNewName();
                }
                return newFilename;
            }

            if (currentSettings.name.length <= 0) {
                var newName = getNewName();
                console.log(newName);
                if (newName && newName.length > 0) {
                    currentSettings.name = newName;
                    currentSettings.content = editor.getValue();
                    if (storageManager.save()) {
                        // Update the savedSettings dropdown
                        var nameExists = false;
                        $('#saved-settings > option').each(function() {
                            if ($(this).text() == currentSettings.name) {
                                nameExists = true;
                            }
                        });
                        if (nameExists === false) {
                            $('#saved-settings').append('<option>'+currentSettings.name+'</option>');
                        }
                        $('#saved-settings').val(currentSettings.name);
                        $('#saved-settings').selectpicker('refresh');
                        $('#btn-delete').removeClass('disabled');
                    }

                } else {
                    toastr.error('Invalid name.');
                }
            } else {
                currentSettings.content = editor.getValue();
                storageManager.save();
            }
        }
    });

    // Delete from local storage
    $('#btn-delete').on('click', function(e) {
        if ($('#btn-delete').hasClass('disabled') === false) {
            var delConf = window.confirm('Are you sure?');
            if (delConf === true) {
                if (storageManager.delete()) {
                    // Update the savedSettings dropdown
                    $('#saved-settings > option').each(function() {
                        if ($(this).text() == currentSettings.name) {
                            $(this).remove();
                            $('#saved-settings').val('');
                            $('#saved-settings').selectpicker('refresh');
                        }
                    });
                    currentSettings.name = '';
                    currentSettings.content = '';
                    editor.setValue(currentSettings.content);
                    editor.focus();
                }
            }
        }
    });

    // Create new settings file
    $('#btn-new:not(.disabled)').on('click', function(e) {
        if ($('#btn-new').hasClass('disabled') === false) {
            currentSettings.name = '';
            currentSettings.content = '';
            $('#saved-settings').val('');
            $('#saved-settings').selectpicker('refresh');
            $('#btn-delete').addClass('disabled');

            editor.setValue(currentSettings.content);
            editor.focus();
        }
    });

    // Copy to clipboard
    $('#btn-copy:not(.disabled)').on('click', function(e) {
        if ($('#btn-copy').hasClass('disabled') === false) {
            navigator.clipboard.writeText(editor.getValue());
            toastr.success('Settings copied to the clipboard.');
        }
    });
}


$(document).ready(function() {
    toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
    };
    storageManager.init();
    $.fn.selectpicker.Constructor.BootstrapVersion = '4';
    $('#saved-settings').selectpicker();
    initEditor();
});
