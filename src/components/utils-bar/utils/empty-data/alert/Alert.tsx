import { memo } from 'react';
import { Button } from '../../../../shared';
import styles from './Alert.module.scss';

interface Props {
    handleClick: ()=> void;
    setAlert: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert: React.FC<Props> = ({ handleClick, setAlert }) => {

    const close = () => {
        setAlert(false);
    }
    
    return (
        <>
            <div className={ styles["alert-overlay"] }></div>
            <div className={ styles.alert }>
                <div className={ styles["alert-body"] }>
                    <h2>Are you sure you want to remove all data?</h2>
                    <div>
                        <Button 
                        type="button"
                        clickHandler={ handleClick }>
                            Yes
                        </Button>
                        <Button 
                            type="button"
                            clickHandler={ close }>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Alert);
