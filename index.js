const express = require("express")
const  {ApolloServer} = require("apollo-server-express");
const {resolvers} = require("./data/resolvers.graphql");
const {typeDefs} = require("./data/schema.graphql");
const PORT =  require("./config/config");

/**
 * Create an Apollo server instance.
 */
const server = new ApolloServer({ typeDefs, resolvers });

/**
 * Create an express server and apply the Apollo Server middleware
 */
const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () => {
    console.log(
      `Server is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});

app.get("/", (req, res) => {
  console.log("Apollo GraphQL Express server is ready");
});