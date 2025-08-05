// Shared user generation utility for both Userflow and Frigade
export interface FakeUser {
  userId: string;
  name: string;
  email: string;
  signed_up_at: string;
  firstName: string;
  lastName: string;
}

// Generate fake user data that can be shared between Userflow and Frigade
export const generateFakeUser = (): FakeUser => {
  const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emily', 'Chris', 'Lisa', 'Tom', 'Anna'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'company.com'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  
  const userId = `demo_user_12345`;
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
    signed_up_at: signedUpAt,
    firstName,
    lastName
  };
};

// Store the current user to ensure consistency across the app session
let currentFakeUser: FakeUser | null = null;

export const getCurrentFakeUser = (): FakeUser => {
  if (!currentFakeUser) {
    currentFakeUser = generateFakeUser();
    console.log('Generated new fake user for session:', currentFakeUser);
  }
  return currentFakeUser;
};

// Reset user (useful for testing)
export const resetCurrentUser = (): FakeUser => {
  currentFakeUser = null;
  return getCurrentFakeUser();
};