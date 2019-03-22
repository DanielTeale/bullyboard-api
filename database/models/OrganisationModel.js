const mongoose = require('mongoose');
const OrganisationSchema = require('../schemas/OrganisationSchema')

const OrganisationModel = mongoose.model("Organisation", OrganisationSchema);

module.exports = OrganisationModel;
