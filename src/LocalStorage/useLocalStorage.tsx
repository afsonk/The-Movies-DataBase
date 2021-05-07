import React from 'react';

type ReturnType<T> = [
        T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

const useLocalStorage = <T, >(key: string, initialValue?: T): ReturnType<T> => {
    const [state, setState] = React.useState<T | undefined>(() => {
            let value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
            return initialValue;
        }
    );

    const prevKey = React.useRef(key) as React.MutableRefObject<string>;

    React.useEffect(() => {
        if(prevKey.current !== key){
            localStorage.removeItem(prevKey.current);
        }
        prevKey.current = key;
        localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, setState];
}

export default useLocalStorage;