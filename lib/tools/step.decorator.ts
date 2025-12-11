import { test } from '@playwright/test';

export function step(stepName?: string) {
    return function decorator(target: Function, context: ClassMemberDecoratorContext) {
        return function replacementMethod(...args: any) {
            const className = this.constructor.name;
            const methodName = context.name as string;
            let name = stepName || `${className}. ${methodName}`;

            return test.step(name, async () => {
                return await target.call(this, ...args);
            });
        };
    };
}
