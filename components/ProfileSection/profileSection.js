import React, { useState } from 'react';
import styles from './Profile.module.css'; // Add your styles

// Mock Data
const posts = [
  // Add your post objects here. For example:
  { id: 1, image: '...', caption: '...' },
  { id: 2, image: '...', caption: '...' },
  // ...
];

const ProfileSection = () => {
  const [view, setView] = useState('grid'); // grid or list

  const switchView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div>
      {/* Profile Information */}
      <h1>Instagram User</h1>
      <button onClick={switchView}>Switch View</button>

      {/* Post Section */}
      <div className={view === 'grid' ? styles.grid : styles.list}>
        {posts.map((post) => (
          <Post key={post.id} post={post} view={view} />
        ))}
      </div>
    </div>
  );
};

const Post = ({ post, view }) => {
  if (view === 'grid') {
    return (
      <div className={styles.postGrid}>
        <img src={post.image} alt={post.caption} />
      </div>
    );
  } else {
    return (
      <div className={styles.postList}>
        <img src={post.image} alt={post.caption} />
        <p>{post.caption}</p>
      </div>
    );
  }
};

export default ProfileSection;
