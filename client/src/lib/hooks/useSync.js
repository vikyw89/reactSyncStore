import { useSyncExternalStore } from "react";

export const forDebug = {
  get subscribersCount() {
    return subscribers.length;
  },
};

let subscribers = [];

const subscribe = (callback) => {
  subscribers = [...subscribers, callback];
  return () => {
    subscribers = subscribers.filter((el) => el !== callback);
  };
};

export const emitChange = () => {
  for (let subscriber of subscribers) {
    subscriber();
  }
};

/**
 * A hook to synchronize an external store with the current component's state.
 *
 * @param {Object} externalStore - The external store to synchronize with.
 * @returns {Object} The synchronized external store.
 */
export const useSync = (externalStore) => {
  const getSnapshot = () => {
    return JSON.stringify(externalStore);
  };

  const getServerSnapshot = () => {
    return JSON.stringify(externalStore);
  };

  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const output = () => {
    setTimeout(()=>{
     emitChange() 
    })
    return externalStore
  }

  return output
};