import { Cause } from './Cause';
import { ProcessingMode } from './ProcessingMode';

// Define a custom type for financial institutions
type FinancialInstitution = {
  // Define properties for financial institutions
};

// Define a custom type for processing modes
type CustomProcessingMode = {
  // Define properties for processing modes
};

// Define a custom type for labels
type Label = string;

/**
 * Represents a function for getting payment method details.
 * @param settings - The settings for retrieving payment method details.
 * @param callback - The callback function to handle the response.
 */
export type GetPaymentMethod = (
  settings: {
    bin: string;
    paymentMethodId?: string;
  },
  callback: CallbackGetPaymentMethod
) => void;

/**
 * Represents the callback function for GetPaymentMethod.
 * @param status - The status code of the response.
 * @param response - The response data.
 */
export type CallbackGetPaymentMethod = (
  status: number,
  response: {
    // Define properties for the response
    // ...
    cause?: Cause[] | Cause;
  }
) => void;

/**
 * Represents the parameters for retrieving payment methods.
 */
export interface PaymentMethodsParams {
  bin: string;
  processingMode?: ProcessingMode;
}

/**
 * Represents the response for retrieving payment methods.
 */
export interface PaymentMethodsResponse {
  paging: {
    total: number;
    limit: number;
    offset: number;
  };
  results: PaymentMethod[];
}

/**
 * Represents a payment method.
 */
interface PaymentMethod {
  secureThumbnail: string;
  minAccreditationDays: number;
  maxAccreditationDays: number;
  id: string;
  paymentTypeId: string;
  accreditationTime: number;
  thumbnail: string;
  marketplace: string;
  deferredCapture: string;
  labels: Label[];
  name: string;
  siteId: string;
  processingMode: CustomProcessingMode;
  additionalInfoNeeded: string[];
  status: string;
  settings: Settings;
  issuer: {
    isDefault: boolean;
    name: string;
    id: number;
  };
}

/**
 * Represents settings for payment methods.
 */
type Settings = {
  bin: {
    pattern: string;
    installmentsPattern: string;
    exclusionPattern: string;
  };
  cardNumber: {
    length: number;
    validation: string;
  };
  securityCode: {
    mode: string;
    cardLocation: string;
    length: number;
  };
};
