import { useEffect, useState } from 'react';

interface StreamPay {
  // Define the StreamPay interface as needed
}

interface StreamPayOptions {
  locale?: string;
}

const useStreamPay = (publicKey: string, options: StreamPayOptions = {}) => {
  const [streampay, setStreamPay] = useState<StreamPay | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState<Error | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.streampayments.org/js/v1';

    script.addEventListener('load', () => {
      setScriptLoaded(true);

      try {
        const streamPayInstance = new window.StreamPay(publicKey, options);
        setStreamPay(streamPayInstance);
      } catch (error) {
        setScriptError(error);
      }
    });

    script.addEventListener('error', (error) => {
      setScriptError(error);
    });

    document.body.appendChild(script);

    return () => {
      const iframe = document.body.querySelector('iframe[src*="streampay"]');
      if (iframe) {
        document.body.removeChild(iframe);
      }

      document.body.removeChild(script);
    };
  }, [publicKey, options]);

  return { streampay, scriptLoaded, scriptError };
};

export default useStreamPay;
