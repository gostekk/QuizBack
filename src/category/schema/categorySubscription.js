import { gql } from 'apollo-server-express';

const categorySubscription = gql`
  type Subscription {
    categoryAdded: Category
  }
`;

export { categorySubscription };
