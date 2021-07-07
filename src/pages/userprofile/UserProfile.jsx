import Profile from '../../components/profile/Profile';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import styles from '../home/Home.module.css';

export default function UserProfile() {
    return (
        <div className={styles.container}>
            <div className={styles.context}>
                <Topbar />
                <section className={styles.section}>
                    <Sidebar />
                    <Profile profile />
                </section>
            </div>
        </div>
    )
}
