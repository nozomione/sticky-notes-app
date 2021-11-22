import { memo } from 'react';
import { Button, Icon } from '../../shared';
import { icons } from '../../../utils/icons';

interface Props {
    handleClick: () => void;
}

const ColorSetting: React.FC<Props> = ({ handleClick }) => {
    return (
        <Button 
            type="button"
            clickHandler={ handleClick }
            srOnlyText="Open settings">
            <Icon size="icon--xxs" path={ icons.dots } />
        </Button>
    )
}

export default memo(ColorSetting); 
