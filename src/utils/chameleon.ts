import { getCurrentFakeUser } from './userGenerator';

const chameleon = require('@chamaeleonidae/chmln');

// Helper function to generate uid_hash (normally done on server)
const generateUidHash = (uid: string): string => {
  // In production, this should be done on your server with the secret
  // For demo purposes, we'll create a mock hash
  const now = Math.floor(Date.now() / 1000);
  const mockHash = btoa(`${uid}-${now}`).replace(/[+/=]/g, '').slice(0, 64);
  return `${mockHash}-${now}`;
};

export const initChameleon = () => {
  // Initialize Chameleon with your API key
  chameleon.init('VkwlmFr7F55Q5wfJLFCaxLUVXHsL-1UDYoI-G3F3xKyeOos2W8Z0', { 
    fastUrl: 'https://fast.chameleon.io/' 
  });

  // Get the current fake user (same as used for Userflow and Frigade)
  const fakeUser = getCurrentFakeUser();

  // Identify user in Chameleon using proper format
  console.log('Identifying user in Chameleon:', fakeUser.userId, fakeUser.email);
  
  chameleon.identify(fakeUser.userId, {
    email: fakeUser.email,                    // RECOMMENDED, email is used as the key to map user data for integrations
    name: fakeUser.name,                      // RECOMMENDED, name can be used to greet and/or personalize content
    created: fakeUser.signed_up_at,           // RECOMMENDED, must be ISO8601 or unix timestamp format
    role: 'Free User',                        // OPTIONAL, properties such as 'role', 'admin', 'membership', etc.
    logins: Math.floor(Math.random() * 50),   // OPTIONAL, data about user engagement (e.g. 39)
    project: 'saas-dashboard',                // OPTIONAL, any other unique data that might appear in any page URLs
    plan: 'Free Plan',                        // Custom property for plan type
    company: 'DataFlow Pro'                   // Custom property for company
  });

  console.log('Chameleon initialized for user:', fakeUser.userId);
};

export default chameleon;