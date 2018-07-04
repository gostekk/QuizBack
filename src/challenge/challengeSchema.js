import {
  addMockFunctionsToSchema,
  makeExecutableSchema,
} from 'apollo-server-express';
import {
  challengeType,
  challengeQuery,
  challengeMutation,
  challengeSubscription,
} from './schema';

const challengeSchema = makeExecutableSchema({
  typeDefs: [
    challengeType,
    challengeQuery,
    challengeMutation,
    challengeSubscription,
  ],
});

addMockFunctionsToSchema({ schema: challengeSchema });

export { challengeSchema };
