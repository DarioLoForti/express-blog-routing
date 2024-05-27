const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/:slug', postController.show);
router.get('/create', postController.create);
router.get('/:slug/download', postController.download);

module.exports = router;
