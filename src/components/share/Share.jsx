import styles from './Share.module.css';
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
    return (
        <div className={styles.container}>
            <div className={styles.Top}>
                <div className={styles.User}>
                    <img className={styles.UserImg} src="/assets/person/1.jpeg" alt="userProflie" />
                    <span className={styles.UserName}> Ahyoung</span>
                </div>
                <input className={styles.Input} placeholder="What's in your mind Ahyoung?" type="text" />
            </div>
            <hr className={styles.hr} />
            <div className={styles.Bottom}>
                <div className={styles.options}>
                    <PermMedia htmlColor="tomato" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Photo / Video</span>
                    <Label htmlColor="blue" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Tag</span>
                    <Room htmlColor="green" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Location</span>
                    <EmojiEmotions htmlColor="golenrod" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Feelings</span>
                </div>
                <button className={styles.Button}><span>Share</span></button>
            </div>
        </div>
    )
}
