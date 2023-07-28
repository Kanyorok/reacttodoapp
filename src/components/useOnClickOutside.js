import { useEffect } from "react";

export const useOnClickOutside = (ref, currentState, updater) => {
    useEffect(() => {
        const handleClickOutside = event => {
        if (currentState && ref.current && !ref.current.contains(event.target)) {
            updater();
        }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [currentState, ref, updater]);
};