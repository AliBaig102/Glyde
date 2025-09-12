import { API_VERSION, AUTH_TOKEN_KEY, ENABLE_ANALYTICS, ENABLE_PUSH_NOTIFICATIONS, APP_NAME, APP_VERSION, BACKEND_BASE_URL } from '@env';

// Export environment variables with proper typing
export const env = {
  // API URLs
  BACKEND_BASE_URL: BACKEND_BASE_URL || 'http://localhost:4000',
  API_VERSION: API_VERSION || 'v1',
  
  // Authentication
  AUTH_TOKEN_KEY: AUTH_TOKEN_KEY || 'auth_token',
  
  // Feature Flags
  ENABLE_ANALYTICS: ENABLE_ANALYTICS === 'true',
  ENABLE_PUSH_NOTIFICATIONS: ENABLE_PUSH_NOTIFICATIONS === 'true',
  
  // App Configuration
  APP_NAME: APP_NAME || 'Glyde',
  APP_VERSION: APP_VERSION || '0.0.1',
};

// Function to get the full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${env.BACKEND_BASE_URL}/${env.API_VERSION}${endpoint}`;
};

export default env;