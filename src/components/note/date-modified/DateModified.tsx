import { useRef, useEffect, memo } from 'react';
import { Icon } from '../../shared';
import { icons } from '../../../utils/icons';
import styles from './DateModified.module.scss';

interface Props {
    modified: number;
    saved: boolean;
}

const DateModified: React.FC<Props> = ({ modified, saved }) => {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(saved) {
            divRef.current!.classList.add(`${styles.saved}`);
        } else {
            divRef.current!.classList.remove(`${styles.saved}`);
        }
    }, [saved]);

    const formattedDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const weekday = date.toLocaleString('en-us', { weekday: 'long' })
        const year = date.getFullYear();
        const month = date.toLocaleString('en-us', { month: 'short' }); 
        const day = date.getDay();
        const time = date.toLocaleString( 'en-us', 
            { hour: 'numeric', minute: 'numeric', hour12: true });
            
        return `${weekday}, ${month} ${day} ${year} ${time}`;
    }

    return (
         <div 
            className={ styles["date-modified"] }
            ref={ divRef }>
            <div className={ styles.date }>
                <Icon size="icon--xxs" path={ icons.timer } />
                <span style={{ margin:"2px 0 0 2px" }}>
                    { formattedDate(modified) }
                </span>
            </div>   
        </div>
    )
}

export default memo(DateModified); 
