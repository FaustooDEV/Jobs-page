import {useState, useEffect} from "react";

export function useSessionStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = window.sessionStorage.getItem(key);
            if (saved !== null) {
                return JSON.parse(saved);
            } 
        }
        
        return initialValue;

    });

    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(storedValue))
    }, [storedValue]);


    return [storedValue, setStoredValue];
};