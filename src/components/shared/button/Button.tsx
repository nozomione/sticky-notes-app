import { memo } from 'react';
import styles from './Button.module.scss'

interface Props {
    type: 'submit' | 'button' | 'reset';
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    customClass?: string;
    srOnlyText?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ 
    type, 
    clickHandler, 
    customClass, 
    srOnlyText, 
    disabled,
    children }) => {
    
    return (
        <button 
            type={ type }
            className={ `${styles["btn"]} ${customClass}` }
            onClick={ clickHandler }
            disabled={disabled}>
            <span className="sr-only">
                { srOnlyText }
            </span>
                { children }
        </button>
    )
}

export default memo(Button);
