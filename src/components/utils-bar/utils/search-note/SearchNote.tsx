import { memo } from 'react';
import { useStickies } from '../../../../hooks';
import styles from './SearchNote.module.scss';

interface Props {
	searchText: string;
	setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const SearchNote: React.FC<Props> = ({ searchText, setSearchText }) => {
	const stickies = useStickies();

	return (
		<div className={styles['search-bar']}>
			<input 
				type='search' 
				id='search' 
				value={ searchText }
				onChange={ e => setSearchText(e.target.value) }
				placeholder='Search note...' 
				disabled={ stickies.length === 0 }/>
			<label htmlFor='search'>
				<span className='sr-only'>Search your note</span>
			</label>
			<span></span>
		</div>
	);
};

export default memo(SearchNote);
