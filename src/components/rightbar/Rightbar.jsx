import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Rightbar.module.css';
import { Link } from 'react-router-dom';

export default function Rightbar({ user }) {
    const HomeRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <div className={styles.container}>
                <h4 className={styles.title}>Now is online</h4>
                <ul className={styles.friendList}>
                    <li className={styles.friendInfo}>
                        <div className={styles.ImgContainer}>
                            <img className={styles.Img} src={PF + "person/3.jpeg"} alt="friendImg" />
                            <span className={styles.online}></span>
                        </div>
                        <span>John Carter</span>
                    </li>
                </ul>
            </div>
        )
    }
    const ProfileRightbar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        const [friends, setFriends] = useState([]);
        useEffect(() => {
            const getFriends = async () => {
                try {
                    const friendList = await axios.get("/users/friends/" + user?._id);
                    setFriends(friendList.data);
                } catch (err) {
                    console.log(err);
                }
            }
            getFriends();
        }, [user._id]);
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>User Information</h3>
                <ul className={styles.infoList}>
                    <li className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <span>City : </span>
                            <span>{user.city}</span>
                        </div>
                    </li>
                    <li className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <span>From : </span>
                            <span>{user.from}</span>
                        </div>
                    </li>
                    <li className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <span>Relationship : </span>
                            <span>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Couple" : user.relationship === 3 ? "Married" : "-"}</span>
                        </div>
                    </li>
                </ul>
                <h3 className={styles.UserFriendstitle}>User friends</h3>
                <ul className={styles.friendList}>
                    {friends && friends.map((friend) => (
                        <li className={styles.UserFriendInfo}>
                            <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}>
                                <div className={styles.UserFriendContainer}>
                                    <img className={styles.UserFriendImg} src={friend.profilePicture ? PF + friends.profilePicture : PF + "noCover4.jpg"} alt="friendImg" />
                                    <span>{friend.username}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        user ? <ProfileRightbar /> : <HomeRightbar />
    )
}
