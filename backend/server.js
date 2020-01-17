import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import { typeDefs } from './schemas';

// Provide resolver functions for your schema fields


const server = new ApolloServer({
  typeDefs, resolvers, playground: {
    endpoint: '/play'
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});