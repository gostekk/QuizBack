import { gql } from 'apollo-server-express';

const challengeType = gql`
  type Challenge {
    _id: ID!
    description: String!
    category: Category!
  }
  type Category {
    _id: ID!
    name: String
    challenges: [Challenge]
  }
`;

export { challengeType };
