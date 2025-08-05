import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';
import { webAttributionPlugin } from '@amplitude/plugin-web-attribution-browser';
import * as engagement from '@amplitude/engagement-browser';

// Initialize Sentry BEFORE rendering the app
Sentry.init({
  dsn: "https://e384b03a5496de955da263b005db027e@o4509528113283073.ingest.us.sentry.io/4509724657909760",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: true, // Enable debug mode to see console logs
});

console.log("Sentry initialized successfully");

// Initialize Amplitude
amplitude.add(sessionReplayPlugin({ sampleRate: 1 }));
amplitude.add(webAttributionPlugin());
amplitude.add(engagement.plugin());
amplitude.init('82425297ec1429202a964637ed2eb10a', {
  fetchRemoteConfig: true,
  autocapture: true
});

// Initialize Amplitude Engagement (Surveys) separately as well
engagement.init('82425297ec1429202a964637ed2eb10a', {
  serverZone: 'US'
});

console.log("Amplitude and Engagement SDKs initialized successfully");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<div>Something went wrong</div>} showDialog>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
