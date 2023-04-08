declare global {
  interface Window {
    dotnetExports?: {
      TestLib: {
        SomeAPI: {
          DoubleIt: (value: number) => number;
        };
        QR: {
          Generate: (text: string, pixelsPerBlock: number) => string;
        };
      };
    };
  }
}

export {};
