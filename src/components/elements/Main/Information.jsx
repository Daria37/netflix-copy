import Button from '../../UI/Button/Button'
import styles from './Main.module.scss'
import { Plus } from 'lucide-react';
import { Play } from 'lucide-react';

const Information = ({ movie }) => {
	const addToFavorites = movieName => {
		let favorites = localStorage.getItem('favMovies')

		if (favorites) {
			favorites = JSON.parse(favorites)
			localStorage.setItem('favMovies', [...favorites, movieName])
			alert(`${movieName} теперь в избранном!`)
		}
	}

	return (
		<div className={styles.info}>
			<img
				src={movie.logo}
				alt={movie.name}
				width='200'
				style={{ opacity: 0.7 }}
			/>

			<div className={styles.additional}>
				<span>{movie.year}</span>
				<span>{movie.limitAge}</span>
				<span>{movie.rating}</span>
				<span>{movie.duration}</span>
			</div>

			<div className={styles.description}>{movie.description}</div>

			<div className={styles.buttons}>
                <Button cb={() => console.log('video is open')/* setModulSHow(true) */ }>
                    <i style={{ color: 'c62e21' }}><Play /></i>
                    <span>Play</span>
                </Button>
                <Button cb={addToFavorites}>
                    <i><Plus /></i>
                    <span>My list</span>
                </Button>
            </div>
		</div>
	)
}

export default Information
