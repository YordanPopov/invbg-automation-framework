import { z } from 'zod';

import {
    Error400Schema,
    Error401Schema,
    Error500Schema,
} from '../fixtures/error-schemas';

export const LoginTokenSchema = z.object({
    token: z.string(),
    expires: z.number().int(),
    expires_string: z.string(),
});

export const JsonErrorSchema = {
    400: Error400Schema,
    401: Error401Schema,
    500: Error500Schema,
};
