import "./App.scss";
import { Demo } from "./Demo";
import { QR } from "./QR";

export function App() {
  return (
    <div className="main-content">
      <header>
        <h1>.NET / WebAssembly Example</h1>
      </header>
      <section>
        <Demo />
      </section>
      <section>
        <QR />
      </section>
    </div>
  );
}
