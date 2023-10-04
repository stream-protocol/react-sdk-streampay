/**
 * Represents the parameters for retrieving installment information.
 */
export interface InstallmentsParams {
    amount: string; // The purchase amount
    bin: string; // The card's BIN (Bank Identification Number)
    locale?: string; // Optional locale for localization
    processingMode?: ProcessingMode; // Optional processing mode
  }
  
  // Define the ProcessingMode enum if not already defined
  export enum ProcessingMode {
    AGGREGATOR = 'aggregator',
    GATEWAY = 'stream-payment-gateway',
  }
  