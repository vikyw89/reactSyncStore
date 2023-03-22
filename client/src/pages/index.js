import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { counterStore } from "../lib/stores/counterStore";
import StateCounter from "@/components/stateCounter";
import SyncCounter from "@/components/syncCounter";
import { forDebug } from "@/lib/hooks/useSync";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <div className={styles.main}>
        <StateCounter/>
        <SyncCounter props={'1'}/>
        <SyncCounter props={'2'}/>
        <SyncCounter props={'3'}/>
      </div>
    </>
  );
}
