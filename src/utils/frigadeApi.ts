// Frigade API utility for syncing user properties
interface FrigadeUserProperties {
  email: string;
  sdk: string;
  useCase: string;
  signedUpViaForm: boolean;
  [key: string]: any;
}

class FrigadeAPI {
  private readonly apiKey = 'api_public_EiAi1zT1mFphX4ss8gcJBIq8xVIzQRcxQ2Toi9GB3Hp2JVE8qBolQamgwl0fWPeF';
  private readonly baseUrl = 'https://api.frigade.com/v1/public';

  // Create or update a user in Frigade
  async createOrUpdateUser(userId: string, properties: FrigadeUserProperties): Promise<void> {
    try {
      const requestBody = {
        userId,
        properties,
        bootstrapFlowStates: true // Automatically complete eligible flows
      };

      console.log('Frigade API request:', requestBody);

      const response = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Frigade API error:', response.status, errorData);
        return;
      }

      const data = await response.json();
      console.log('Frigade user synced successfully:', data);
    } catch (error) {
      console.error('Failed to sync user with Frigade:', error);
    }
  }

  // Get user data from Frigade
  async getUser(userId: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${encodeURIComponent(userId)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        console.error('Failed to get user from Frigade:', response.status);
        return null;
      }

      const data = await response.json();
      console.log('Frigade user data retrieved:', data);
      return data;
    } catch (error) {
      console.error('Failed to get user from Frigade:', error);
      return null;
    }
  }

  // Delete a user from Frigade
  async deleteUser(userId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${encodeURIComponent(userId)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      });

      if (!response.ok) {
        console.error('Failed to delete user from Frigade:', response.status);
        return;
      }

      console.log('Frigade user deleted successfully');
    } catch (error) {
      console.error('Failed to delete user from Frigade:', error);
    }
  }
}

// Create singleton instance
const frigadeApi = new FrigadeAPI();

// Helper function to sync user data with Frigade
export const syncUserWithFrigade = async (userData: {
  email: string;
  sdk: string;
  useCase: string;
  signedUp: boolean;
}) => {
  
  const userId = userData.email; // Use email as consistent user ID
  const emailParts = userData.email.split('@');
  
  const properties: FrigadeUserProperties = {
    email: userData.email,
    firstName: emailParts[0], // Use email prefix as first name
    lastName: emailParts[1] || '', // Use domain as last name for now
    sdk: userData.sdk,
    useCase: userData.useCase,
    signedUpViaForm: userData.signedUp,
    company: emailParts[1] || '', // Use domain as company
    plan: 'free', // Default plan
    role: 'developer', // Default role
    createdAt: new Date().toISOString(),
  };

  console.log('Syncing user with Frigade:', { userId, properties });
  await frigadeApi.createOrUpdateUser(userId, properties);
};

export default frigadeApi;