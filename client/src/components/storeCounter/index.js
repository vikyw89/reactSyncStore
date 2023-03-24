import { useStore } from "@/lib/hooks/useStore";

const StoreCounter = ({ props }) => {
  const { counter, setCounter } = useStore("counter");
  console.log(`rerendering useStore ${props}`);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <div>counter #{props} using useStore</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => {
              setCounter((p) => p + 1);
            }}
          >
            +
          </button>
          <div>{counter}</div>
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => {
              setCounter((p) => p - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default StoreCounter;
