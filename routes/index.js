const express = require("express");
const router = express.Router();
const PostRoutes = require('./PostRoutes');
const AuthRoutes = require('./AuthRoutes');
const OrganisationRoutes = require('./OrganisationRoutes');

router.get("/", (req, res) => res.send("Welcome"));

router.use('/post', PostRoutes);

router.use("/auth", AuthRoutes);

router.use("/organisation", OrganisationRoutes);

module.exports = router;