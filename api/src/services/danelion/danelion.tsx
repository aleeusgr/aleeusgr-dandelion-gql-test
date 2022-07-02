import { fetch } from 'cross-undici-fetch'

export const getUtxos = async ({ address }) => {
  const response = await fetch(
    `https://d.graphql-api.testnet.dandelion.link/`
  )
  const json = await response.json()

  return {
    
  }
}
