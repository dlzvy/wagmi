import { ethereumChains } from './ethereum'
import { layer2Chains } from './layer2'
import { alternativeChains } from './alternative'
import { testnetChains } from './testnet'

// Combine all chains
export const allChains = [
  ...ethereumChains,
  ...layer2Chains,
  ...alternativeChains,
  ...testnetChains
]

// Export individual chain groups for flexibility
export {
  ethereumChains,
  layer2Chains,
  alternativeChains,
  testnetChains
}