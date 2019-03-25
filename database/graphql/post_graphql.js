const {buildSchema} = require('graphql');

const postSchema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return "Hello World"
  }
};

module.exports = {
  postSchema,
  root
}