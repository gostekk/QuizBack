import { gql } from 'apollo-server-express';

const challengeMutation = gql`
  type Mutation {
    addChallenge(description: String, category: ID): Challenge
  }
`;

export { challengeMutation };
