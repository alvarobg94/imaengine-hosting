#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/imaengine-hosting-stack';

const app = new cdk.App();
new WebsiteStack(app, 'ImaengineHostingStack', {
 domainName:'imaengine.org',
 env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});