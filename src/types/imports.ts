export {
  GetPaymentMethod,
  PaymentMethodsParams,
  PaymentMethodsResponse,
  IssuersParams,
  IssuersResponse,
  InstallmentsParams,
  InstallmentsResponse,
  IdentificationTypesResponse,
  CardTokenParams,
  CardTokenResponse,
  CheckoutParams,
} from './src/types';

// StreamPayConfig.ts
export type StreamPayConfig = {
  deviceProfileId: string;
  key: string;
  referer: string;
  tokenId: string;
  version: string;
  sessionId?: any;
  initialized: boolean;
  initializedInsights: boolean;
};

// StreamPayMethods.ts
export type StreamPayMethods = {
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
};

// StreamPayAPI.ts
export type StreamPayAPI = {
  bricks: () => any;
  cardForm: (e: any) => any;
  checkout: (params: CheckoutParams) => any;
  constructor: (key: string, options: { locale: string }) => any;
  createCardToken: (params: CardTokenParams) => Promise<CardTokenResponse>;
  getIdentificationTypes: () => Promise<IdentificationTypesResponse>;
  getInstallments: (params: InstallmentsParams) => Promise<InstallmentsResponse>;
  getIssuers: (params: IssuersParams) => Promise<IssuersResponse>;
  getPaymentMethods: (params: PaymentMethodsParams) => Promise<PaymentMethodsResponse>;
};
