import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import {dataWorkstations} from "../../__mocks__/workstations/workstations.js";
import { dataBestSelling } from "../../__mocks__/best_selling/bestSelling";
import CardComputer from "../../components/cards/computer/CardComputer";
import CardSelling from "../../components/cards/selling/CardSelling";

const Home = () => {
    const [headerText, setHeaderText] = useState("...");
    const textHeader = "Nexus Tech";

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
        <div className={styles.homeContainer}>
            <section className={styles.about}>
                <h1>{headerText}</h1>
                <div className={styles.text}>
                    <p>We are an efficient and convenient service for the selection of computer components</p>
                    <p>On our website, you can assemble a game or work solution for yourself</p>
                </div>
                <Link to = "/workstations" className={styles.button}>Go to Building PC</Link>
            </section>

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

            <section className={styles.info}>
                <div className={styles.text}>
                    <p>The best-selling products. You can see more in the catalog</p>
                </div>
            </section>

            <section className={styles.catalog}>
                {dataBestSelling.length > 0 ? 
                dataBestSelling.map(data => <CardSelling key={data.id} data={data} more={true}/>)
                :
                <p>Sorry... There is no best selling products</p>}
            </section>
        </div>
    )
}

export default Home