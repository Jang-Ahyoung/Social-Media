import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Home, AccessibilityNew } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import { useContext, useRef } from 'react';
import { loginCall } from "../../service/axios";
import { AuthContext } from '../../context/AuthContext';
export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };
    return (
        <div className={styles.container}>
            <div className={styles.Iconcontainer}>
                <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                    <AccessibilityNew className={styles.joinIcon} />
                    <span className={styles.Iconspan} >Join US</span>
                </Link>
                <Link to="/" style={{ color: "black" }}>
                    <Home className={styles.Icon} />
                </Link>
            </div>
            <div className={styles.context}>
                <p>Hi ~ 👋</p>
                <h2 className={styles.title}>Login</h2>
                <form className={styles.inputContainer} onSubmit={handleClick}>
                    <input className={styles.input} ref={email} type="email" placeholder="Email" required></input>
                    <input className={styles.input} ref={password} type="password" placeholder="Password" minLength="6" required></input>
                    <button className={styles.button} disabled={isFetching}>
                        {isFetching
                            ? <CircularProgress color="white" size="15px" />
                            : "Login"}
                    </button>
                    <Link to="/register" className={styles.signUp}>
                        <span >Create a new account</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}
