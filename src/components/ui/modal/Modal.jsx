import styles from "./Modal.module.css";

const Modal = ({message, setModal}) => {
    const closeModal = () => {
        setModal(false);
    }
    return(
        <div className={styles.modal}>
            <div className={styles.blur}></div>
            <div className={styles.dialog}>
                <p className={styles.info}>{message}</p>
                <button className={styles.button} onClick={closeModal}>Close</button>
            </div>
        </div> 
    )
}

export default Modal