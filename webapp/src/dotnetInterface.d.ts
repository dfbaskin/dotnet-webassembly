declare global {
  interface Window {
    dotnetExports?: {
      TestLib: {
        SomeAPI: {
          DoubleIt: (value: number) => number;
        };
      };
    };
  }
}

export {};
