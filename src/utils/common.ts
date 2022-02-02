/**
 * Contains common utility functions.
 */
import { Construct } from 'constructs';
import { Stage } from '../types';

/**
 * Capitalize first letter of string.
 * @param input {string}
 * @return {string}
 */
export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Load variable from context of an app
 * @param scope {Construct}
 * @param input {string}
 * @return {string}
 */
export function fromContext(scope: Construct, input: string): string {
  const variable = scope.node.tryGetContext(input);
  if (!variable) {
    throw new Error(`Needed context variable ${input} is missing.`);
  }
  return variable;
}

/**
 * Check type of variable
 * @param input {unknown}
 */
export function isType<Type>(input: unknown): input is Type {
  return input !== undefined;
}

/**
 * Filters out every special character and replaces it with a string
 * @param branch {string}
 * @return {string}
 */
export function filterSpecialCharacters(branch: string): string {
  return branch.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Load environment
 * @param scope
 * @return Stage
 */
export function getEnvironment(scope: Construct): Stage {
  return <Stage>fromContext(scope, 'env') ?? Stage.DEVELOPMENT;
}
