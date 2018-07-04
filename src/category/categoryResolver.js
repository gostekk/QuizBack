import { pubsub } from '../server';
import { categoryController } from './categoryController';
import { challengeController } from '../challenge/challengeController';

const CATEGORY_ADDED = 'CATEGORY_ADDED';

const categoryResolver = {
  Subscription: {
    categoryAdded: {
      subscribe: () => pubsub.asyncIterator([CATEGORY_ADDED]),
    },
  },
  Query: {
    categories: () => {
      return categoryController.categories();
    },
  },
  Mutation: {
    addCategory(root, args) {
      return categoryController.addCategory(args);
    },
  },
  Category: {
    challenges(category) {
      return challengeController.categoryChallenges(category._id);
    },
  },
};

export { categoryResolver };
