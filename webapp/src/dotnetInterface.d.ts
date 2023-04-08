declare global {
  interface Window {
    dotnetInterface: {
      TestLib: {
        SomeAPI: {
          DoubleIt: (value: number) => number;
        };
      };
    };
  }
}
