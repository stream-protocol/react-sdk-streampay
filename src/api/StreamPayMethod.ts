// Define the StreamPayMethods interface for configuration methods.
export interface StreamPayMethods {
    AJAX: (t: any) => void;
    clearSession: () => void;
    createDeviceProvider: (n: Function) => void;
    createToken: (e: any, t: any) => void;
    getAllPaymentMethods: (t: any) => any;
    getIdentificationTypes: (t: any) => any;
    getInstallments: (t: any, r: any) => any;
    getIssuers: () => any;
    getPaymentMethod: GetPaymentMethod;
    getPaymentMethods: () => any;
    initStreamPay: () => void;
    setPaymentMethods: (e: any) => void;
    setPublishableKey: (key: string) => void;
    validateBinPattern: (e: any, t: any) => boolean;
    validateCardNumber: (e: any, t: any, n: Function) => void;
    validateCardholderName: (e: any) => boolean;
    validateExpiryDate: (e: any, t: any) => boolean;
    validateIdentification: (e: any, t: any) => boolean;
    validateLuhn: (e: any) => boolean;
    validateSecurityCode: (e: any, t: any, n: Function) => any;
  }
  
  // Define the GetPaymentMethod type for retrieving payment method details.
  export type GetPaymentMethod = (
    settings: {
      bin: string;
      paymentMethodId?: string;
    },
    callback: CallbackGetPaymentMethod
  ) => void;
  
  // Define the callback function type for GetPaymentMethod.
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
  
  // Export the StreamPayMethods interface and related types.
  export { StreamPayMethods, GetPaymentMethod, CallbackGetPaymentMethod, Cause };
  