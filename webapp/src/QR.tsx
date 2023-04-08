import { useMemo, useState } from "react";

import styles from "./QR.module.scss";

export function QR() {
  const [value, setValue] = useState<string>("");

  const imageSrc = useMemo(() => {
    if (!value || !globalThis.window.dotnetExports) {
      return undefined;
    }

    const imageValue = globalThis.window.dotnetExports?.TestLib.QR.Generate(value, 10);
    return `data:image/bmp;base64, ${imageValue}`;
  }, [value]);

  return (
    <div className={styles.qr}>
      <label>
        <span>Text:</span>
        <input
          name="value"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <div>{imageSrc && <img src={imageSrc} alt="QR Code" />}</div>
    </div>
  );
}
