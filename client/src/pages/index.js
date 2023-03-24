import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StateCounter from "@/components/stateCounter";
import StoreCounter from "@/components/storeCounter";
import { externalStore, subscribers, useStore, useStoreDebugger, useStoreStats } from "@/lib/hooks/useStore";
import { useEffect, useState } from "react";
import { counterStore } from "@/lib/store/counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toggle, setToggle, debug } = useStore("toggle");
  const { setCounter } = useStore("counter");

  useEffect(() => {
    setToggle(false);
  }, []);
  useEffect(() => {
    useStoreDebugger()
  });
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
