import axios from 'axios';
import { useParams } from 'react-router';
import styles from './Profile.module.css';
import { useContext, useEffect, useState } from 'react';
import Feed from '../feed/Feed';
import Rightbar from '../rightbar/Rightbar';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: loginUser, dispatch } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [follow, setFollow] = useState(loginUser.followings ? loginUser.followings.includes(user._id) : false);
    const parmas = useParams();
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${parmas.username}`);
            setUser(res.data);
        }
        fetchUser();
    }, [parmas.username]);

    useEffect(() => {
        setFollow(loginUser.followings.includes(user?._id));
    }, [loginUser, user?._id])

    const followHandler = async () => {
        try {
            if (!follow) {
                await axios.put(`/users/${user._id}/follow`, { userId: loginUser._id });
                dispatch({ type: "FOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/unfollow`, { userId: loginUser._id });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            }
        } catch (err) {
            console.log(err);
        }
        setFollow(!follow);
    }

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
                    {user._id !== loginUser._id && <button className={follow ? styles.unfollowBtn : styles.followBtn} onClick={followHandler}> {follow ? "- Unfollow" : "+ Fllow"} </button>}
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
