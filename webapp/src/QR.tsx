import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "./debounce";

import styles from "./QR.module.scss";

export function QR() {
  const [value, setValue] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");

  const renderQR = useCallback(
    debounce((text: string) => {
      const imageValue = globalThis.window.dotnetExports?.TestLib.QR.Generate(
        text,
        10
      );
      const src = `data:image/bmp;base64, ${imageValue}`;
      setImageSrc(src);
    }, 500),
    []
  );

  useEffect(() => {
    if (value && globalThis.window.dotnetExports) {
      renderQR(value);
    }
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
