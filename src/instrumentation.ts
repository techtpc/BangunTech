export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const originalEmit = process.emit;
    // @ts-ignore
    process.emit = function (name: string | symbol, data: any, ...args: any[]) {
      if (
        name === 'warning' &&
        typeof data === 'object' &&
        data.name === 'DeprecationWarning' &&
        data.message &&
        data.message.includes('module.register()')
      ) {
        return false;
      }
      // @ts-ignore
      return originalEmit.apply(process, [name, data, ...args]);
    };
  }
}
