import { useState, useEffect, useRef, memo } from 'react';
import { useStickies, useSetStickies } from '../../hooks';
import { SaveNote } from './save-note';
import { DeleteNote } from './delete-note';
import { ToggleNote } from './toggle-note';
import { ColorSetting, ColorPicker } from './color-setting';
import { DateModified } from './date-modified';
import styles from './Note.module.scss';

interface Props {
    id: number;
    text: string;
    color: string;
}

const Note: React.FC<Props> = ({ id, text, color }) => {
    const stickies = useStickies();
    const setStickies = useSetStickies()!;
    const [ expandNote, setExpandNote ] = useState(false);
    const [ showColorPicker, setShowColorPicker ] = useState(false); 
    const [ userInput, setUserInput ] = useState('');
    const [ typing, setTyping ] = useState(false);
    const [ saved, setSaved ] = useState(false);
    const editableRef = useRef<HTMLDivElement>(null);
    const i = stickies.findIndex(sticky => sticky.id === id);


    useEffect(() => {
        editableRef.current!.innerHTML = text;
    }, [text]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setSaved(false);
            setTyping(false);
        }, 3500); 
        
        return () => {
            clearTimeout(timer);
        }
    }, [stickies]);

    const toggleClass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpandNote(e.target.checked);
    }

    const toggleColorPicker = () => {
        setShowColorPicker(!showColorPicker);
    }

    const inputHandle = (e: React.FormEvent<HTMLDivElement>) => {    
        if(e.currentTarget.textContent !== stickies[i].text) {  
            setTyping(true);  
            setUserInput(e.currentTarget.innerHTML!); 
        } else {
            setTyping(false);
        }
    }

    const saveChange = () => {
        setStickies( prevState => {
                let result = [...prevState];
                result[i].text = userInput; 
                result[i].modified = Date.now();
                editableRef.current!.innerHTML = userInput;

                return result;
            });
        
        setSaved(true);
    }

    const renderH6 = () => `${editableRef.current?.textContent?.substr(0, 20)}...`;

    return (
        <div 
            className={ expandNote ?
                `${styles.note} ${styles["note-"+color]} ${styles.collapsed}` : 
                `${styles.note} ${styles["note-"+color]}` }>
            
            { showColorPicker && 
                <ColorPicker id={ id } 
                    i={ i }
                    show={ showColorPicker }
                    setShow={ setShowColorPicker }/> }

            <div className={ styles["note-header"]} >
                <ToggleNote handleChange={ toggleClass } />
                { !!expandNote && <h6>{ renderH6() }</h6>}
                <div style={ { display: "flex", justifyContent: "center" } }>
                    <ColorSetting handleClick={ toggleColorPicker } />
                    <DeleteNote id={ id } />
                </div>
            </div>
            <div className={ styles["note-body"] }> 
                <div 
                    className={ styles["note-body-editable"] } 
                    onInput={ inputHandle.bind(this) }
                    contentEditable={ true }
                    suppressContentEditableWarning={ true }
                    ref={ editableRef }>
                </div>
            </div>
            <div className={ styles["note-footer"] }> 
                 <DateModified 
                    modified={ stickies[i].modified } 
                    saved={ saved }/>
                { typing && <SaveNote saved={ saved } handleClick={ saveChange }/> }
            </div>
        </div>
    )
}
export default memo(Note);
