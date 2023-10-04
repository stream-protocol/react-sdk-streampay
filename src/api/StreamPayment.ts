import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { ethers, Wallet, utils } from 'ethers';

// Initialize connections for Solana mainnet, devnet, and testnet
const solanaMainnetConnection = new Connection('https://solana-mainnet-api-provider.com', 'confirmed');
const solanaDevnetConnection = new Connection('https://solana-devnet-api-provider.com', 'confirmed');
const solanaTestnetConnection = new Connection('https://solana-testnet-api-provider.com', 'confirmed');

// Initialize a Solana wallet (you should replace this with your wallet management logic)
const solanaWallet = Keypair.generate(); // Generate a new Solana wallet for the user

// Define the fee wallet (where the fees are collected)
const feeWallet = new Keypair(); // Generate a new Solana wallet for fees

// Define the StreamPay configuration
const streamPayConfig = {
  deviceProfileId: 'your-device-profile-id',
  key: 'your-api-key',
  referer: 'your-referer',
  tokenId: 'your-token-id',
  version: 'v1',
  sessionId: 'your-session-id',
  initialized: false,
  initializedInsights: false,
  // ... other configuration properties ...
};

// Initialize StreamPay connection
const streamPay = new StreamPay(streamPayConfig);

// Send Solana payment with fees
async function sendSolanaPaymentWithFees(recipientAddress: string, amount: number) {
  try {
    // Calculate the fee amount (1.5% of the payment amount)
    const feePercentage = 0.015; // 1.5%
    const feeAmount = amount * feePercentage;

    // Calculate the total amount including fees
    const totalAmount = amount + feeAmount;

    // Create a Solana transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: solanaWallet.publicKey,
        toPubkey: new PublicKey(recipientAddress),
        lamports: totalAmount * 1000000000, // Amount in lamports
      })
    );

    // Sign the transaction with the user's Solana wallet and the fee wallet
    transaction.sign(solanaWallet, feeWallet);

    // Send and confirm the Solana transaction
    const signature = await sendAndConfirmTransaction(solanaMainnetConnection, transaction, [
      solanaWallet,
      feeWallet,
    ]);

    console.log(`Solana transaction signature: ${signature}`);
  } catch (error) {
    console.error('Error sending Solana payment with fees:', error);
    // Handle errors and provide user feedback
  }
}

// Send Ethereum-based USDC payment
async function sendEthereumUSDCPayment(recipientAddress: string, amount: number) {
  try {
    // Construct the payment transaction
    const transaction = {
      to: recipientAddress,
      value: utils.parseEther(amount.toString()), // Amount in Ether
    };

    // Sign and send the Ethereum transaction
    const txResponse = await ethereumWallet.sendTransaction(transaction);
    console.log(`Ethereum transaction hash: ${txResponse.hash}`);
  } catch (error) {
    console.error('Error sending Ethereum-based USDC payment:', error);
    // Handle errors and provide user feedback
  }
}

// Usage example:
const solanaTokenAmountToSend = 10; // Adjust the amount as needed
sendSolanaPaymentWithFees('Recipient-Solana-Public-Key', solanaTokenAmountToSend);

const ethereumUSDCAmountToSend = 100; // Adjust the amount as needed
sendEthereumUSDCPayment('Recipient-Ethereum-Public-Key', ethereumUSDCAmountToSend);
