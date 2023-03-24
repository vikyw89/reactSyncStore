import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StateCounter from "@/components/stateCounter";
import StoreCounter from "@/components/storeCounter";
import { externalStore, subscribers, useStore } from "@/lib/hooks/useStore";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toggle, setToggle } = useStore("toggle");
  const { counter, setCounter } = useStore("counter");
  const [state, setState] = useState(externalStore);

  console.log('rerender Home')
  useEffect(() => {
    setToggle(false);
    setCounter(0);
  }, []);
  useEffect(() => {
    console.log("externalStore change");
  }, [externalStore]);
  return (
    <>
      <div className={styles.main}>
        <div>toggle {JSON.stringify(toggle)}</div>
        <button
          onClick={() => {
            setCounter((p) => p + 1);
            setToggle((p) => !p);
          }}
        >
          toggle
        </button>
        <StateCounter />
        <StoreCounter props={"1"} />
        <StoreCounter props={"2"} />
      </div>
    </>
  );
}
