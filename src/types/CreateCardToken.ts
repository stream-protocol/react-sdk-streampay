export interface CardTokenParams {
    securityCode: string;
    cardNumber?: string;
    cardholderName?: string;
    expirationMonth?: string;
    expirationYear?: string;
    idType?: string; // Renamed from 'identificationType'
    idNumber?: string; // Renamed from 'identificationNumber'
    cardId: string;
  }
  
  export interface CardTokenResponse extends CardTokenParams {
    tokenId: string;
  }
  