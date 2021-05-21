import { atom, useRecoilState } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);
  return (
    <div
      style={{ background: "#f1f1f1", padding: "20px", marginBottom: "20px" }}
    >
      <h2>Counter</h2>
      <p>Current count is {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract} style={{ margin: "0 20px" }}>
        Subtrack
      </button>
    </div>
  );
};

export default Counter;
