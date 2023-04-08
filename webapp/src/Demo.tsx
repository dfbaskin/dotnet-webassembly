import { useMemo, useState } from "react";

import styles from "./Demo.module.scss";

export function Demo() {
  const [value, setValue] = useState<string>("");

  const doubled = useMemo(() => {
    const numValue = Number(value);
    return isNaN(numValue) || !globalThis.window.dotnetExports
      ? NaN
      : globalThis.window.dotnetExports.TestLib.SomeAPI.DoubleIt(numValue);
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
        <input name="doubled" readOnly value={isNaN(doubled) ? "" : doubled} />
      </label>
    </div>
  );
}
