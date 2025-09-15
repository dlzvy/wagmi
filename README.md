# Wagmi Wallet Integration - Open Source

An open source template for Web3 wallet integration using Wagmi, RainbowKit, and React + TypeScript. This project is free to use by any developer to build Web3 applications.

## Features

- Multi-Wallet Support - Supports various popular wallets (MetaMask, WalletConnect, Coinbase, etc)
- Multi-Chain - Support for Ethereum, Polygon, Arbitrum, Optimism, BSC, and many more
- Theme Toggle - Light/Dark mode with smooth transitions
- Responsive Design - Works perfectly on desktop and mobile
- Auto Save Theme - Theme preference saved in localStorage
- Modern Stack - React 18, TypeScript, Vite, Tailwind CSS

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi v2 + RainbowKit
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## Quick Start

```bash
# Clone repository
git clone <your-repo-url>
cd wagmi-wallet-integration

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ThemeToggle.tsx  # Theme switcher component
│   └── WalletConnect.tsx # Wallet connection component
├── config/              # Configuration files
│   └── chains/          # Blockchain network configs
│       ├── ethereum.ts
│       ├── layer2.ts
│       ├── alternative.ts
│       └── testnet.ts
├── hooks/               # Custom React hooks
│   └── useTheme.ts      # Theme management hook
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── wagmi.ts             # Wagmi configuration
└── index.css            # Global styles
```

## Configuration

### 1. Setup WalletConnect Project ID

Edit `src/wagmi.ts` and replace `YOUR_PROJECT_ID` with your project ID from [WalletConnect Cloud](https://cloud.walletconnect.com):

```typescript
export const config = getDefaultConfig({
  appName: 'Your App Name',
  projectId: 'YOUR_ACTUAL_PROJECT_ID', // Replace this
  chains: allChains,
  ssr: false,
})
```

### 2. Customize Supported Chains

Edit files in `src/config/chains/` to add/remove supported blockchains:

- `ethereum.ts` - Ethereum mainnet
- `layer2.ts` - Layer 2 networks (Polygon, Arbitrum, etc)
- `alternative.ts` - Alternative chains (BSC, Avalanche, etc)  
- `testnet.ts` - Test networks

### 3. Customize Styling

- Edit `tailwind.config.js` for custom theme
- Modify `src/index.css` for global styles
- Update component styles in respective files

## Theme System

This project uses a flexible theme system:

```typescript
// Hook for theme management
const { theme, toggleTheme } = useTheme();

// Theme automatically saved in localStorage
// Supports 'light' and 'dark' mode
```

## Supported Wallets

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- Trust Wallet
- And many more via RainbowKit

## Supported Networks

### Mainnet
- Ethereum
- Polygon
- Arbitrum
- Optimism
- Base
- BSC
- Avalanche
- Fantom

### Testnet
- Sepolia
- Goerli
- Mumbai

## License

**MIT License** - Free to use for commercial and non-commercial projects.

## Contributing

Contributions are welcome! Please:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## Usage Examples

### Basic Wallet Connection
```typescript
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function MyComponent() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  
  // Your wallet logic here
}
```

### Theme Integration
```typescript
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

## Support

If you have questions or need help:

1. Open an issue on GitHub repository
2. Check documentation for [Wagmi](https://wagmi.sh) and [RainbowKit](https://rainbowkit.com)
3. Join Web3 developer communities

## Credits

Built with:
- [Wagmi](https://wagmi.sh) - React Hooks for Ethereum
- [RainbowKit](https://rainbowkit.com) - Best wallet connection experience
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

**Happy Coding!**

*Feel free to star this repository if it helps your project!*