require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const postsRouter = require('./routers/posts');

app.use(express.static('public/images'));

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1><h1>I miei <a href="http://localhost:3000/posts">Post</a></h1><style>body{background-color: black; color: white;} a{text-decoration: none; color: white;}</style>');
});

app.use('/posts', postsRouter);


app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});