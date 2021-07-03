import { gql } from 'apollo-server-express';

export default gql`
type Query {
    users: [User!]
    me: User
    user(id: ID!): User
    
    messages: [Message!]!
    message(id: ID!): Message!
  }

  type User {
    id: ID!
    username: String!
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }

  type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }
`;