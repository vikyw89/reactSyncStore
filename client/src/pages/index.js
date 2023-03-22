import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StateCounter from "@/components/stateCounter";
import SyncCounter from "@/components/syncCounter";
import TimeUpdate from "@/components/timeUpdate";
import TimeCounter from "@/components/timeUpdate";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className={styles.main}>
        <StateCounter/>
        <SyncCounter props={'1'}/>
        <SyncCounter props={'2'}/>
        <SyncCounter props={'3'}/>
        <TimeCounter props={'1'}/>
      </div>
    </>
  );
}
