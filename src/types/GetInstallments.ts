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
 * Represents a function for getting installment details.
 * @param settings - The settings for retrieving installment details.
 * @param callback - The callback function to handle the response.
 */
export type GetInstallment = (
  settings: {
    bin: string;
    installmentId?: string; // Modify this property as needed
  },
  callback: CallbackGetInstallment
) => void;

/**
 * Represents the callback function for GetInstallment.
 * @param status - The status code of the response.
 * @param response - The response data.
 */
export type CallbackGetInstallment = (
  status: number,
  response: {
    // Define properties for the response
    // ...
    cause?: Cause[] | Cause;
  }
) => void;

/**
 * Represents the parameters for retrieving installments.
 */
export interface InstallmentsParams {
  bin: string;
  processingMode?: ProcessingMode;
  // Add any additional properties needed for installment retrieval
}

/**
 * Represents the response for retrieving installments.
 */
export interface InstallmentsResponse {
  paging: {
    total: number;
    limit: number;
    offset: number;
  };
  results: Installment[];
}

/**
 * Represents an installment.
 */
interface Installment {
  secureThumbnail: string;
  minAccreditationDays: number;
  maxAccreditationDays: number;
  id: string;
  installmentTypeId: string; // Modify this property as needed
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
 * Represents settings for installments.
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
