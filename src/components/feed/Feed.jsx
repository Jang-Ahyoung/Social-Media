import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';
import axios from 'axios';

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/60e0469b2932308600a985ef");
            setPosts(res.data);
        }
        fetchPosts();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}
