const express = require('express');
const router = express.Router(); 
const passport = require('passport');
const OrganisationController = require('../controllers/OrganisationController');

router.get('/', OrganisationController.index);
router.get('/:id', OrganisationController.show);
router.post('/', passport.authenticate("jwt", { session: false }), OrganisationController.create);
router.patch('/:id', passport.authenticate("jwt", { session: false }), OrganisationController.update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), OrganisationController.destroy);

module.exports = router;