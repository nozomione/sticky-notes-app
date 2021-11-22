import { memo } from 'react';
import { Icon } from '../../shared';
import { icons } from '../../../utils/icons';
import styles from './ToggleNote.module.scss';

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleNote: React.FC<Props> = ({ handleChange }) => {
    return (
        <div className={ styles["btn-toggle"] }>
            <Icon size="icon--xs" path={ icons.minus } />
            <input type="checkbox" onChange={ handleChange } />
        </div>
    )
}

export default memo(ToggleNote);
