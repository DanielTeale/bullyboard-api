const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
  name: String
});

module.exports = OrganisationSchema; 