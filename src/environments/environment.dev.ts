import type { AppEnvironment } from './environment.model';

// Public build-time settings.
// Never store secrets here.
export const environment: AppEnvironment = {
  name: 'dev',

  production: false,

  /**
   * Same-origin API is preferred.
   *
   * Angular:
   * http://localhost:4200
   *
   * /api/v1/*
   *      ↓ proxy
   *
   * NestJS:
   * http://localhost:3000/api/v1/*
   */
  apiBaseUrl: '/api/v1',

  /**
   * Not required when Socket.IO is proxied
   * through the Angular origin as well.
   */
  // websocketBaseUrl:
  //   'http://localhost:3000',
} as const satisfies AppEnvironment;
