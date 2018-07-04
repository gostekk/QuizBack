import { gql } from 'apollo-server-express';

const categoryQuery = gql`
  type Query {
    categories: [Category]
  }
`;

export { categoryQuery };
