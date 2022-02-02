import { ApiConfiguration } from './api-configuration';

export interface MicroserviceConfiguration {
  /**
   * Domain (according to domain model)
   */
  readonly domain: string;

  /**
   * Context the ms is implementing
   */
  readonly context: string;

  /**
   * Should create dynamo data store
   */
  readonly dataStore: boolean;

  /**
   * Should create event store
   */
  readonly eventStore: boolean;

  /**
   * Should create an api gateway for the microservice
   * default: undefined
   */
  readonly api?: ApiConfiguration;
}