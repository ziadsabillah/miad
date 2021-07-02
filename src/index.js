import 'dotenv/config';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';


const app = express();

app.use(cors());


let users = {
  1: {
    id: '1',
    username: 'Ziad Sabillah',
  },
  2: {
    id: '2',
    username: 'David Davids'
  }
}

const me = users[1];


const schema = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return Object.values(users)
    },
    user: (parent, { id }) => {
      return users[id]
    },
    me: () => {
      return me;
    }
  }
}


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql'});

app.listen({port: 8000}, () => {
  console.log('Apollo Server started on http://localhost:8000/graphql');
});


const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
