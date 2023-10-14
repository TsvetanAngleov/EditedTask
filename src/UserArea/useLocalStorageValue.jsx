import { useSyncExternalStore } from 'react';

function useLocalStorageValue(key, interval = 100) {
  const subscribe = (callback) => {
    let enabled = true;
    const waitUntil = () =>
      setTimeout(() => {
        callback();
        if (enabled) waitUntil();
      }, interval);
    waitUntil();
    return () => {
      enabled = false;
    };
  };

  const getSnapShot = () => {
    return localStorage.getItem(key);
  };

  return useSyncExternalStore(subscribe, getSnapShot, getSnapShot);
}

export default useLocalStorageValue;