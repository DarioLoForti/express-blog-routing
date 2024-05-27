require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});