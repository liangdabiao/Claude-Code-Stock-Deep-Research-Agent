export type PersistentConnectionHandlers = {
  onMessage(event: unknown): Promise<void>;
  onCardAction(event: unknown): Promise<void>;
};

export type PersistentConnection = {
  start(): Promise<void>;
  stop(): Promise<void>;
};

export function createPersistentConnection(
  _handlers: PersistentConnectionHandlers
): PersistentConnection {
  return {
    async start() {
      return undefined;
    },
    async stop() {
      return undefined;
    }
  };
}
