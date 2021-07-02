import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';



const app = express();

const userCredentials = { firstname: 'Robin' };
const userDetails = { nationality: 'German' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
