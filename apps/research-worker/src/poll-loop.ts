export function createPollLoop(deps: {
  runner: {
    runNext(): Promise<unknown>;
  };
  pollIntervalMs: number;
}) {
  let timer: NodeJS.Timeout | null = null;

  return {
    start() {
      if (timer) {
        return;
      }

      timer = setInterval(() => {
        void deps.runner.runNext().catch((error: unknown) => {
          console.error("research worker run failed", error);
        });
      }, deps.pollIntervalMs);
    },

    stop() {
      if (!timer) {
        return;
      }

      clearInterval(timer);
      timer = null;
    }
  };
}
