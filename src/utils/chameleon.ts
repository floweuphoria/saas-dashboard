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
  chameleon.init('SXhM1amPRRoR2TPYuc50qIPxzw7EWuDcQtkVlqGnN3nESR-1UDYoI-G3F3xKyeOos2W8Z0', { 
    fastUrl: 'https://fast.chameleon.io/' 
  });

  // Get the current fake user (same as used for Userflow and Frigade)
  const fakeUser = getCurrentFakeUser();

  // Generate uid_hash for user verification
  const uid_hash = generateUidHash(fakeUser.userId);

  // Identify user in Chameleon with uid_hash
  chameleon.identify(fakeUser.userId, {
    uid_hash: uid_hash,
    email: fakeUser.email,
    name: fakeUser.name,
    // Additional properties you can add:
    signup_date: fakeUser.signed_up_at,
    plan: 'Free Plan',
    company: 'DataFlow Pro'
  });

  console.log('Chameleon initialized for user:', fakeUser.userId);
};

export default chameleon;