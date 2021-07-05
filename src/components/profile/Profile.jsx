import Feed from '../feed/Feed';
import Rightbar from '../rightbar/Rightbar';
import styles from './Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.Top}>
                <div className={styles.Profile}>
                    <img className={styles.profileCover} src="assets/post/3.jpeg"></img>
                    <img className={styles.userImg} src="assets/person/7.jpeg"></img>
                </div>
                <div className={styles.ProfileInfo}>
                    <h4 className={styles.name}>Safak</h4>
                    <span className={styles.desc}>Hi my friends</span>
                </div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.feed}>
                    <Feed />
                </div>
                <div className={styles.rightbar}>
                    <Rightbar profile />
                </div>
            </div>
        </div>
    )
}
