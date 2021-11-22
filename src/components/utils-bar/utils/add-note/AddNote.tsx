import { memo } from 'react';
import { StickyColor } from '../../../../models';
import { useStickies, useSetStickies } from '../../../../hooks';
import { Button, Icon } from '../../../shared';
import { icons } from '../../../../utils/icons';
import styles from  './AddNote.module.scss';

const AddNote: React.FC = () => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const len = Object.keys(StickyColor).length;

    const getRandomColor = () => {
        const n = Math.floor(Math.random() * len);

        switch(n) {
            case 0: 
                return StickyColor.PINK;
            case 1: 
                return StickyColor.BLUE;
            case 2: 
                return StickyColor.YELLOW;
            case 3: 
                return StickyColor.GREEN;
            case 4: 
                return StickyColor.GRAY;
            case 5: 
                return StickyColor.PURPLE;
            default:
                return StickyColor.PINK;
        }
    }

    const handleClick = () => {
        setStickies([
            ...stickies, 
            {
                id: Date.now(),
                text: '',
                color: getRandomColor(),
                modified: Date.now()
            }
        ])
    }

    return (
        <div className={ styles["btn-add"] }>
            <Button 
                type="button"
                clickHandler={ handleClick }
                srOnlyText="Add a new note">
                <Icon size="icon--md" path={ icons.add } />
            </Button>
        </div>
    )
}

export default memo(AddNote); 
