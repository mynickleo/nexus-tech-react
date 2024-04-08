import styles from "./CatalogDetail.module.css";
import CardSelling from "../../components/cards/selling/CardSelling";
import { Link, useParams } from "react-router-dom";
import { dataSelling } from "../../__mocks__/selling/selling";

const CatalogDetail = () => {
    const {id} = useParams();

    return(
        <div className={styles.main}>
            {dataSelling.map(data => 
                {if(data.id == id) return <><h1>{data.name}</h1><CardSelling key={data.id} data={data} more={false}/></>}
            )}
            <Link to = '/' className={styles.button}>Back to Home</Link>
        </div>
    )
}

export default CatalogDetail