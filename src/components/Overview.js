import { useRecoilValue, selector } from "recoil";
import { counterState } from "./Counter";

const taxesSummary = selector({
  key: "taxesSummary",
  get: ({ get }) => {
    const count = get(counterState);
    return count * 1.5;
  },
});

const Overview = () => {
  const currentCount = useRecoilValue(counterState);
  const taxValue = useRecoilValue(taxesSummary);

  return (
    <div
      style={{ background: "#f1f1f1", padding: "20px", marginBottom: "20px" }}
    >
      <h2>Overview</h2>
      <p>Current Counter Count value is {currentCount}</p>
      <p>Current Counter Count value is {taxValue}</p>
    </div>
  );
};

export default Overview;
