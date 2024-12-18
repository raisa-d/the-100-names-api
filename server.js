const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const characters = {
    'clarke': {
        'name': 'clarke griffin',
        'clanAffiliation': ['Skaikru', 'Wonkru', 'Finalkru'],
        'aliases': [
            'Wanheda', 
            'Princess', 
            'Klark kom Skaikru', 
            'Fleimkepa',
            'Mountain Slayer'
        ]
    },
    'octavia': {
        'name': 'Octavia Blake',
        'clanAffiliation': ['Skaikru', 'Trikru', 'Wonkru', 'Finalkru'],
        'aliases': [
            'Blodreina',
            'Skairipa',
            'Osleya',
            'Girl Under the Floor',
            'Oktevia kom Skaikru',
            'Oktevia kom Trikru',
            'Queen of the Cannibals'
        ]
    },
    'raven': {
        'name': 'Raven Reyes',
        'clanAffiliation': ['Skaikru', 'Spacekru', 'Wonkru', 'Finalkru'],
        'aliases': ['N/A']
    },
    'john' : {
        'name': 'John Murphy',
        'clanAffiliation': ['Skaikru', 'Spacekru', 'Finalkru'],
        'aliases': ['Murphy', 'Fleimkepa', 'Cockroach']
    },
    'bellamy': {
        'name': 'Bellamy Blake',
        'clanAffiliation': ['Skaikru', 
            'Spacekru', 'Wonkru'],
        'aliases': ['N/A']
    },
    'monty': {
        'name': 'Monty Green',
        'clanAffiliation': ['Skaikru', 'Spacekru'],
        'aliases': ['N/A']
    },
    'jasper': {
        'name': 'Jasper Jordan',
        'clanAffiliation': ['Skaikru'],
        'aliases': ['N/A']
    },
    'harper': {
        'name': 'Harper McIntyre',
        'clanAffiliation': ['Skaikru', 'Spacekru', 'Wonkru'],
        'aliases': ['N/A']
    },
    'finn': {
        'name': 'Finn Collins',
        'clanAffiliation': ['Skaikru'],
        'aliases': ['Spacewalker']
    },
    'emori': {
        'name': 'Emori',
        'clanAffiliation': ['Spacekru', 'Wonkru', 'Finalkru'],
        'aliases': ['N/A']
    },
    'echo': {
        'name': 'Echo',
        'clanAffiliation': ['Spacekru', 'Wonkru', 'Finalkru'],
        'aliases': ['Ash', 'Spy', 'Echo kom Azgedakru', 'Ash kom Azgedakru']
    },
    'roan': {
        'name': 'Roan kom Azgedakru',
        'clanAffiliation': ['Azgeda'],
        'aliases': ['Prince Roan', 'King Roan', 'Haihefa']
    },
    'indra': {
        'name': 'Indra',
        'clanAffiliation': ['Trikru', 'Wonkru', 'Finalkru'],
        'aliases': ['Indra kom Trikru', 'Wormana', 'Seda', 'Seya']
    },
    'gaia': {
        'name': 'Gaia',
        'clanAffiliation': ['Trikru', 'Wonkru', 'Finalkru'],
        'aliases': ['Gaia kom Trikru', 'Fleimkepa']
    },
    'jordan': {
        'name': 'Jordan Jasper Green',
        'clanAffiliation': ['Wonkru', 'Finalkru'],
        'aliases': ['N/A']
    },
    'lexa': {
        'name': 'Lexa',
        'clanAffiliation': ['Trikru'],
        'aliases': ['Heda', 'Leksa kom Trikru', 'Commander of the Blood']
    },
    'abby': {
        'name': 'Abby Griffin',
        'clanAffiliation': ['Skaikru', 'Wonkru'],
        'aliases': ['Dr. Griffin','Chancellor Griffin', 'The Cannibal Doctor']
    },
    'marcus': {
        'name': 'Marcus Kane',
        'clanAffiliation': ['Skaikru', 'Wonkru'],
        'aliases': ['Kane', 'Chancellor Kane', 'Marcus kom Skaikru', 'Ambassador']
    },
    'thelonius': {
        'name': 'Thelonius Jaha',
        'clanAffiliation': ['Skaikru', 'Wonkru'],
        'aliases': ['Jaha', 'Chancellor Jaha', 'Bringer of the Key']
    },
    'lincoln': {
        'name': 'Lincoln',
        'clanAffiliation': ['Trikru'],
        'aliases': ['The Grounder', 'The Reaper', 'Linkon kom Trikru']
    },
    'wells': {
        'name': 'Wells Jaha',
        'clanAffiliation': ['Skaikru'],
        'aliases': ['Prince', 'Chancellor of Earth']
    },
};

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/api', (req, res) => {
    res.json(characters);
});

app.get('/api/:name', (req, res) => {
    const characterName = req.params.name.toLowerCase();
    if(characters[characterName]) {
        res.json([characters[characterName]]);
    } else {
        res.status(404).send({ message: "We couldn't find that character in our system." }); 
    };
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, better go catch it!`);
});