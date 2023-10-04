/**
 * Represents the response for retrieving installment information.
 */
export interface InstallmentsResponse {
    amount: string; // The purchase amount
    bin: string; // The card's BIN (Bank Identification Number)
    locale: string; // The locale for localization
    processingMode: ProcessingMode; // The processing mode
    merchantAccountId?: string; // Optional merchant account ID
    payerCosts: PayerCost[]; // An array of payer costs
  }
  
  /**
   * Represents payer cost details.
   */
  export interface PayerCost {
    installments: number; // The number of installments
    installmentRate: number; // The installment rate
    discountRate: number; // The discount rate
    labels: string[]; // Labels associated with the payer cost
    installmentRateCollector: string[]; // Rate collector information
    minAllowedAmount: number; // Minimum allowed amount
    maxAllowedAmount: number; // Maximum allowed amount
    recommendedMessage: string; // Recommended message
    installmentAmount: number; // Installment amount
    totalAmount: number; // Total amount
    paymentMethodOptionId: string; // Payment method option ID
  }
  