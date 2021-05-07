import React from 'react';

type ReturnType<T> = [
        T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

const useLocalStorage = <T, >(key: string, initialValue?: T): ReturnType<T> => {
    const [state, setState] = React.useState<T | undefined>(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
                return initialValue;
            }

        }
    );

    const prevKey = React.useRef(key) as React.MutableRefObject<string>;

    React.useEffect(() => {
        if(prevKey.current !== key){
            localStorage.removeItem(prevKey.current);
        }
        if(state){
            try{
                prevKey.current = key;
                localStorage.setItem(key, JSON.stringify(state));
            }catch (err){
                console.log(err);
            }
        }
    }, [state])

    return [state, setState];
}

export default useLocalStorage;