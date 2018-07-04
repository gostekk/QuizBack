import {
  addMockFunctionsToSchema,
  makeExecutableSchema,
} from 'apollo-server-express';
import {
  categoryType,
  categoryQuery,
  categoryMutation,
  categorySubscription,
} from './schema';

const categorySchema = makeExecutableSchema({
  typeDefs: [
    categoryType,
    categoryQuery,
    categoryMutation,
    categorySubscription,
  ],
});

addMockFunctionsToSchema({ schema: categorySchema });

export { categorySchema };
