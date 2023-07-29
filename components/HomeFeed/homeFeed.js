import styles from './homeFeed.module.css';
import Card from '../ui-components/Card/card';
const HomeFeed = () => {
    const posts = [
        {
        username: 'john_doe',
        likes: 200,
        caption: 'This is a test post!',
        comments: 20,
      },
      {
        username: 'hermione',
        likes: 100,
        caption: 'This is a test post1!',
        comments: 10,
      },
    ]
    return (
        <div className={styles.container}>
            HomeFeed
            {posts.map((post)=>{
               return <Card post={post} />
            })}
        </div>
    );
};

export default HomeFeed;