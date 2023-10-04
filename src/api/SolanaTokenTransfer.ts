import {
    Connection,
    PublicKey,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  
  // Solana network URL
  const solanaNetworkUrl = 'https://api.devnet.solana.com'; // Replace with the appropriate network URL (e.g., mainnet or testnet)
  
  // Sender's private key
  const senderPrivateKey = new Uint8Array([your-private-key]); // Replace with your actual private key
  
  // Recipient's public key
  const recipientPublicKey = new PublicKey('recipient-public-key'); // Replace with the recipient's public key
  
  // Token program ID (SPL Token program)
  const tokenProgramId = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'); // Replace with the actual Token program ID
  
  // Token mint address
  const tokenMintAddress = new PublicKey('token-mint-address'); // Replace with the token's mint address
  
  // Amount of tokens to transfer
  const amount = 100; // Adjust the amount as needed
  
  async function main() {
    try {
      // Initialize a connection to the Solana network
      const connection = new Connection(solanaNetworkUrl, 'confirmed');
  
      // Create a sender's wallet account using the private key
      const senderAccount = new Account(senderPrivateKey);
  
      // Get the associated token address for the sender's account
      const senderTokenAccount = await connection.getTokenAccountBalance(senderAccount.publicKey);
  
      // Create a transaction to transfer tokens
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderAccount.publicKey,
          toPubkey: recipientPublicKey,
          lamports: 0, // Sending 0 lamports for token transfers
        })
      );
  
      // Sign the transaction with the sender's account
      transaction.sign(senderAccount);
  
      // Send and confirm the transaction
      const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [senderAccount]
      );
  
      console.log('Token transfer confirmed. Signature:', signature);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the main function to execute the token transfer
  main();
  