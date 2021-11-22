import { useState, memo } from 'react';
import { StickiesProvider } from '../context';
import { useMatchMedia } from '../hooks';
import { 
    UtilsBar, 
    AddNote,
    SearchNote, 
    SortNotes, 
    EmptyData
} from './utils-bar';
import { ListNotes } from './list-notes';

const Stickies: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const isMin1080 = useMatchMedia('(min-width: 1080px)');

    const stickiesContainer = {   
        rules: (match: boolean) => ({
            width: match ? "80%" : "100%",
            margin: "0 auto",
            padding: "15px 15px 30px"
        })
    }

    return (
        <div style={ stickiesContainer.rules(isMin1080) }>
            <StickiesProvider>
                <UtilsBar>
                    <div>
                        <AddNote />
                        <EmptyData />
                    </div>
                    <div>
                        <SearchNote 
                            searchText={ searchText } 
                            setSearchText={ setSearchText }/>
                        <SortNotes />
                    </div>       
                </UtilsBar>
                <ListNotes searchText={ searchText }/>
            </StickiesProvider>
        </div>
    )
}

export default memo(Stickies);
