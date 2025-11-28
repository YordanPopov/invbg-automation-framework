import { z } from 'zod';

export const Error400Schema = z.object({
    error: z.string(),
});

export const Error401Schema = z.object({
    status: z.string(),
    message: z.string(),
});

export const Error500Schema = z.object({
    error: z.string(),
});
