# 🚀 Wagmi Wallet Integration - Open Source

Sebuah template open source untuk integrasi wallet Web3 menggunakan Wagmi, RainbowKit, dan React + TypeScript. Project ini bebas digunakan oleh developer manapun untuk membangun aplikasi Web3.

## ✨ Features

- 🔗 **Multi-Wallet Support** - Mendukung berbagai wallet populer (MetaMask, WalletConnect, Coinbase, dll)
- 🌐 **Multi-Chain** - Support untuk Ethereum, Polygon, Arbitrum, Optimism, BSC, dan banyak lagi
- 🎨 **Theme Toggle** - Light/Dark mode dengan smooth transitions
- 📱 **Responsive Design** - Bekerja sempurna di desktop dan mobile
- 💾 **Auto Save Theme** - Theme preference tersimpan di localStorage
- ⚡ **Modern Stack** - React 18, TypeScript, Vite, Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi v2 + RainbowKit
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 🚀 Quick Start

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

## 📁 Project Structure

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

## ⚙️ Configuration

### 1. Setup WalletConnect Project ID

Edit `src/wagmi.ts` dan ganti `YOUR_PROJECT_ID` dengan project ID dari [WalletConnect Cloud](https://cloud.walletconnect.com):

```typescript
export const config = getDefaultConfig({
  appName: 'Your App Name',
  projectId: 'YOUR_ACTUAL_PROJECT_ID', // Ganti ini
  chains: allChains,
  ssr: false,
})
```

### 2. Customize Supported Chains

Edit file di `src/config/chains/` untuk menambah/mengurangi blockchain yang didukung:

- `ethereum.ts` - Ethereum mainnet
- `layer2.ts` - Layer 2 networks (Polygon, Arbitrum, dll)
- `alternative.ts` - Alternative chains (BSC, Avalanche, dll)  
- `testnet.ts` - Test networks

### 3. Customize Styling

- Edit `tailwind.config.js` untuk custom theme
- Modify `src/index.css` untuk global styles
- Update component styles di masing-masing file

## 🎨 Theme System

Project ini menggunakan sistem tema yang fleksibel:

```typescript
// Hook untuk theme management
const { theme, toggleTheme } = useTheme();

// Theme otomatis tersimpan di localStorage
// Mendukung 'light' dan 'dark' mode
```

## 🔗 Supported Wallets

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- Trust Wallet
- Dan banyak lagi via RainbowKit

## 🌐 Supported Networks

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

## 📝 License

**MIT License** - Bebas digunakan untuk project komersial maupun non-komersial.

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 💡 Usage Examples

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

## 🆘 Support

Jika ada pertanyaan atau butuh bantuan:

1. Buka issue di GitHub repository
2. Check dokumentasi [Wagmi](https://wagmi.sh) dan [RainbowKit](https://rainbowkit.com)
3. Join komunitas Web3 developer

## 🙏 Credits

Dibuat dengan ❤️ menggunakan:
- [Wagmi](https://wagmi.sh) - React Hooks for Ethereum
- [RainbowKit](https://rainbowkit.com) - Best wallet connection experience
- [Vite](https://vitejs.dev) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

---

**Happy Coding! 🚀**

*Feel free to star ⭐ this repository if it helps your project!*