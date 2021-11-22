import { memo } from 'react';
import { useStickies, useSetStickies } from '../../../hooks';
import { Button, Icon } from '../../shared';
import { icons } from '../../../utils/icons';
import styles from './DeleteNote.module.scss';

interface Props {
    id: number;
}

const DeleteNote: React.FC<Props> = ({ id }) => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const handleClick = () => {
        setStickies(stickies.filter(sticky => sticky.id !== id))
    }
    
    return (
        <Button
            type="button"
            customClass={ styles["btn-delete"] }
            clickHandler={ handleClick }
            srOnlyText="Delete this note">
                <Icon size="icon--xs" path={ icons.trash } />
        </Button>
    )
}

export default memo(DeleteNote);
