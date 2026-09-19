import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  name: 'staging',

  production: false,

  apiBaseUrl: '/api/v1',
} as const satisfies AppEnvironment;
