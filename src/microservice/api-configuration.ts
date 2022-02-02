import { SwaggerConfiguration } from '../swagger';

export interface ApiConfiguration {
  /**
   * Should it be public (or internal use only).
   */
  readonly public: boolean;

  /**
   * Should create and publish swagger documentation.
   */
  readonly swagger?: SwaggerConfiguration;
}