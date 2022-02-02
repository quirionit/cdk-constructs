/**
 * Time for provisioned concurrency (from - to)
 */
export interface ProvisionedConcurrencyConfigurationTime {
  readonly hour: string;
  readonly minute: string;
}

/**
 * Configuration for provisioned concurrency
 */
export interface ProvisionedConcurrencyConfiguration {
  readonly minCapacity: number;
  readonly maxCapacity: number;
  readonly from: ProvisionedConcurrencyConfigurationTime;
  readonly to: ProvisionedConcurrencyConfigurationTime;
  readonly utilizationTarget: number;
}

/**
 * Default configuration if provisioned concurrency is activated
 */
export const ProvisionedConcurrencyDefaultConfiguration = {
  minCapacity: 5,
  maxCapacity: 20,
  from: { hour: '10', minute: '0' },
  to: { hour: '21', minute: '0' },
  utilizationTarget: 0.5,
};