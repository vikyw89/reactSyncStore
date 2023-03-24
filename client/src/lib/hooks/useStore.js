import { useSyncExternalStore } from "react";

let externalStore = { counter: 1 };

let subscribers = [];

/**
 * A hook to synchronize an external store with the current component's state.
 *
 * @param {String} selector - The key to access store value.
 * @returns {Object} The synchronized external store obj get and setFn with the selector name {selector,setSelector]}.
 */
export const useStore = (selector) => {
  const getSnapshot = () => {
    return JSON.stringify(externalStore[selector]);
  };

  const getServerSnapshot = () => {
    return JSON.stringify(externalStore[selector]);
  };

  const setStore = (arg) => {
    switch (typeof arg) {
      case "function": {
        externalStore[selector] = arg(externalStore[selector]);
        //   console.log(arg(externalStore[selector]));
        break;
      }
      default:
        externalStore[selector] = arg;
        break;
    }
    emitChange();
  };
  const capitalizedSelectorFirstChar = selector.match(new RegExp(
    String.raw`^[a-z]`,'i'
  ))[0].toUpperCase()
  const restOfSelectorChars = selector.replace(new RegExp(
    String.raw`^.`,'i'
  ),'')
  const setterName = `set${capitalizedSelectorFirstChar}${restOfSelectorChars}`

  return {
    get [selector]() {
      useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
      return externalStore[selector];
    },
    [setterName]: (valueOrFn) => {
      setStore(valueOrFn)
    },
  };
};

function subscribe(callback) {
  subscribers = [...subscribers, callback];
  return () => {
    subscribers = subscribers.filter((el) => el !== callback);
  };
}

function emitChange() {
  for (let subscriber of subscribers) {
    subscriber();
  }
}
