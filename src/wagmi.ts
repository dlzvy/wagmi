import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { allChains } from './config/chains'

export const config = getDefaultConfig({
  appName: 'RainbowKit Demo',
  projectId: 'YOUR_PROJECT_ID', // Get one at https://cloud.walletconnect.com
  chains: allChains,
  ssr: false,
})