// Descriptive comments added for each property
export interface IssuersParams {
  paymentMethodId: string; // The ID of the payment method
  cardBin: string; // The BIN (Bank Identification Number) of the card
}

export interface IssuersResponse {
  issuerId: string; // The ID of the issuer
  name: string; // The name of the issuer
  secureThumbnail: string; // The URL of the secure issuer thumbnail
  thumbnail: string; // The URL of the issuer thumbnail
  processingMode: string; // The processing mode of the issuer
  merchantAccountId?: string; // The ID of the merchant account (optional)
}

// Reusable type for thumbnail URLs
type ThumbnailUrl = string;

// Consistent camelCase naming and optional property
export interface IssuersParams {
  paymentMethodId: string;
  cardBin: string;
}

export interface IssuersResponse {
  issuerId: string;
  name: string;
  secureThumbnail: ThumbnailUrl;
  thumbnail: ThumbnailUrl;
  processingMode: string;
  merchantAccountId?: string;
}
