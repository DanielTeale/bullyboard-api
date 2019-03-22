const OrganisationModel = require('../database/models/OrganisationModel');

async function index(req, res) {
  try {
    const organisations = await OrganisationModel.find();
    return res.json(organisations)
  } catch (err) {
    return res.send(err);
  }
};

async function show(req, res) {
  const {id} = req.body;
  try {
    const organisation = await OrganisationModel.findById(id);
    return res.json(organisation);
  } catch (err) {
    return res.send(err)
  }
};

async function create(req, res) {
  const {name} = req.body;
  try {
    const organisation = new OrganisationModel({
      name: name
    });
    await organisation.save();
    return res.json(organisation);
  } catch (err) {
    return res.send(err);
  }
};

async function update(req, res) {
  const {name} = req.body;
  const {id} = req.params;
  try {
    const organisation = await OrganisationModel.findById(id);
    organisation.name = name;
    await organisation.save();
    return res.json(organisation);
  } catch (err) {
    return res.send(err);
  };
};

async function destroy(req, res) {
  const {id} = req.params;
  try {
    await OrganisationModel.findByIdAndDelete(id);
    return res.send('Success');
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};