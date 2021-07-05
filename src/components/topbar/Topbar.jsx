import styles from './Topbar.module.css';
import { Person, Forum, Notifications, AccountCircle } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>logo</div>
            <div className={styles.middle}>
                <input className={styles.input} placeholder="Search . . ."></input>
                <img className={styles.search} src="/assets/search.png"></img>
            </div>
            <div className={styles.right}>
                <Person className={styles.icon} />
                <span className={styles.iconBadge}>1</span>
                <Forum className={styles.icon} />
                <span className={styles.iconBadge}>2</span>
                <Notifications className={styles.icon} />
                <span className={styles.iconBadge}>3</span>
                <AccountCircle className={styles.icon} />
            </div>
        </div>
    )
}
