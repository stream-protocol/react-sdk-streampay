// CallbackGetPaymentMethod.ts

// Define the CallbackGetPaymentMethod type for handling payment method responses.
export type CallbackGetPaymentMethod = (
    status: number,
    response: {
      // Define properties for the response
      // ...
      cause?: Cause[] | Cause;
    }
  ) => void;
  
  // Define the Cause type for error handling.
  type Cause = {
    // Define properties for the cause
  };
  