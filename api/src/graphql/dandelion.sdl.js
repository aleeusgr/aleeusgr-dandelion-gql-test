export const schema = gql`
  type Cardano {
    address: String!
  }

  type Query {
    getSome(address: String!): Cardano! @skipAuth
  }
`
