const express = require('express');

const app = express();

app.get('/api/movies', (req, res) => {
    const movies = [
        {id: 1, name: 'Hahaha I', genre: "Comedy"},
        {id: 2, name: 'Hahaha II', genre: "Comedy"},
        {id: 3, name: 'Guns N Explosions', genre: "Action"},
        {id: 4, name: 'Girls Laughing About Boys', genre: "Romantic Comedy"},
        {id: 5, name: 'Normal People Would Survive', genre: "Horror"},
        {id: 6, name: 'Sean Bean Dies', genre: "Non-Fiction"},
        {id: 7, name: 'Who Honestly Cares', genre: "Romance"},
        {id: 8, name: 'Kung Fu Fighting', genre: "Action"},
    ];

    res.json(movies);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
