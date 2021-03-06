const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products, reviews } = require("./db");

const database = require('./config/config.json');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Category,
      Product,
    },
    context: {
      categories, 
      products,
      reviews,
    },
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});