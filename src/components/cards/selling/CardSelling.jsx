import { Link } from "react-router-dom"
import styles from "../card.module.css"
import { useState } from "react";

const BestSelling = ({data, more}) => {
    const [popUp, setPopUp] = useState(false);

    const addItemToBasket = () => {
        let dataBasket = JSON.parse(localStorage.getItem('basket'));
        if(!dataBasket){
            let basket = [data];
            localStorage.setItem('basket', JSON.stringify(basket))
        }
        dataBasket.push(data);
        localStorage.setItem('basket', JSON.stringify(dataBasket));
        setPopUp(true);
        setTimeout(() => setPopUp(false), 2000);
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
            <button className={styles.button} onClick={addItemToBasket}>Buy</button>

            {popUp == true ? <div className={styles.modalPopUp}>
                <p>Basket update</p>
            </div> : <></>}
        </div>
    )
}

export default BestSelling