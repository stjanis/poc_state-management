import { Counter, Overview } from "./components";

function App() {
  return (
    <div style={{ margin: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Testing State Management</h1>
      <Counter />
      <Overview />
    </div>
  );
}

export default App;
