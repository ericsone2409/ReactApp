// flow-typed signature: 2a1761105599b11fa527c198852e859c
// flow-typed version: 187dc46bbb/react-addons-perf_v15.x.x/flow_>=v0.23.x

declare module 'react-addons-perf' {
  declare function start(): void;
  declare function stop(): void;
  declare function printWasted(): void;
  declare function getLastMeasurements(): mixed;
  declare function printInclusive(): void;
  declare function printExclusive(): void;
  declare function printOperations(): void;
}

