import { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { AuthContext } from "../../providers/AuthProvider";
import Login from "../../components/ui/forms/login/Login";
import ItemBasket from "../../components/cards/basket/ItemBasket";

const Profile = () => {
    const {user, setUser} = useContext(AuthContext);
    const basket = JSON.parse(localStorage.getItem('basket'));
    const [dataBasket, setdataBasket] = useState(basket);

    const [headerText, setHeaderText] = useState("...");
    const textHeader = "Profile";

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

    const updateBasket = () => {
        let basket = JSON.parse(localStorage.getItem('basket'));
        setdataBasket(basket);
    }

    useEffect(() => {
        setAnimationHeader();
    }, [])

    const logOut = () => {
        setUser("");
    }

    return(
        <div className={styles.main}>
            {user ? 
                <>
                    <section className={styles.about}>
                        <h1>{headerText}</h1>
                        <div className={styles.text}>
                            <p>This is your profile</p>
                        </div>
                    </section>

                    <button className={styles.button} onClick={logOut}>Log out</button>

                    <section className={styles.profile}>
                        <img src = {user.img} alt = ""/>
                        <div className={styles.text}>
                            <p>Name: {user.name}</p>
                            <p>Surname: {user.surname}</p>
                            <p>Email: {user.email}</p>
                            <p>Login: {user.login}</p>
                        </div>
                    </section>

                    <section className={styles.info}>
                        <div className={styles.messageText}>
                            <p>Message: Let's check your basket</p>
                        </div>
                    </section>

                    <section className={styles.catalog}>
                        {dataBasket ? dataBasket.map(data => {return <ItemBasket key = {data.id} data = {data} more = {true} updateBasket = {updateBasket}/>}) : <></> }
                    </section>
                </> 
            :
                <>
                    <section className={styles.about}>
                        <h1>{headerText}</h1>
                        <div className={styles.text}>
                            <p>You need to Log in</p>
                        </div>
                    </section>
                    <Login /> 

                    <section className={styles.info}>
                        <div className={styles.text}>
                            <p>When you log in to your account, you will be able to buy products</p>
                        </div>
                    </section>
                </>
            }
        </div>
    )
}

export default Profile