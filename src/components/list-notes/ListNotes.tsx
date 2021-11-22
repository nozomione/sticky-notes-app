import { memo } from 'react';
import { useStickies } from '../../hooks';
import { Note }  from '../note';
import styles from './ListNotes.module.scss';

interface Props {
    searchText: string;
}

const ListNotes: React.FC<Props> = ({ searchText }) => {
    const stickies = useStickies();

    const renderList = () => {
        if(searchText.trim().length !== 0 ) {
            let searchedResult = [...stickies]; 
            searchedResult = stickies
                .filter( sticky => sticky.text
                    .toLocaleLowerCase()
                    .includes(searchText
                    .toLowerCase()));
            
            return searchedResult.map( sticky => 
                    <Note 
                        key={ sticky.id }
                        id={ sticky.id }
                        text={ sticky.text }
                        color={ sticky.color }
                    />);
        } 

        return stickies.map( sticky => 
                <Note 
                    key={ sticky.id }
                    id={ sticky.id }
                    text={ sticky.text }
                    color={ sticky.color }
                 />);
    }
        
    return (
        <div className={ styles["list-notes"] }>
            { stickies.length !== 0 ? renderList() : 
                <p className={ styles["info-text"] }>No note to display. Please add a new note.</p>}
            { searchText && renderList().length === 0 && 
                <p className={ styles["info-text"] }>
                 No match found for "<strong>{ searchText }</strong>"<br/><br/>
                 Please try different keywords.
                </p>}
        </div>
    )
}

export default memo(ListNotes);
