import styles from './Share.module.css';
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const post = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: post.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    };

    return (
        <div className={styles.container}>
            <div className={styles.Top}>
                <div className={styles.User}>
                    <img className={styles.UserImg} src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"} alt="userProflie" />
                    <span className={styles.UserName}>{user.username}</span>
                </div>
                <input className={styles.Input} ref={post} placeholder={`What's in your mind ${user.username}?`} type="text" />
            </div>
            <hr className={styles.hr} />
            <form className={styles.Bottom} onSubmit={submitHandler}>
                <div className={styles.options}>
                    <label htmlFor="file" className={styles.fileInput}>
                        <PermMedia htmlColor="tomato" className={styles.optionsIcon} />
                        <span className={styles.optionsText}>Photo / Video</span>
                        <input style={{ display: "none" }} type="file" id="file" accept=".png,.jepg,.jpg"
                            onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                    <Label htmlColor="blue" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Tag</span>
                    <Room htmlColor="green" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Location</span>
                    <EmojiEmotions htmlColor="golenrod" className={styles.optionsIcon} />
                    <span className={styles.optionsText}>Feelings</span>
                </div>
                <button className={styles.Button} type="submit"><span>Share</span></button>
            </form>
        </div>
    )
}
