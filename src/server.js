import './env';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer, PubSub, mergeSchemas } from 'apollo-server-express';

import schemas from './schema';
import resolvers from './resolvers';

export const pubsub = new PubSub();

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => console.log(err));

const schema = mergeSchemas({
  schemas,
  resolvers,
});

const app = express();

const server = new ApolloServer({
  schema,

  tracing: true,
  cacheControl: true,
  engine: false,
});

server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});

engine.listen(
  {
    port: process.env.PORT,
    graphqlPaths: ['/graphql'],
    expressApp: app,
    launcherOptions: {
      startupTimeout: 3000,
    },
  },
  () => {
    console.log('Listening!');
  },
);
