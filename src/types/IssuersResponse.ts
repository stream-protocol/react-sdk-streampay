/**
 * Represents the response from the issuers endpoint.
 */
export interface IssuersResponse {
    issuerId: string; // The ID of the issuer
    name: string; // The name of the issuer
    secureThumbnail: string; // The URL to the secure thumbnail image
    thumbnail: string; // The URL to the thumbnail image
    processingMode: string; // The processing mode of the issuer
    merchantAccountId?: string; // Optional merchant account ID
  }
  