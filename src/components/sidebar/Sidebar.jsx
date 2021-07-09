import styles from './Sidebar.module.css';
import { FolderOutlined, ClassTwoTone, FavoriteBorderTwoTone, ChromeReaderModeTwoTone, Toll, BubbleChartTwoTone, Brightness2TwoTone } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <button className={styles.btn}>Compose</button>
                <ul className={styles.sideList}>
                    <li className={styles.listItem}>
                        <Toll className={styles.listIcon} />
                        <span className={styles.listText}>Homepage</span>
                    </li>
                    <li className={styles.listItem}>
                        <ChromeReaderModeTwoTone className={styles.listIcon} />
                        <span className={styles.listText}>Timeline</span>
                    </li>
                    <li className={styles.listItem}>
                        <ClassTwoTone className={styles.listIcon} />
                        <span className={styles.listText}>Booked</span>
                    </li>
                    <li className={styles.listItem}>
                        <FavoriteBorderTwoTone className={styles.listIcon} />
                        <span className={styles.listText}>Hearted</span>
                    </li>
                    <li className={styles.listItem}>
                        <Brightness2TwoTone className={styles.listIcon} />
                        <span className={styles.listText}>Chat</span>
                    </li>
                    <li className={styles.listItem}>
                        <BubbleChartTwoTone className={styles.listIcon} />
                        <span className={styles.listText}>Chat</span>
                    </li>
                </ul>
                <ul className={styles.categoryList}>
                    <p> categorys </p>
                    <li className={styles.firend}>
                        <FolderOutlined className={styles.firendIcon} />
                        <span className={styles.categoryName}>Work</span>
                    </li>
                    <li className={styles.firend}>
                        <FolderOutlined className={styles.firendIcon} />
                        <span className={styles.categoryName}>Liked</span>
                    </li>
                </ul>
                <ul className={styles.firendList}>
                    <p> Friends </p>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/2.jpeg"></img>
                        <span className={styles.firendName}>John Alio</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/9.jpeg"></img>
                        <span className={styles.firendName}>Ang</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/4.jpeg"></img>
                        <span className={styles.firendName}>Peng</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/5.jpeg"></img>
                        <span className={styles.firendName}>딱지</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/6.jpeg"></img>
                        <span className={styles.firendName}>김민트</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/7.jpeg"></img>
                        <span className={styles.firendName}>장초코</span>
                    </li>
                    <li className={styles.firend}>
                        <img className={styles.firendImg} src="/assets/person/10.jpeg"></img>
                        <span className={styles.firendName}>김기언</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
