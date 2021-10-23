import { useEffect, useState } from 'react';

const useLocalState = ( key, defaultValue ) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const localState = window.sessionStorage.getItem(key);
      return localState !== null ? JSON.parse(localState) : defaultValue;
    }
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue]
};

export default useLocalState;