import styles from '../login/Login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { Home, AccessibilityNew } from '@material-ui/icons';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const checkpassword = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (checkpassword.current.value !== password.current.value) {
            checkpassword.current.setCustomValidity("Passwords dont't match");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err)
            }
        }
    }
    return (

        <div className={styles.container}>
            <div className={styles.Iconcontainer}>
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                    <AccessibilityNew className={styles.joinIcon} />
                    <span className={styles.Iconspan} >Login</span>
                </Link>
                <Link to="/" style={{ color: "black" }}>
                    <Home className={styles.Icon} />
                </Link>
            </div>
            <div className={styles.context}>
                <p>Welcome ~ 👋</p>
                <h2 className={styles.Registertitle}>Register</h2>
                <form className={styles.inputContainer} onSubmit={handleClick}>
                    <input className={styles.Register_input} ref={username} placeholder="Username" required></input>
                    <input className={styles.Register_input} ref={email} type="email" placeholder="Email" required></input>
                    <input className={styles.Register_input} ref={password} type="password" placeholder="Password" minLength="6" required></input>
                    <input className={styles.Register_input} ref={checkpassword} type="password" placeholder="Password Again" minLength="6" required></input>
                    <button className={styles.button} type="submit">Register</button>
                    <Link to="/login" className={styles.signUp}>
                        <span >Login</span>
                    </Link>
                </form>
            </div>
        </div>

    )
}
