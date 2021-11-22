import { memo } from 'react';

interface Props {
    size: string;
    path: string;
}

const Icon: React.FC<Props> = ({ size, path }) => {
    return (
        <svg className={ size } aria-hidden="true">
           <use xlinkHref={ path } />
        </svg>
    )
}

export default memo(Icon);