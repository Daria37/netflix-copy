import styles from './Search.module.scss'
import { SearchCheck } from 'lucide-react';
import { Waypoints } from 'lucide-react';

const Search = () => {
	return (
		<div className={styles.search}>
			<div>
				<i>
				<SearchCheck size={17}/>
				</i>
				<input type='text' placeholder='I`m searching for...' />
			</div>
			<i>
			<Waypoints size={17}/>
			</i>
		</div>
	)
}

export default Search
