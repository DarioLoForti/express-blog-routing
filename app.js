require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);


app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});