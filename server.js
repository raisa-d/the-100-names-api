const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const characters = {
    'clarke': {
        'birthName': 'clarke griffin',
        'clanAffiliation': ['Skaikru', 'Wonkru', 'Finalkru'],
        'nicknames': [
            'Wanheda', 
            'Princess', 
            'Klark kom Skaikru', 
            'Fleimkepa',
            'Mountain Slayer'
        ]
    },
    'octavia': {
        'birthName': 'Octavia Blake',
        'clanAffiliation': ['Skaikru', 'Trikru', 'Wonkru', 'Finalkru'],
        'nicknames': [
            'Blodreina',
            'Skairipa',
            'Osleya',
            'Girl Under the Floor',
            'Oktevia kom Skaikru',
            'Oktevia kom Trikru'
        ]
    },
    'raven': {
        'birthName': 'Raven Reyes',
        'clanAffiliation': ['Skaikru', 'Spacekru', 'Wonkru', 'Finalkru'],
        'nicknames': ['Reyes']
    },
    'john' : {
        'birthName': 'John Murphy',
        'clanAffiliation': ['Skaikru', 'Spacekru', 'Finalkru'],
        'nicknames': ['Murphy', 'Fleimkepa', 'Cockroach']
    }
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