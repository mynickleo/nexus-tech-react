import { useEffect, useState } from "react";
import styles from "./About.module.css";
import disk from "../../assets/__mocks__/disk.png";

const About = () => {
    const [headerText, setHeaderText] = useState("...");
    const textHeader = "About us";

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
            <section className={styles.about}>
                <h1>{headerText}</h1>
                <div className={styles.text}>
                    <p>We are an efficient and convenient service for the selection of computer components</p>
                    <p>On our website, you can assemble a game or work solution for yourself</p>
                </div>
            </section>

            <section className={styles.info}>
                <div className={styles.messageText}>
                    <p>Message: here you can find out about this project</p>
                </div>
            </section>

            <section className={styles.info}>
                <img src = {disk} alt = "" />
                <div className={styles.text}>
                    <p>■ This is a website about PC store made with React.js</p>
                    <p>■ Made by full-stack developer - mynickleo</p>
                    <a href = "https://github.com/mynickleo">His github here</a>
                </div>
            </section>
        </div>
    )
}

export default About