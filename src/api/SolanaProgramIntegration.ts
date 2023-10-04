import {
    Connection,
    PublicKey,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  
  // Define the Solana network URL
  const solanaNetworkUrl = 'https://api.devnet.solana.com'; // Replace with the appropriate network URL
  
  // Define the Solana program ID
  const programId = new PublicKey('your-program-id'); // Replace with your actual program ID
  
  // Define the payer's private key
  const payerPrivateKey = new Uint8Array([your-private-key]); // Replace with your private key
  
  async function main() {
    try {
      // Initialize a connection to the Solana network
      const connection = new Connection(solanaNetworkUrl, 'confirmed');
  
      // Create a payer account using the private key
      const payerAccount = new Account(payerPrivateKey);
  
      // Create a new transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: payerAccount.publicKey,
          toPubkey: programId, // Sending funds to the program's address
          lamports: 1000000, // Specify the amount of lamports to send
        })
      );
  
      // Sign the transaction with the payer's account
      transaction.sign(payerAccount);
  
      // Send and confirm the transaction
      const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [payerAccount]
      );
  
      console.log('Transaction confirmed. Signature:', signature);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the main function to execute the Solana program integration
  main();
  