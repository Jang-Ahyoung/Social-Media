import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Skeleton from '../skeleton/Skeleton';

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data.sort((post1, post2) => {
                return new Date(post2.createdAt) - new Date(post1.createdAt);
            }));
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
        fetchPosts();
    }, [username, user._id]);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {(!username || username === user.username) && <Share />}
                {isLoading ? <Skeleton type="mainFeed" /> :
                    posts.map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
            </div>
        </div>
    )
}
