import userflow from 'userflow.js';
import { getCurrentFakeUser } from './userGenerator';

// Userflow configuration
const USERFLOW_TOKEN = process.env.REACT_APP_USERFLOW_TOKEN || 'ct_us1_cwtddq2uu5hzpgzcipd67ti3hi';

export const initUserflow = () => {
  if (typeof window !== 'undefined') {
    // Initialize Userflow
    userflow.init(USERFLOW_TOKEN);
    
    // Get the shared fake user data
    const fakeUser = getCurrentFakeUser();
    
    // Identify the fake user
    userflow.identify(fakeUser.userId, {
      name: fakeUser.name,
      email: fakeUser.email,
      signed_up_at: fakeUser.signed_up_at
    });
    
    console.log('Userflow initialized successfully with fake user:', fakeUser);
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