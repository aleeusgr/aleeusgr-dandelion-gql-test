export const schema = gql`
  type Cardano {
    address: String!
  }

  type Query {
    getWeather(address: String!): Weather! @skipAuth
  }
`
