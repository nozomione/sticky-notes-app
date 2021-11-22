import { useState, useEffect, memo } from 'react';
import { StickyColor } from '../../../../models';
import { useStickies, useSetStickies } from '../../../../hooks';
import { Button, Icon } from '../../../shared';
import { icons } from '../../../../utils/icons';
import styles from './ColorPicker.module.scss';

interface Props {
    id: number;
    i: number;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorPicker: React.FC<Props> = ({ id, i, show , setShow }) => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const [defaultColor, setDefaultColor] = useState('');
    const [palette, setPalette] = useState<string[]>([]);

    useEffect(() => {
        setDefaultColor(stickies[i].color);
        setPalette(Object.keys(StickyColor));
    }, [i, stickies])
  
    const handleChange = (_: React.ChangeEvent<HTMLInputElement>, color: string) => { 
        let stickyColor: StickyColor;
        switch(color) { 
            case "pink": 
                stickyColor = StickyColor.PINK;
                setDefaultColor(StickyColor.PINK);
                break;
            case "blue": 
                stickyColor = StickyColor.BLUE;
                setDefaultColor(StickyColor.BLUE);
                break;
            case "yellow": 
                stickyColor = StickyColor.YELLOW;
                setDefaultColor(StickyColor.YELLOW);
                break;
            case "green": 
                stickyColor = StickyColor.GREEN;
                setDefaultColor(StickyColor.GREEN);
                break;
            case "gray": 
                stickyColor = StickyColor.GRAY;
                setDefaultColor(StickyColor.GRAY);
                break;
            case "purple": 
                stickyColor = StickyColor.PURPLE;
                setDefaultColor(StickyColor.PURPLE);
                break;
            default: 
                return;
        }

        setStickies( prevState => {
            let result = [...prevState];
            result[i].color = stickyColor;
            return result;
        });
       
    }

    const handleClick = () => {
        setShow(false); 
    }

    const checkDefault= (color: string) => {
        return color === defaultColor;
    }   

    const renderPalette = () => {
        return palette.map( color => {    
            const c = color.toLowerCase();    
            return (
                <div 
                    key={ c } 
                    className={ styles[c] }>
                    <label htmlFor={ c }>
                        <span className="sr-only">{ c }</span>
                    </label>
                    <input 
                        type="radio" 
                        id={ `${c}-${id}` }
                        name={ `colors-${id}` }
                        value={ c }
                        onChange={ e => handleChange(e, e.target.value) }
                        checked={ checkDefault(c) }/>
                    <span>
                        <Icon size="icon--xl" path={ icons.check } />
                    </span>
                </div>)
        })
    };
    
    return (
        <>
         <div className={ styles.overlay }>
            <Button type="button" clickHandler={ handleClick }>
                Select Color
            </Button>
         </div>
        { stickies[i].id === id && 
        <div id={id.toString()}
            className={ show ? styles["color-picker"]: 
                `${styles["color-picker"]} ${styles.collapsed}` }>    
            { renderPalette() }
        </div> }
        </>
    )
}

export default memo(ColorPicker);
