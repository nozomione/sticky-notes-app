import { useState, memo } from 'react';
import { useStickies, useSetStickies } from '../../../../hooks';
import { Button } from '../../../shared';
import styles from './SortNotes.module.scss';

const SortNotes: React.FC = () => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const [sorted, setSorted] = useState(false);
    
    const handleClick = () => {
        setSorted(!sorted);        
        setStickies( prevState => {
           return  sorted ? 
                    [...prevState].sort((a, b) =>  a.id - b.id) : 
                    [...prevState].sort((a, b) =>  b.id - a.id)
        });
    }

    const renderIcon = () => sorted ? <>&#9660;</> : <>&#9650;</>;
     
    return (
        <div className={ styles["btn-sort"] }>
            <Button 
                type="button"
                clickHandler={ handleClick }
                srOnlyText={ sorted ? "Sort by oldest" : "Sort by newest" }
                disabled={ stickies.length === 0 }>
                By Created: { renderIcon() }
            </Button>
        </div>
    )
}

export default memo(SortNotes);
