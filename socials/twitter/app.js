const Twit = require('twit');

const T = new Twit({
    consumer_key: 'Poa90BHyIPPs7GwgJdgVYklSt',
    consumer_secret: 'fu5mWNERSyCBeVIvUl9WOncAGXmv7aZ5zOFWhy77pymrwL18py',
    access_token: '1566078241089228806-Hh2SKT7ZxL5a9ZAeBjDOELOEWCTGf5',
    access_token_secret: 'lYpchJQwrqFCZYzb6tov5OIZvKjI2QkbXsxbBLNB0quh3',
});

const tweetText = 'Bonjour, ceci est un tweet envoyé via JavaScript!';

T.post('statuses/update', { status: tweetText }, (err, data, response) => {
    if (err) {
        console.error('Erreur lors de l\'envoi du tweet :', err);
    } else {
        console.log('Tweet envoyé avec succès :', data.text);
    }
});
