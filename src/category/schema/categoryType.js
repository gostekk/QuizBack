import { gql } from 'apollo-server-express';

const categoryType = gql`
  type Category {
    _id: ID!
    name: String
    challenges: [Challenge]
  }
  type Challenge {
    _id: ID
    description: String
    category: Category
  }
`;

export { categoryType };
