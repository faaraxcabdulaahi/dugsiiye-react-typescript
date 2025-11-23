import UseNumberStorage from "../page/UseNumberStorage";

export default function Counter() {
  const [count, setCount] = UseNumberStorage({
    storageKey: "counter",
    initialValue: 0,
  });

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
