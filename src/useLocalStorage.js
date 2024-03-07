import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        
        const localData = localStorage.getItem(key);
        if (localData === null) {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        } else {
            return (JSON.parse(localData));
        }
    });

    const storeAsLocalValue = (newValue) => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, storeAsLocalValue];
}

export default useLocalStorage;
