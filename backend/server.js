import { ApolloServer, gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    announcement: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    announcement: () =>
      `Say hello to the new Apollo Server! A production ready GraphQL server with an incredible getting started experience.`
  }
};

const server = new ApolloServer({
  typeDefs, resolvers, playground: {
    endpoint: '/play'
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});