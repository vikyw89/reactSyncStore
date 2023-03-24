import { useStore } from "@/lib/hooks/useStore";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const { setCounter } = useStore("counter");
  console.log("rerender _app");
  return <Component {...pageProps} />;
}
