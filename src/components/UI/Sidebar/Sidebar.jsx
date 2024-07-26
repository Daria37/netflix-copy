import styles from './Sidebar.module.scss'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSidebarShow, setIsSidebarShow}) => {
    return (
        <div className={styles.sidebar} style={{ width: isSidebarShow ? '30%' : '15%' }}>
            <button onClick={() => setIsSidebarShow(true)}>
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