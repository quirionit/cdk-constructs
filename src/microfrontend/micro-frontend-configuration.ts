import { DeploymentConfiguration } from './deployment-configuration';

/**
 * Additional props to create a new micro frontend stack
 */
export interface MicroFrontendConfiguration {

  /**
   * Describes the name of the app
   */
  readonly app: string;

  /**
   * Path to generated / built files
   */
  readonly distPath: string;

  /**
   * Deployment configuration
   */
  readonly config?: DeploymentConfiguration;

  /**
   * All branches which should be deployed with given deployment configuration
   */
  readonly branchesWithRecords?: string[];
}