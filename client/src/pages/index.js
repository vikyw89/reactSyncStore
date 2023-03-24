import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StateCounter from "@/components/stateCounter";
import StoreCounter from "@/components/storeCounter";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className={styles.main}>
        <StateCounter/>
        <StoreCounter props={'1'}/>
      </div>
    </>
  );
}
