const posts = require('../posts');

const index = (req, res) => {
  let postList = '<ul>';
  posts.forEach(post => {
    postList += `<li>${post.title}</li>`;
  });
  postList += '</ul>';
  res.send(postList);
};

const show = (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
};

const create = (req, res) => {
  if (req.accepts('html')) {
    res.send('<h1>Creazione nuovo post</h1>');
  } else {
    res.status(406).send('Not Acceptable');
  }
};

const download = (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (post) {
    const imagePath = `${__dirname}/../public/images/${post.image}`;
    res.download(imagePath);
  } else {
    res.status(404).send('Image not found');
  }
};

module.exports = {
  index,
  show,
  create,
  download,
};
