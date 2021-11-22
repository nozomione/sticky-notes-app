import { useState, memo } from 'react';
import { useStickies, useSetStickies } from '../../../../hooks';
import { Button, Icon } from '../../../shared';
import { Alert } from './alert';
import { icons } from '../../../../utils/icons';
import styles from './EmptyData.module.scss';

export const EmptyData: React.FC = () => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const [alert, setAlert] = useState(false);

    const handleClick = () => {
        setAlert(true);
    };

    const emptyDate = () => {
        localStorage.clear();
        setStickies([]);
        setAlert(false);
    }

    return (
        <>
        <div className={ styles["clear-storage"] }>
        <Button 
            type="button"
            clickHandler={ handleClick }
            disabled={ stickies.length === 0 }>
            <Icon size="icon--s" path={ icons.clear_storage } />
            Empty Data ({ stickies.length })
        </Button>
        </div>
        { alert && <Alert handleClick={ emptyDate } setAlert={ setAlert }/>}
        </>
    )
}

export default memo(EmptyData);