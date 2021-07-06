import axios from 'axios';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import { useEffect, useState } from 'react';
import Feed from '../feed/Feed';
import Rightbar from '../rightbar/Rightbar';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const parmas = useParams();
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${parmas.username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [parmas.username]);

    return (
        <div className={styles.container}>
            <div className={styles.Top}>
                <div className={styles.Profile}>
                    <img className={styles.profileCover} src={user.coverPicture || PF + "noCover3.jpg"} alt="Cover"></img>
                    <img className={styles.userImg} src={user.profilePicture || PF + "noCover4.jpg"} alt="userImg"></img>
                </div>
                <div className={styles.ProfileInfo}>
                    <h4 className={styles.name}>{user.username}</h4>
                    <span className={styles.desc}>{user.desc}</span>
                </div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.feed}>
                    <Feed username={parmas.username} />
                </div>
                <div className={styles.rightbar}>
                    <Rightbar user={user} />
                </div>
            </div>
        </div>
    )
}
