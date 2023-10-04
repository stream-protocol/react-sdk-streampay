import { StreamPayConfig } from './api'; // Import necessary types from your project

/**
 * Represents the StreamPay API interface for interacting with StreamPay service.
 */
export interface StreamPayAPI {
  /**
   * Initializes the StreamPay API with the provided configuration.
   * @param config - The StreamPay configuration.
   */
  initialize(config: StreamPayConfig): void;

  /**
   * Retrieves all available payment methods.
   * @returns A promise that resolves to an array of payment methods.
   */
  getAllPaymentMethods(): Promise<PaymentMethod[]>;

  /**
   * Retrieves issuers for a given payment method and BIN.
   * @param paymentMethodId - The ID of the payment method.
   * @param bin - The BIN (Bank Identification Number).
   * @returns A promise that resolves to issuers response data.
   */
  getIssuers(paymentMethodId: string, bin: string): Promise<IssuersResponse>;

  /**
   * Retrieves installments information based on parameters.
   * @param params - The installments request parameters.
   * @returns A promise that resolves to installments response data.
   */
  getInstallments(params: InstallmentsParams): Promise<InstallmentsResponse>;

  /**
   * Retrieves identification types.
   * @returns A promise that resolves to identification types response data.
   */
  getIdentificationTypes(): Promise<IdentificationTypesResponse>;

  /**
   * Creates a card token based on provided parameters.
   * @param params - The card token creation parameters.
   * @returns A promise that resolves to the created card token response.
   */
  createCardToken(params: CardTokenParams): Promise<CardTokenResponse>;

  /**
   * Initiates a checkout process with the provided parameters.
   * @param params - The checkout parameters.
   * @returns A promise that resolves to the checkout response.
   */
  checkout(params: CheckoutParams): Promise<any>;
}
