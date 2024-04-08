import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    
    return(
        <header className={styles.header}>
            <h1>Nexus Tech</h1>
            <div className={styles.links}>
                <Link to = "/" className={styles.link}>HOME</Link>
                <Link to = "/catalog" className={styles.link}>CATALOG</Link>
                <Link to = "/workstations" className={styles.link}>WORKSTATIONS</Link>
                <Link to = "/profile" className={styles.link}>PROFILE</Link>
                <Link to = "/about" className={styles.link}>ABOUT US</Link>
            </div>
        </header>
    )
}

export default Header