import { InjectionToken, Provider } from '@angular/core';

export type StorageArea = 'local' | 'session';

export interface StorageConfig {
  /**
   * Prevents collisions with other applications
   * running on the same origin.
   *
   * Example:
   * meta-gateway
   */
  readonly namespace: string;

  /**
   * Storage schema version.
   *
   * Increment when persisted data becomes incompatible.
   */
  readonly version: number;

  /**
   * Default browser storage mechanism.
   */
  readonly defaultArea: StorageArea;
}

export const STORAGE_CONFIG = new InjectionToken<StorageConfig>('STORAGE_CONFIG');

export const DEFAULT_STORAGE_CONFIG: StorageConfig = {
  namespace: 'meta-gateway',
  version: 1,
  defaultArea: 'local',
};

export function provideStorageConfig(config: Partial<StorageConfig> = {}): Provider {
  return {
    provide: STORAGE_CONFIG,

    useValue: {
      ...DEFAULT_STORAGE_CONFIG,
      ...config,
    } satisfies StorageConfig,
  };
}
