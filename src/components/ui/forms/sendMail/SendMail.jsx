import styles from "./SendMail.module.css";

const SendMail = ({setModal}) => {
    const sendMail = (event) => {
        event.preventDefault();

        setModal(true);
    }
    return(
        <form action="/submit" method="post" className={styles.form} onSubmit={sendMail}>
            <div className={styles.block}>
                <label>FIO:</label>
                <input type="text" id="name" name="name" required autoComplete="off"/>
            </div>
            <div className={styles.block}>
                <label>Email:</label>
                <input type="email" id="email" name="email" required autoComplete="off"/>
            </div>
            <div className={styles.block}>
                <label>Message:</label>
                <textarea id="question" name="question" required contenteditable="true"></textarea>
            </div>
            <button type="submit" className={styles.button}>Send</button>
        </form>
    )
}

export default SendMail