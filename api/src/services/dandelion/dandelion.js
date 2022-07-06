import { fetch } from 'cross-undici-fetch'

export const getSome = async ({ address }) => {
  const response = await fetch(
    `https://d.graphql-api.testnet.dandelion.link/`
  )
  const json = await response.json()

  return {
    address: JSON.stringify(json)
  }
}
