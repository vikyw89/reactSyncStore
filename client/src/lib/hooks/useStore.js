import { useSyncExternalStore } from "react";

export const setNewStore = {};

let subscribers = {};

/**
 * A react hook to synchronize an external store with the current component's state.
 *
 * @param {String} selector - The key to access store value.
 * @returns {Object} The synchronized external store obj get and setFn with the selector name {selector,setSelector}.
 * @usage inside react component: const {counter, setCounter} = useStore('counter'), initial store value is undefined,
 * we can pre set the value using useEffect(()=>{},[]) or import store and change the value outside of react
 */
export const useStore = (selector) => {
  const store = setNewStore;
  if (!subscribers?.[selector]) {
    subscribers[selector] = [];
  }

  const getSnapshot = () => {
    return JSON.stringify(store?.[selector]);
  };

  const getServerSnapshot = () => {
    return JSON.stringify(store?.[selector]);
  };

  const setStore = (arg) => {
    switch (typeof arg) {
      case "function": {
        store[selector] = arg(store?.[selector]);
        break;
      }
      default:
        store[selector] = arg;
        break;
    }
    emitChange();
  };

  function subscribe(callback) {
    subscribers[selector] = [...subscribers[selector], callback];
    return () => {
      subscribers[selector] = subscribers[selector].filter(
        (el) => el !== callback
      );
    };
  }

  function emitChange() {
    for (let subscriber of subscribers[selector]) {
      subscriber();
    }
  }

  const capitalizedSelectorFirstChar = selector
    .match(new RegExp(String.raw`^[a-z]`, "i"))[0]
    .toUpperCase();
  const restOfSelectorChars = selector.replace(
    new RegExp(String.raw`^.`, "i"),
    ""
  );
  const setterName = `set${capitalizedSelectorFirstChar}${restOfSelectorChars}`;

  return {
    get [selector]() {
      useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
      return store?.[selector];
    },
    [setterName]: (valueOrFn) => {
      setStore(valueOrFn);
    },
  };
};

export const useStoreDebugger = () => {
  console.table({
    storeData: setNewStore,
    storeSubscribers: subscribers,
  });
};
