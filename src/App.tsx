import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
} from '@rainbow-me/rainbowkit';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-white tracking-tight">
                  Connect Your Wallet
                </h1>
                <p className="text-xl text-gray-400 font-medium">
                  Get started by connecting your preferred wallet
                </p>
              </div>
              <div className="flex justify-center">
                <ConnectButton />
              </div>
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;