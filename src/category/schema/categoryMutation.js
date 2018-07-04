import { gql } from 'apollo-server-express';

const categoryMutation = gql`
  type Mutation {
    addCategory(name: String): Category
  }
`;

export { categoryMutation };
