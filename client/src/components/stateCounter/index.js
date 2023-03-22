import { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState(0);

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
        <div>A counter using useState</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap:'10px'
          }}
        >
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => setCount((p) => p + 1)}
          >
            +
          </button>
          <div>{count}</div>
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => setCount((p) => p - 1)}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default StateCounter;
