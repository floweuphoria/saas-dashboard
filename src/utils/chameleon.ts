import { getCurrentFakeUser } from './userGenerator';

const chameleon = require('@chamaeleonidae/chmln');

export const initChameleon = () => {
  // Initialize Chameleon with your API key
  chameleon.init('SXhM1amPRRoR2TPYuc50qIPxzw7EWuDcQtkVlqGnN3nESR-1UDYoI-G3F3xKyeOos2W8Z0', { 
    fastUrl: 'https://fast.chameleon.io/' 
  });

  // Get the current fake user (same as used for Userflow and Frigade)
  const fakeUser = getCurrentFakeUser();

  // Identify user in Chameleon
  chameleon.identify(fakeUser.userId, {
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