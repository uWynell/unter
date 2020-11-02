export type Path = string;
export type Handler = (path: Path, ...data: unknown[]) => void;

export class Unter {
  handlers = new Map<string, Handler>();
  on(path: string, handler: Handler): void {
    if (typeof handler !== 'function') {
      throw new TypeError(`Handler should be type of function, received: ${typeof handler}`);
    }
    this.handlers.set(path, handler);
  }
  dispatch<T extends Array<unknown>>(path: string, ...data: T): ReturnType<Handler> {
    const handler = this.handlers.get(path);
    if (typeof handler !== 'function') { return; }
    return handler(path, ...data);
  }
}
