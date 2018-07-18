import { gql } from 'apollo-server-express';

const challengeSubscription = gql`
  type Subscription {
    challengeAdded: Challenge
  }
`;

export { challengeSubscription };
