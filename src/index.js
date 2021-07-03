import 'dotenv/config';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

import { v4 as uuidv4 } from 'uuid';

import schema from './schema'
import models from './models'
import resolvers from './resolvers'


const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1],
  }
});

server.applyMiddleware({ app, path: '/graphql'});

app.listen({port: 8000}, () => {
  console.log('Apollo Server started on http://localhost:8000/graphql');
});
