import userflow from 'userflow.js';

// Userflow configuration
const USERFLOW_TOKEN = process.env.REACT_APP_USERFLOW_TOKEN || 'ct_test_token'; // Replace with your actual token

export const initUserflow = () => {
  if (typeof window !== 'undefined') {
    userflow.init(USERFLOW_TOKEN);
    console.log('Userflow initialized successfully');
  }
};

// User identification for personalized flows
export const identifyUser = (userId: string, attributes?: Record<string, any>) => {
  userflow.identify(userId, attributes);
};

// Start a specific flow
export const startFlow = (flowId: string) => {
  userflow.start(flowId);
};

// Track custom events
export const trackEvent = (eventName: string, attributes?: Record<string, any>) => {
  userflow.track(eventName, attributes);
};

// Reset user session
export const resetUser = () => {
  userflow.reset();
};

// Update user attributes
export const updateUser = (attributes: Record<string, any>) => {
  userflow.updateUser(attributes);
};

// Group users (for team-based features)
export const identifyGroup = (groupId: string, attributes?: Record<string, any>) => {
  userflow.group(groupId, attributes);
};

export default userflow;