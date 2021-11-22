import { createContext, useState, useEffect } from 'react';
import { stickyInterface } from '../models';

export const stickiesContext = createContext<stickyInterface[]>([]);
export const setStickiesContext= createContext<React.Dispatch<React.SetStateAction<stickyInterface[]>> | null>(null);

const StickiesProvider: React.FC = ({ children }) => {  
    const [ stickies, setStickies ] = useState<stickyInterface[]>([]);

    useEffect(() => {
        const data = JSON.parse(
            localStorage.getItem('data-stickies-app')!
        );

        if(data) {
            setStickies(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'data-stickies-app', 
            JSON.stringify(stickies)
        );
    }, [stickies]);
    
    return (
        <stickiesContext.Provider value={ stickies }>
            <setStickiesContext.Provider value={ setStickies }>
                { children }
            </setStickiesContext.Provider>
        </stickiesContext.Provider>
    );
}

export default StickiesProvider;