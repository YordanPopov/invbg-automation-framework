import { test as base, mergeTests, request } from '@playwright/test';
import { test as apiRuquestFixture } from './api-request-fixtures';

const test = mergeTests(apiRuquestFixture);
const expect = base.expect;

export { test, expect, request };
