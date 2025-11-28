import { z } from 'zod';
import type { LoginTokenSchema, JsonErrorSchema } from '../fixtures/schemas';

export type ApiRequestParams = {
    method: 'POST' | 'GET' | 'PATCH' | 'DELETE';
    url: string;
    baseUrl: string;
    body?: Record<string, unknown> | null;
    headers?: string;
};

export type ApiRequestResponse<T = unknown> = {
    status: number;
    body: T;
};

export type ApiRequestFn = <T = unknown>(
    params: ApiRequestParams
) => Promise<ApiRequestResponse<T>>;

export type ApiRequestMethods = {
    apiRequest: ApiRequestFn;
};

export type LoginTokenResponse = z.infer<typeof LoginTokenSchema>;
export type JsonErrorResponse = z.infer<typeof JsonErrorSchema>;
