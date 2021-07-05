import Post from '../post/Post';
import Share from '../share/Share';
import styles from './Feed.module.css';
import { Posts } from '../../dummyData';
export default function Feed() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Share />
                {Posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}
