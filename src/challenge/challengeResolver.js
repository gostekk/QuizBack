import { pubsub } from '../server';
import { challengeController } from './challengeController';
import { categoryController } from '../category/categoryController';

const CHALLENGE_ADDED = 'CHALLENGE_ADDED';

const challengeResolver = {
  Subscription: {
    challengeAdded: {
      subscribe: () => pubsub.asyncIterator([CHALLENGE_ADDED]),
    },
  },
  Query: {
    challenges: () => {
      return challengeController.challenges();
    },
  },
  Mutation: {
    addChallenge(root, args) {
      return challengeController.addChallenge(args);
    },
  },
  Challenge: {
    category(challenge) {
      return categoryController.category(challenge.category);
    },
  },
};

export { challengeResolver };
