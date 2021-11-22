import { memo } from 'react';
import styles from './UtilsBar.module.scss';

type Props = {
    children: React.ReactNode
}

const UtilsBar: React.FC<Props> = ({ children }) => {
    return (
        <div className={ styles["utility-bar"] }>
            { children }
        </div>
    )
}

export default memo(UtilsBar)
