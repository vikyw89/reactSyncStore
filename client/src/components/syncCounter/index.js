import { forDebug, sync, useSync } from "@/lib/hooks/useSync";
import { counterStore } from "@/lib/stores/counterStore";
import { cloneDeep } from "lodash-es";
import { useEffect } from "react";


const SyncCounter = ({props}) => {
  const counter = useSync(counterStore);
  console.log(`rerendering ${props}`)
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
        <div>A counter using useSync</div>

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
            onClick={() => counter().increment()}
          >
            +
          </button>
          <div>{counter().state.count}</div>
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => counter().decrement()}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default SyncCounter;
