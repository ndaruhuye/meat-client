export interface AppEnvironment {
  readonly name: 'dev' | 'staging' | 'prod';

  readonly production: boolean;

  /**
   * REST API base URL.
   *
   * Recommended:
   * /api/v1
   *
   * This keeps Angular and NestJS same-origin.
   */
  readonly apiBaseUrl: string;

  /**
   * Optional Socket.IO server origin.
   *
   * Leave undefined when Socket.IO is served
   * from the same origin as Angular.
   *
   * Example:
   * https://realtime.example.com
   */
  readonly websocketBaseUrl?: string;
}
