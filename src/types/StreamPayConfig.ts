// streamPayConfig.ts

/**
 * StreamPay Configuration
 */
export interface StreamPayConfig {
    deviceProfileId: string;
    key: string;
    referer: string;
    tokenId: string;
    version: string;
    sessionId: string;
    initialized: boolean;
    initializedInsights: boolean;
    // Add other configuration properties here
  }
  
  // Define the StreamPay configuration object
  export const streamPayConfig: StreamPayConfig = {
    deviceProfileId: 'your-device-profile-id',
    key: 'your-api-key',
    referer: 'your-referer',
    tokenId: 'your-token-id',
    version: 'v1',
    sessionId: 'your-session-id',
    initialized: false,
    initializedInsights: false,
    // Add other configuration properties with appropriate types and values
  };
  