import styles from "./WorkstationsDetail.module.css";
import CardComputer from "../../components/cards/computer/CardComputer";
import { Link, useParams } from "react-router-dom";
import { dataWorkstations } from "../../__mocks__/workstations/workstations";

const WorkstationsDetail = () => {
    const {id} = useParams();

    return(
        <div className={styles.main}>
            <h1>Workstation {id}</h1>
            {dataWorkstations.map(data => 
                {if(data.id == id) return <CardComputer key={data.id} computer={data} more={false}/>}
            )}
            <Link to = '/' className={styles.button}>Back to Home</Link>
        </div>
    )
}

export default WorkstationsDetail