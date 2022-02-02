import { Schedule } from 'aws-cdk-lib/aws-events';
import { EventPattern } from 'aws-cdk-lib/aws-events/lib/event-pattern';

export interface QueueConfiguration {
  /**
   * Name of event bus
   */
  readonly busName: string;

  /**
   * Configure a pattern to filter incoming events
   * Read more here:
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html
   * https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html
   *
   * @example
   *   eventPattern: {
   *     source: ['aws.ec2'],
   *   },
   */
  readonly eventPattern?: EventPattern;

  /**
   * Configure a schedule to run this lambda
   */
  readonly schedule?: Schedule;
}