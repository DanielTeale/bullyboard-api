const express = require("express");
const exphbs = require("express-handlebars");
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const passport = require('./config/passport');
const morgan = require("morgan");
const app = express();
const {postSchema, root} = require('./database/graphql/post_graphql')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: 'localhost:19000'
  })
);

app.use(morgan("combined"));

app.use(require("./routes"));

app.use('/graphql', graphqlHTTP({
  schema: postSchema,
  rootValue: root,
  graphiql: true
}))

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;