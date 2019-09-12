var settingsSnippets = [
    {
        content:'\
"amea": {\n\
    "value": "true",\n\
    "pages": "global"\n\
}',
        name: "amea",
        tabTrigger: "a"
    },

    {
        content:'\
"color": {\n\
    "value": "demo",\n\
    "pages": "global"\n\
}',
        name: "color",
        tabTrigger: "c"
    },

    {
        content:'\
"url-1": {\n\
    "value": "http://google.com",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "url",
        tabTrigger: "u"
    },

    {
        content:'\
"urlNewTab-1": {\n\
    "value": "http://google.com",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "urlNewTab",
        tabTrigger: "u"
    },

    {
        content:'\
"highlight": {\n\
    "value": "true",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "highlight",
        tabTrigger: "h"
    },

    {
        content:'\
"hide": {\n\
    "value": "true",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "hide",
        tabTrigger: "h"
    },

    {
        content:'\
"hideHomeMap": {\n\
    "value": "true",\n\
    "pages": "global"\n\
}',
        name: "hideHomeMap",
        tabTrigger: "h"
    },

    {
        content:'\
"hideSubmenus": {\n\
    "value": "true",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "hideSubmenus",
        tabTrigger: "h"
    },

    {
        content:'\
"hideVisits": {\n\
    "value": "true",\n\
    "pages": "global"\n\
}',
        name: "hideVisits",
        tabTrigger: "h"
    },

    {
        content:'\
"hideCategory": {\n\
    "value": "true",\n\
    "pages": "global"\n\
}',
        name: "hideCategory",
        tabTrigger: "h"
    },

    {
        content:'\
"hideEmail": {\n\
    "value": "true",\n\
    "pages": "global"\n\
}',
        name: "hideEmail",
        tabTrigger: "h"
    },

    {
        content:'\
"headerBg-1": {\n\
    "value": "PATH_TO_IMAGE.jpg",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "headerBg",
        tabTrigger: "h"
    },

    {
        content:'\
"headerBgNoTitle-1": {\n\
    "value": "PATH_TO_IMAGE.jpg",\n\
    "pages": "/more.php?l=el"\n\
}',
        name: "headerBgNoTitle",
        tabTrigger: "h"
    },

    {
        content:'\
"headerText": {\n\
    "value": {\n\
        "phone": "2421030511",\n\
        "mobile": "6936578697",\n\
        "address": "Ελ. Βενιζέλου 43",\n\
        "email": "info@example.com"\n\
    },\n\
    "pages": "global"\n\
}',
        name: "headerText",
        tabTrigger: "h"
    },

    {
        content:'\
"pageBackground": {\n\
    "value": "#ffffff",\n\
    "pages": "global"\n\
}',
        name: "pageBackground",
        tabTrigger: "p"
    },

    {
        content:'\
"gMaps": {\n\
    "value": {\n\
        "place": "Abbey+Road+Zebra+Crossing",\n\
        "coords": "51.5319761,-0.1771827",\n\
        "zoom": "14"\n\
      },\n\
    "pages": "global"\n\
}',
        name: "gMaps",
        tabTrigger: "g"
    },

    {
        content:'\
"logoSize": {\n\
    "value": {\n\
        "width": "100px",\n\
        "height": "100px"\n\
    },\n\
    "pages": "global"\n\
}',
        name: "logoSize",
        tabTrigger: "l"
    },

    {
        content: '\
"mainMenu": {\n\
    "pages": "global",\n\
    "value": {\n\
        "menu-1": {\n\
            "title": "Menu 1",\n\
            "url": "/"\n\
        },\n\
        "menu-2": {\n\
            "title": "Menu 2",\n\
            "url": "/"\n\
        }\n\
    }\n\
}',
        name: "mainMenu",
        tabTrigger: "m"
    },

    {
        content: '\
"menu-with-submenu": {\n\
    "title": "Menu with submenu",\n\
    "url": "/",\n\
    "dropdown": "true",\n\
    "subMenu" :{\n\
        "submenu-1": {\n\
            "title": "Sub Menu 1",\n\
            "url": "/more2.php"\n\
        },\n\
        "submenu-2": {\n\
            "title": "Sub Menu 2",\n\
            "url": "/more2.php"\n\
        }\n\
    }\n\
}',
        name: "submenu",
        tabTrigger: "subm"
    },

    {
        content: '\
"menu-with-settings": {\n\
    "title": "Menu with settings",\n\
    "url": "/",\n\
    "settings": {\n\
        "hide": "true"\n\
    }\n\
}',
        name: "settingsMenu",
        tabTrigger: "set"
    },

    {
        content: '\
"lang-menu": {\n\
    "title": "Language specific menu",\n\
    "url": "/",\n\
    "lang": "el, en"\n\
}',
        name: "languageSpecificMenu",
        tabTrigger: "lang"
    },

    {
        content: '\
"newTab-menu": {\n\
    "title": "NewTab menu",\n\
    "url": "/",\n\
    "target": "_blank"\n\
}',
        name: "newTabMenu",
        tabTrigger: "newT"
    },

    {
        content: '\
"iconLeft": {\n\
    "value": "PATH_TO_IMAGE.png",\n\
    "pages": "/more.php"\n\
}',
        name: "iconLeft",
        tabTrigger: "i"
    },

    {
        content: '\
"iconRight": {\n\
    "value": "PATH_TO_IMAGE.png",\n\
    "pages": "/more.php"\n\
}',
        name: "iconRight",
        tabTrigger: "i"
    },

    {
        content: '\
"iconTop": {\n\
    "value": "PATH_TO_IMAGE.png",\n\
    "pages": "/more.php"\n\
}',
        name: "iconTop",
        tabTrigger: "i"
    },

    {
        content: '\
"iconBottom": {\n\
    "value": "PATH_TO_IMAGE.png",\n\
    "pages": "/more.php"\n\
}',
        name: "iconBottom",
        tabTrigger: "i"
    },

    {
        content: '\
"iconFull": {\n\
    "value": "PATH_TO_IMAGE.png",\n\
    "pages": "/more.php"\n\
}',
        name: "iconFull",
        tabTrigger: "i"
    },

    {
        content: '\
removeMenu: {\n\
    "pages": "/more.php",\n\
    "value": "true"\n\
}',
        name: "removeMenu",
        tabTrigger: "r"
    },

    {
        content:'\
"fbMessaging": {\n\
    "value": "Facebook page URL",\n\
    "pages": "global"\n\
}',
        name: "fbMessaging",
        tabTrigger: "fb"
    },

    {
        content:'\
"defaultLanguage": {\n\
    "value": "en",\n\
    "pages": "global"\n\
}',
        name: "defaultLanguage",
        tabTrigger: "lang"
    },

    {
        content:'\
"replaceLanguage": {\n\
    "value": "en, fr",\n\
    "pages": "global"\n\
}',
        name: "replaceLanguage",
        tabTrigger: "lang"
    },

    {
        content:'\
"fixedBanner": {\n\
    "pages": "global",\n\
    "value": {\n\
        "title": "Title",\n\
        "text": "This is some sample text.",\n\
        "goTo": "https://google.com",\n\
        "backgroundColor": "#2d2d2d",\n\
        "backgroundImage": "",\n\
        "color": "#ffffff",\n\
        "position": "bottom right",\n\
        "innerImage": "",\n\
        "fullImage": "",\n\
        "link": {\n\
            "url": "https://google.com",\n\
            "text": "Go to Google",\n\
            "newTab": "true",\n\
            "classes": "btn button"\n\
        }\n\
    }\n\
}',
        name: "fixedBanner",
        tabTrigger: "banner"
    },
];
