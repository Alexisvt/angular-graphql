import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import resolvers from './resolvers';
import { typeDefs } from './schemas';

const url = 'mongodb://0.0.0.0:27017/graphqlserver';

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', _ => {
  console.log('MongoDB database connection established successfully');
});

db.on('error', err => {
  console.error(err);
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/play',
  },
  cors: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
