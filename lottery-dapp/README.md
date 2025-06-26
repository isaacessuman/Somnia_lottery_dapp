# Somnia Lottery DApp

A decentralized lottery application built with React and ethers. The app lets users purchase tickets and view winners for each round of the lottery deployed on **Somnia Testnet**.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Connecting MetaMask to Somnia Testnet

If your wallet is not already configured for Somnia Testnet, add a new network in MetaMask with the following settings:

- **Network Name:** Somnia Testnet
- **RPC URL:** `https://dream-rpc.somnia.network`
- **Chain ID:** `50312` (hex: `0xc488`)
- **Currency Symbol:** `STT`
- **Block Explorer:** `https://shannon-explorer.somnia.network`

After adding the network, connect MetaMask and ensure you are switched to Somnia Testnet before interacting with the DApp.

## Create React App Scripts

Useful commands provided by Create React App:

- `npm start` – run the app in development mode.
- `npm test` – launch the test runner.
- `npm run build` – build the app for production.
- `npm run eject` – copy configuration files and dependencies.

