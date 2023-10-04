/**
 * Represents the parameters for initiating a checkout process.
 */
export interface CheckoutParams {
    // The ID of the preference to checkout
    preference: {
      id: string;
    };
    
    // Custom theme options for the checkout UI
    theme?: {
      elementsColor?: string; // Color for UI elements
      headerColor?: string;   // Color for the header
    };
    
    // Flag to automatically open the checkout
    autoOpen?: boolean;
    
    // Rendering options for the checkout button
    render?: {
      container: string; // Selector for the container element
      label: string;     // Label text for the checkout button
      type?: string;     // Type of rendering
    };
  }
  
  // Default values for optional properties
  export const defaultCheckoutParams: CheckoutParams = {
    preference: {
      id: '',
    },
    theme: {
      elementsColor: '#000000', // Default UI elements color
      headerColor: '#ffffff',   // Default header color
    },
    autoOpen: false, // Default is not to auto-open
    render: {
      container: '',
      label: 'Checkout',
    },
  };
  