import { Challenge } from './challengeModel';

const challengeController = {
  categoryChallenges: challengeID => Challenge.find({ category: challengeID }),
  challenges: () => Challenge.find({}),
  addChallenge: challenge => {
    const newChallenge = new Challenge({
      description: challenge.description,
      category: challenge.category,
    });
    return newChallenge.save();
  },
};

export { challengeController };
