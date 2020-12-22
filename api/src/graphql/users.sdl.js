export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    posts: [Post]!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    name: String
    email: String!
  }

  input UpdateUserInput {
    name: String
    email: String
  }
`
