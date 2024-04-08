import { useEffect, useState } from "react";
import styles from "./Catalog.module.css";
import CardSelling from "../../components/cards/selling/CardSelling";
import { dataBestSelling } from "../../__mocks__/best_selling/bestSelling";
import { dataSelling } from "../../__mocks__/selling/selling";
import SendMail from "../../components/ui/forms/sendMail/SendMail";
import Modal from "../../components/ui/modal/Modal";

const Catalog = () => {
    const [modal, setModal] = useState(false);
    const [headerText, setHeaderText] = useState("...");
    const textHeader = "Catalog products";

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
            {modal == true ? <Modal message = {"Your message has been sent to our email"} setModal={setModal}/> :
                <></>
            }
            <h1>{headerText}</h1>
            <section className={styles.info}>
                <div className={styles.text}>
                    <p>The best-selling products</p>
                </div>
            </section>

            <section className={styles.catalog}>
                {dataBestSelling.length > 0 ? 
                dataBestSelling.map(data => <CardSelling key={data.id} data={data} more={true}/>)
                :
                <p>Sorry... There is no best selling products</p>}
            </section>

            <section className={styles.info}>
                <div className={styles.text}>
                    <p>Product catalog in our warehouse. Made and delivered with love</p>
                </div>
            </section>

            <section className={styles.catalog}>
                {dataSelling.length > 0 ? 
                dataSelling.map(data => <CardSelling key={data.id} data={data} more={true}/>)
                :
                <p>Sorry... There is no selling products</p>}
            </section>

            <section className={styles.info}>
                <div className={styles.text}>
                    <p>Have you not found the product you need? You can send us an email with a request, we will order it and deliver it as soon as possible</p>
                </div>
            </section>

            <section className={styles.info}>
                <SendMail setModal={setModal}/>
            </section>
            
        </div>
    )
}

export default Catalog