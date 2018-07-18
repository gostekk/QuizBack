# QuizBack [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/gostekk/QuizBack/blob/master/LICENSE) 

Backend side for apollo/graphQL application project

## graphQL

### Type
Category {
_id: ID!
name: String
challenges: [Challenge]
}

Challenge {
_id: ID
description: String
category: Category
}

### Query
categories: [Category]

challenges: [Challenge]

### Mutation
addCategory(name: String): Category

addChallenge(description: String, category: ID): Challenge

### Subscription
categoryAdded: Category

challengeAdded: Challenge

## License
QuizBack is [MIT licensed](https://github.com/gostekk/QuizBack/blob/master/LICENSE).
