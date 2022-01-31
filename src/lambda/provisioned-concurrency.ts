import { Schedule } from 'aws-cdk-lib/aws-events';
import { Alias, Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { ProvisionedConcurrencyConfiguration } from './provisioned-concurrency-configuration';

export class ProvisionedConcurrency extends Construct {

  constructor(scope: Construct, id: string, func: Function, props: ProvisionedConcurrencyConfiguration) {
    super(scope, id);

    const alias = new Alias(scope, 'Alias', {
      aliasName: 'pc',
      version: func.currentVersion,
    });

    const target = alias.addAutoScaling({
      minCapacity: props.minCapacity,
      maxCapacity: props.maxCapacity,
    });

    target.scaleOnUtilization({
      utilizationTarget: props.utilizationTarget,
    });

    target.scaleOnSchedule('ScaleUpInTheMorning', {
      schedule: Schedule.cron(props.from),
      minCapacity: props.minCapacity,
    });

    target.scaleOnSchedule('ScaleDownAtNight', {
      schedule: Schedule.cron(props.to),
      maxCapacity: props.maxCapacity,
    });
  }
}