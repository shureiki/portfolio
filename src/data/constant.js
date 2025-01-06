export const TAG_TYPES = {
    GAMES: {
        MCB: {
            name: 'Minecraft Bedrock',
            alias: [ 'MC', 'MCB' ],
            color: 'green'
        },
        MCJ: {
            name: 'Minecraft Java',
            alias: [ 'MC', 'MCJ' ]
        },
        UT: {
            name: 'Undertale',
            alias: [ 'UT' ]
        }
    },

    TECHNO: {
        HTML: 'HTML',
        GDS: 'GDScript',
        CSS: 'CSS',
        PY: {
            name: 'Python',
            alias: ['Py']
        },
        JS: {
            name: 'JavaScript',
            alias: ['js']
        },
        CPP: {
            name: 'C++',
            alias: ['cpp']
        },
        CS: {
            name: 'C#',
            alias: [ 'cs', 'csharp']
        },
        React: 'React',
        NReact: {
            name: 'React-Native',
            alias: ['nreact']
        },
        JSON: 'JSON',
        API: 'API'
    },

    PLATFORM: {
        PC: 'Jeu PC',
        PHONE: 'Jeu Téléphone',
        CONSOLE: 'Jeu Console'
    },

    STATE: {
        WIP: {
            name: 'W.I.P',
            alias: ['wip']
        }
    },

    MC: {
        ADDON: 'Add-on',
        BP: {
            name: 'Pack de comportement',
            alias: ['BP']
        },
        RP: {
            name: 'Pack de ressource',
            alias: ['RP'],
        }
    }
};

export default {
    TAG_TYPES
}