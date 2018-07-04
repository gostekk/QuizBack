import { gql } from 'apollo-server-express';

const challengeQuery = gql`
  type Query {
    challenges: [Challenge]
  }
`;

export { challengeQuery };
