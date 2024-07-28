import styles from './Sidebar.module.scss'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const menu = ['Popular', 'TV Shows', 'Films', 'My list']

const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
	return (
		<div
			className={styles.sidebar}
			style={{ width: isSidebarShow ? '15%' : '10%' }}
		>
			<button onClick={() => setIsSidebarShow(!isSidebarShow)}>
				{/* <i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}></i> */}
                <i className={`${isSidebarShow ? <X /> : <Menu />}`}></i>
			</button>
			<ul className={isSidebarShow ? styles.show : ''}>
				{menu.map(title => (
					<li key={title}>
						<a href={title}>{title}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar
