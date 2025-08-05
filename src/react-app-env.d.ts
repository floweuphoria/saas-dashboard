/// <reference types="react-scripts" />

declare global {
  interface Window {
    engagement: {
      rc: {
        open: () => void;
      };
    };
  }
}
