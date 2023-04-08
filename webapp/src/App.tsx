import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-content">
      <header>
        <h1>.NET / WebAssembly Example</h1>
      </header>
    </div>
  );
}
