import mongoose from 'mongoose';

const ChallengeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
});

const Challenge = mongoose.model('challenges', ChallengeSchema);
export { Challenge };
