import InputPC from "../../components/ui/input/InputPc"
import styles from "./Workstations.module.css"
import CardComputer from "../../components/cards/computer/CardComputer"
import { dataWorkstations } from "../../__mocks__/workstations/workstations"
import { useEffect, useState } from "react"
import Modal from "../../components/ui/modal/Modal"

const Workstations = () => {
    const [modal, setModal] = useState(false);
    const [headerText, setHeaderText] = useState("...");
    const textHeader = "Create your own PC";

    const setAnimationHeader = () => {
        let currentText = "";
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentText += textHeader[currentIndex];
            setHeaderText(currentText);
            currentIndex += 1;
            if (currentIndex == textHeader.length) clearInterval(interval);
        }, 100)

        return () => clearInterval(interval);
    }

    useEffect(() => {
        setAnimationHeader();
    }, [])

    return(
        <div className={styles.main}>
            {modal == true ? 
                <Modal message = {"Your PC has been created and sent to the store's mail"} setModal={setModal}/>
            : <></>}
            <h1>{headerText}</h1>
            <InputPC setModal={setModal}/>

            <section className={styles.info}>
                <div className={styles.text}>
                    <p>Modern work computers offer the perfect combination of performance and cost for professional tasks. They provide maximum efficiency for working with graphical and multitasking applications at no extra cost</p>
                </div>
            </section>

            <section className={styles.catalog}>
                {dataWorkstations.length > 0 ? 
                dataWorkstations.map(computer => <CardComputer key={computer.id} computer={computer} more={true}/>)
                :
                <p>Sorry... There is no workstations</p>}
            </section>
        </div>
    )
}

export default Workstations