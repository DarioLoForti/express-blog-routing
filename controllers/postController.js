const path = require('path');
const posts = require('../db.js');

const index = (req, res) => {
  let html = '<main>';
                posts.forEach((post) => {
                    html += `
                    <article>
                    <h2><a href="/posts/${post.slug}">${post.title}</a></h2>
                        <img width="500" src="/${post.image}" alt="${post.title}">
                        <p>${post.content}</p>
                        <h4>Tags:</h4>
                        <ul>`;
                    post.tags.forEach(tag => {
                        html += `<li>${tag}</li>`;
                    });
                    html += `</ul>
                    </article> `;
                });
                html += '</main> <style>body{background-color: black; color: white;} p{font-size: 20px;}a{text-decoration: none; color: white;}</style> ';
                res.send(html);
};

const show = (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (post) {
    const postWithUrls = {
      ...post,
      image_url: `http://${req.headers.host}/${post.image}`,
      image_download_url: `http://${req.headers.host}/posts/${post.slug}/download`
    };
    res.json(postWithUrls);
  } else {
    res.status(404).send('Post not found');
  }
};

const create = (req, res) => {
  res.format({
    'text/html': function () {
      res.send('<h1>Creazione nuovo post</h1>');
    },
    'default': function () {
      res.status(406).send('Not Acceptable');
    }
  });
};

const download = (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (post) {
    const imagePath = path.join(__dirname, '../public/images', post.image);
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
