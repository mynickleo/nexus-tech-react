import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"
import "../../assets/__mocks__/terminal.png"

const NotFound = () => {
    return(
        <div className={styles.main}>
            <section className={styles.info}>
                <img src = {"../nexus-tech-react/src/assets/terminal.png"}/>
                <div className={styles.text}>
                    <p>404 Page not found</p>
                </div>
                <Link to = "/" className={styles.button}>Back to Home</Link>
            </section>
        </div>
    )
}

export default NotFound