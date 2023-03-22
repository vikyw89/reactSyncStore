import { emitChange, useSync } from "@/lib/hooks/useSync";
import { timeStore } from "@/lib/stores/timeStore";


const TimeCounter = ({props}) => {
  const counter = useSync(timeStore);
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
        <div>counter #{props} using useSync</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap:'10px'
          }}
        >
          <div>{counter().state}</div>
          <button
            style={{
              padding: "5px",
              fontWeight: "bold",
            }}
            onClick={() => {
                counter().sync()
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default TimeCounter;
