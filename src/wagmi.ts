import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'RainbowKit Demo',
  projectId: 'YOUR_PROJECT_ID', // Get one at https://cloud.walletconnect.com
  chains: [mainnet, sepolia],
  ssr: false,
})