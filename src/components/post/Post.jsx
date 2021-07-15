import axios from 'axios';
import styles from './Post.module.css';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FolderSharedRounded, LoyaltyTwoTone, Room, FavoriteOutlined, FavoriteBorderOutlined, FolderOutlined } from '@material-ui/icons';
export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [user, setUser] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    const bookeHandler = () => {
        setIsBooked(!isBooked);
    }

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);
    return (
        <Fade>
            <div className={styles.container}>
                <div className={styles.Bottom}>
                    <div className={styles.BottomLeft}>
                        <FolderSharedRounded onClick={bookeHandler} className={isBooked ? `${styles.BookedIcon} ${styles.BottomIcon}` : styles.BottomIcon} />
                        {isLiked
                            ? <FavoriteOutlined className={`${styles.BottomIcon} ${styles.heartIcon}`} onClick={likeHandler}></FavoriteOutlined>
                            : <FavoriteBorderOutlined className={styles.BottomIcon} onClick={likeHandler}></FavoriteBorderOutlined>}
                        <LoyaltyTwoTone className={styles.BottomIcon} />
                    </div>
                </div>
                <div className={styles.Top}>
                    <div className={styles.Top_title}>
                        <p>{post.title}</p>
                        <p> : </p>
                    </div>
                    <div className={styles.Top_Desc}>
                        <div className={styles.User}>
                            <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
                                <Fade>
                                    <img className={styles.UserImg} src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"} alt="userProflie" />
                                    <span className={styles.UserName}> {user.username}</span>
                                </Fade>
                            </Link>
                        </div>
                        <div className={styles.Date}>
                            <span className={styles.dateFont}>{format(post.createdAt)}</span> {/* Sep 24, 2020 3:42 PM */}
                        </div>
                    </div>
                </div>
                <div className={styles.Center}>
                    <div className={styles.text}>
                        {post?.desc}
                    </div>
                    <div className={styles.Img}>
                        {post.img &&
                            <>
                                <img className={styles.postImage} src={PF + post.img} alt="postImg" />
                            </>
                        }
                    </div>
                </div>
                <div className={styles.location}>
                    Ulsan
                    <Room className={styles.Icon} htmlColor="gray" /></div>
                <div className={styles.Bottom}>
                    <div className={styles.BottomLeft}>
                        <FolderOutlined onClick={bookeHandler} className={isBooked ? `${styles.BottomBookedIcon} ${styles.BottomIcon}` : styles.BottomIcon} />
                        {isLiked
                            ? <FavoriteOutlined className={`${styles.BottomIcon} ${styles.heartIcon}`} onClick={likeHandler}></FavoriteOutlined>
                            : <FavoriteBorderOutlined className={styles.BottomIcon} onClick={likeHandler}></FavoriteBorderOutlined>}
                        <span>{like || 0} Likes</span>
                    </div>
                    <div className={styles.BottomRight}>
                        <button className={styles.comments}>
                            {post.comment} Comments
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
