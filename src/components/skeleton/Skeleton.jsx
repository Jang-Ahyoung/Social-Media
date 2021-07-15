import styles from './Skeleton.module.css';

function Skeleton({ type }) {
    const Mainskeleton = () => (
        <div className={styles.container}>
            <div className={styles.Bottom}>
                <div className={styles.BottomLeft}>
                    <span className={styles.IconSkeleton}></span>
                    <span className={styles.IconSkeleton}></span>
                    <span className={styles.IconSkeleton}></span>
                </div>
            </div>
            <div className={styles.Top}>
                <div className={styles.Top_title}>
                    <p className={styles.TitleSkeleton}></p>
                </div>
                <div className={styles.Top_Desc}>
                    <div className={styles.User}>
                        <span className={styles.profileSkeleton} />
                        <p className={styles.nameSkeleton}></p>
                    </div>
                    <div className={styles.Date}>
                        <span className={styles.nameSkeleton}></span>
                    </div>
                </div>
            </div>
            <div className={styles.Center}>
                <div className={styles.textSkeleton}></div>
                <div className={styles.text2Skeleton}></div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.BottomLeft}>
                    <span className={styles.IconSkeleton}></span>
                    <span className={styles.IconSkeleton}></span>
                    <span className={styles.IconSkeleton}></span>
                </div>
                <div className={styles.BottomRight}>
                    <div className={styles.commemtSkeleton}>
                        <span className={styles.commemtSkeleton}></span>
                    </div>
                </div>
            </div>
        </div>
    );
    const FriendSkeleton = () => (
        <div>
            <div className={styles.UserFriendImg} />
            <p className={styles.username}></p>
        </div>
    );

    if (type == "mainFeed") return Array(2).fill(<Mainskeleton />);
    if (type == "friend") return Array(3).fill(<FriendSkeleton />);
}

export default Skeleton;
