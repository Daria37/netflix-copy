import styles from './Header.module.scss'
import { Bell } from 'lucide-react';
import { useState } from 'react'
// import { Menu } from './Menu'

const Profile = () => {
	const [isOpen, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	return (
		<div className={styles['profile-wrapper']}>
			<div className={styles.notification}>
				<i><Bell /></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<div>
					<img
						src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
						alt=''
					/>
				</div>
				{/* <Root>
					<Control onClick={handleOpen} type='button'>{label}</Control>
					{
					isOpen && (
						<Menu>
						</Menu>       
					)
					}
				</Root> */}
				<i className='bx bx-caret-down'></i>
			</div>
		</div>
	)
}

export default Profile
