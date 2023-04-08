import { ChangeEvent, useMemo, useState } from "react";
import styles from "./Demo.module.scss";

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

export function Demo() {
  const [value, setValue] = useState<string>("");

  const doubled = useMemo(() => {
    const numValue = Number(value);
    return isNaN(numValue)
      ? 0
      : globalThis.window.dotnetExports
      ? globalThis.window.dotnetExports.TestLib.SomeAPI.DoubleIt(numValue)
      : 0;
  }, [value]);

  return (
    <div className={styles.demo}>
      <label>
        <span>Value:</span>
        <input
          name="value"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <label>
        <span>Doubled:</span>
        <input name="doubled" readOnly value={doubled} />
      </label>
    </div>
  );
}
