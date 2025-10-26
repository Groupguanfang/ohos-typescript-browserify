// perf_hooks-polyfill.js
export const performance = globalThis.performance || {
  now: () => Date.now(),
  mark: () => {},
  measure: () => {},
  clearMarks: () => {},
  clearMeasures: () => {},
};

export class PerformanceObserver {
  constructor() {}
  observe() {}
  disconnect() {}
}

export function monitorEventLoopDelay() {
  return {
    enable() {},
    disable() {},
    percentile() { return 0 },
    reset() {},
  };
}
