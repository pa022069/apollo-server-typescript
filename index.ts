import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const API_PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function start() {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({
      headers: req.headers,
      token: req.headers.authorization || "",
    }),
    listen: {
      port: API_PORT,
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
start();
