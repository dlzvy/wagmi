import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';

const queryClient = new QueryClient();

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <RainbowKitProvider theme={theme === 'dark' ? darkTheme() : lightTheme()}>
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === 'light' ? 'bg-white' : 'bg-black'
      }`}>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className={`text-5xl font-bold tracking-tight transition-colors duration-300 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              Connect Your Wallet
            </h1>
            <p className={`text-xl font-medium transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Get started by connecting your preferred wallet
            </p>
          </div>
          
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </RainbowKitProvider>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;