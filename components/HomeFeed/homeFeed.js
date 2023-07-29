import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './homeFeed.module.css';
import Card from '../ui-components/Card/card';
import { fetchPhotos } from '../../store/userSlice';

const HomeFeed = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Initial fetch
    dispatch(fetchPhotos());
  }, [dispatch]);

  useEffect(() => {
    // IntersectionObserver for infinite scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          // Dispatch fetchPhotos action to load more photos
          dispatch(fetchPhotos()).then(() => setLoading(false));
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, dispatch]);

  const { data: posts } = photos;

  return (
    <div className={styles.container}>
      HomeFeed
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
      {/* Loading div to trigger infinite scroll */}
      <div ref={loaderRef} className={styles.loader}>
        {loading && <h4>Loading...</h4>}
      </div>
    </div>
  );
};

export default HomeFeed;
