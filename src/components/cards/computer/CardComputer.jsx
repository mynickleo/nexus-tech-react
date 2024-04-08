import { Link } from "react-router-dom"
import styles from "../card.module.css"

const CardComputer = ({computer, more}) => {
    return(
        <div className={styles.card}>
            <img src = {`../nexus-tech-react/src/assets/__mocks__/${computer.image}`} alt = "" />
            <div className={styles.title}>
                <h2>{computer.name}</h2>
                <p>{computer.price}</p>
            </div>
            <div className={styles.info}>
                <div className={styles.block}>
                    <p>Processor: </p>
                    <p>{computer.cpu}</p>
                </div>
                <div className={styles.block}>
                    <p>Video card: </p>
                    <p>{computer.gpu}</p>
                </div>
                <div className={styles.block}>
                    <p>RAM: </p>
                    <p>{computer.ram}</p>
                </div>
                <div className={styles.block}>
                    <p>HDD: </p>
                    <p>{computer.hdd}</p>
                </div>
                <div className={styles.block}>
                    <p>SSD: </p>
                    <p>{computer.ssd}</p>
                </div>
                <div className={styles.block}>
                    <p>Power supply: </p>
                    <p>{computer.power}</p>
                </div>
            </div>
            {more ? <Link to = {`/workstations/${computer.id}`} className={styles.button}>More info</Link> : <p className={styles.description}>{computer.description}</p>}
        </div>
    )
}

export default CardComputer