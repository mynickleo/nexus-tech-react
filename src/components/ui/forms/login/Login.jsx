import { useContext, useState } from "react";
import styles from "./Login.module.css";
import {AuthContext} from "../../../../providers/AuthProvider";
import {dataUsers} from "../../../../__mocks__/users/users";

const Login = () => {
    const {user, setUser} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (event) => {
        event.preventDefault();
        for(const user of dataUsers){
            if(user.email == email && user.password == password){
                setUser(user);
            }
        }
    }

    return(
        <form action="/profile" method="post" className={styles.form} onSubmit={logIn}>
            <div className={styles.block}>
                <label>Email:</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.block}>
                <label>Password:</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.button}>Send</button>
        </form>
    )
}

export default Login