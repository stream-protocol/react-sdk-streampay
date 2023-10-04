export interface PaymentMethod {
    id: string;
    name: string;
    type: PaymentMethodType;
    walletAddress?: string;   // Specific to cryptocurrency
    coinType?: string;       // Specific to cryptocurrency
    exchangeRate?: number;  // Specific to cryptocurrency
    currencyCode?: string;  // Specific to fiat
    country?: string;      // Specific to fiat
    cartItems?: CartItem[]; // Specific to cart payment
    // Add more properties as needed
  }
  
  export interface CartItem {
    productId: string;
    quantity: number;
    // Add more properties for cart items
  }
  