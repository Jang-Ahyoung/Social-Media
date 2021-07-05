import styles from './Post.module.css';
import { LoyaltyTwoTone, Room, FavoriteOutlined, FavoriteBorderOutlined, FolderOutlined } from '@material-ui/icons';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({ post }) {
    const user = Users.filter((user) => user.id == post.userId)[0];
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
    return (
        <div className={styles.container}>
            <div className={styles.Bottom}>
                <div className={styles.BottomLeft}>
                    <FolderOutlined className={styles.BottomIcon} />
                    <FavoriteBorderOutlined className={styles.BottomIcon} />
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
                        <img className={styles.UserImg} src={user.profilePicture} alt="userProflie" />
                        <span className={styles.UserName}> {user.userName}</span>
                    </div>
                    <div className={styles.Date}>
                        <span className={styles.UserName}>{post.date}</span> {/* Sep 24, 2020 3:42 PM */}
                    </div>
                </div>
            </div>
            <div className={styles.Center}>
                <div className={styles.text}>
                    {post?.desc}
                </div>
                <div className={styles.Img}>
                    <img className={styles.postImage} src={post.photo} alt="postImg" />
                    <img className={styles.postImage} src="/assets/post/10.jpeg" alt="postImg" />
                </div>
            </div>
            <div className={styles.location}>
                Ulsan
                <Room className={styles.Icon} htmlColor="gray" /></div>
            <div className={styles.Bottom}>
                <div className={styles.BottomLeft}>
                    <FolderOutlined className={styles.BottomIcon} />
                    {isLiked
                        ? <FavoriteOutlined className={`${styles.BottomIcon} ${styles.heartIcon}`} onClick={likeHandler}></FavoriteOutlined>
                        : <FavoriteBorderOutlined className={styles.BottomIcon} onClick={likeHandler}></FavoriteBorderOutlined>}
                    <span>{like} Likes</span>
                </div>
                <div className={styles.BottomRight}>
                    <button className={styles.comments}>
                        {post.comment} Comments
                    </button>
                </div>
            </div>
        </div>
    )
}
