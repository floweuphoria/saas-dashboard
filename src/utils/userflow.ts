import userflow from 'userflow.js';

// Userflow configuration
const USERFLOW_TOKEN = process.env.REACT_APP_USERFLOW_TOKEN || 'ct_us1_cwtddq2uu5hzpgzcipd67ti3hi';

// Generate fake user data
const generateFakeUser = () => {
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emily', 'Chris', 'Lisa', 'Tom', 'Anna'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'company.com'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  
  const userId = `user_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  const name = `${firstName} ${lastName}`;
  
  // Generate a random signup date within the last 6 months
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const randomTime = sixMonthsAgo.getTime() + Math.random() * (Date.now() - sixMonthsAgo.getTime());
  const signedUpAt = new Date(randomTime).toISOString();
  
  return {
    userId,
    name,
    email,
    signed_up_at: signedUpAt
  };
};

export const initUserflow = () => {
  if (typeof window !== 'undefined') {
    // Initialize Userflow
    userflow.init(USERFLOW_TOKEN);
    
    // Generate fake user data
    const fakeUser = generateFakeUser();
    
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