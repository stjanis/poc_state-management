import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const add = () => dispatch(increment());
  const subtract = () => dispatch(decrement());
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
