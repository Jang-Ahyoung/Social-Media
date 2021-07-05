import styles from './Home.module.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.context}>
                <Topbar />
                <section className={styles.section}>
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </section>
            </div>
        </div>
    )
}
