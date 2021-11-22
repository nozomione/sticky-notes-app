import { memo } from 'react';
import { Button } from '../../shared';
import styles from './SaveNote.module.scss';

interface Props {
    saved: boolean;
    handleClick: () => void;
}

const SaveNote: React.FC<Props> = ({ saved, handleClick }) => {
    return (
        <div className={ saved ? 
            `${styles["save-note"]} ${styles.success}` : 
            styles["save-note"] }>
            <Button 
                type="button"
                clickHandler={ handleClick }
                srOnlyText="Save change">
                Save
            </Button>
        </div>
    )
}

export default memo(SaveNote); 
