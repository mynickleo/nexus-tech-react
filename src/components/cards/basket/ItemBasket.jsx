import { Link } from "react-router-dom"
import styles from "../card.module.css"

const ItemBasket = ({data, more, updateBasket}) => {
    const removeItemFromBasket = () => {
        let dataBasket = JSON.parse(localStorage.getItem('basket'))
        if(dataBasket.length == 0) return
        dataBasket = dataBasket.filter(item => {if(item.id != data.id) return item});
        localStorage.setItem('basket', JSON.stringify(dataBasket));
        updateBasket();
    }
    return(
        <div className={styles.card}>
            <img src = {data.image} alt = "" />
            <div className={styles.title}>
                <h2>{data.name}</h2>
                <p>{data.price}</p>
            </div>
            <div className={styles.info}>
                <p>{data.description}</p>
            </div>
            {more ? <Link to = {`/catalog/${data.id}`} className={styles.button}>More info</Link> : <p className={styles.description}>{data.info}</p>}
            <button className={styles.button} onClick={removeItemFromBasket}>Remove</button>
        </div>
    )
}

export default ItemBasket