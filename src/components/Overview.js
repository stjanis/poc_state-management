import { useSelector } from "react-redux";

const Overview = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div
      style={{ background: "#f1f1f1", padding: "20px", marginBottom: "20px" }}
    >
      <h2>Overview</h2>
      <p>Current Counter Count value is {count}</p>
    </div>
  );
};

export default Overview;
