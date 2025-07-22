// Extend the Window interface to include analytics
declare global {
  interface Window {
    analytics: {
      track: (event: string, properties?: Record<string, any>) => void;
      identify: (userId: string, traits?: Record<string, any>) => void;
      page: (name?: string, properties?: Record<string, any>) => void;
      group: (groupId: string, traits?: Record<string, any>) => void;
      reset: () => void;
      ready: (callback: () => void) => void;
      alias: (userId: string, previousId?: string) => void;
    };
  }
}

// Segment Analytics utility functions
class SegmentAnalytics {
  private get analytics() {
    return window.analytics;
  }

  private isAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.analytics;
  }

  // Identify a user with traits
  identify(userId: string, traits?: Record<string, any>): void {
    if (this.isAvailable()) {
      this.analytics.identify(userId, traits);
      console.log('Segment: User identified', { userId, traits });
    }
  }

  // Track an event with properties
  track(event: string, properties?: Record<string, any>): void {
    if (this.isAvailable()) {
      this.analytics.track(event, properties);
      console.log('Segment: Event tracked', { event, properties });
    }
  }

  // Track a page view
  page(name?: string, properties?: Record<string, any>): void {
    if (this.isAvailable()) {
      this.analytics.page(name, properties);
      console.log('Segment: Page tracked', { name, properties });
    }
  }

  // Group a user
  group(groupId: string, traits?: Record<string, any>): void {
    if (this.isAvailable()) {
      this.analytics.group(groupId, traits);
      console.log('Segment: Group tracked', { groupId, traits });
    }
  }

  // Reset user session
  reset(): void {
    if (this.isAvailable()) {
      this.analytics.reset();
      console.log('Segment: User session reset');
    }
  }

  // Wait for analytics to be ready
  ready(callback: () => void): void {
    if (this.isAvailable()) {
      this.analytics.ready(callback);
    } else {
      // Fallback if analytics isn't available
      callback();
    }
  }

  // Create an alias for a user
  alias(userId: string, previousId?: string): void {
    if (this.isAvailable()) {
      this.analytics.alias(userId, previousId);
      console.log('Segment: User alias created', { userId, previousId });
    }
  }
}

// Create singleton instance
const segment = new SegmentAnalytics();

// Predefined event tracking functions for common actions
export const trackUserSignup = (userData: { email: string; sdk: string; useCase: string }) => {
  segment.track('User Signed Up', {
    email: userData.email,
    sdk: userData.sdk,
    useCase: userData.useCase,
    timestamp: new Date().toISOString()
  });
};

export const trackUserLogin = (email: string) => {
  segment.track('User Logged In', {
    email,
    timestamp: new Date().toISOString()
  });
};

export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  segment.page(pageName, {
    ...properties,
    timestamp: new Date().toISOString()
  });
};

export const trackWorkflowView = (workflowId: string) => {
  segment.track('Workflow Viewed', {
    workflowId,
    timestamp: new Date().toISOString()
  });
};

export const trackFeatureUsed = (feature: string, properties?: Record<string, any>) => {
  segment.track('Feature Used', {
    feature,
    ...properties,
    timestamp: new Date().toISOString()
  });
};

export const trackUserLogout = () => {
  segment.track('User Logged Out', {
    timestamp: new Date().toISOString()
  });
};

export default segment;