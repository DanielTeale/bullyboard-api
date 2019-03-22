const express = require('express');
const router = express.Router();
const passport = require('passport');
const PostController = require('../controllers/PostController');

router.get('/', PostController.index);
router.get('/:id', PostController.show);
router.post('/', passport.authenticate("jwt", { session: false }), PostController.create);
router.patch('/:id', passport.authenticate("jwt", { session: false }), PostController.update);
router.put('/:id', passport.authenticate("jwt", { session: false }), PostController.update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), PostController.destroy);

module.exports = router;