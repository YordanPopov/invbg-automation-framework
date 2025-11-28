import { test as base, mergeTests, request } from '@playwright/test';
import { test as apiRequestFixture } from './api-request-fixtures';

const test = mergeTests(apiRequestFixture);
const expect = base.expect;

export { test, expect, request };
