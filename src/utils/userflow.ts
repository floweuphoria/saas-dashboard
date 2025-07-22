import userflow from 'userflow.js';
import { getUserData, getOrCreateUserData } from './userStorage';

// Userflow configuration
const USERFLOW_TOKEN = process.env.REACT_APP_USERFLOW_TOKEN || 'ct_us1_cwtddq2uu5hzpgzcipd67ti3hi';

export const initUserflow = () => {
  if (typeof window !== 'undefined') {
    // Initialize Userflow
    userflow.init(USERFLOW_TOKEN);
    
    // Get the stored user data
    const userData = getOrCreateUserData();
    
    // Create a consistent user ID from email
    const userId = `user_${userData.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    
    // Identify the user
    userflow.identify(userId, {
      name: userData.email.split('@')[0],
      email: userData.email,
      sdk: userData.sdk,
      useCase: userData.useCase,
      signed_up_at: new Date().toISOString()
    });
    
    console.log('Userflow initialized successfully with stored user:', userData);
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