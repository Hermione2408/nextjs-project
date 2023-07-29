import React, { useEffect, useState, useRef } from 'react';
import styles from './homeFeed.module.css';
import Card from '../ui-components/Card/card';
import Loading from '../Loading/loading';
import InfiniteScroll from 'react-infinite-scroll-component';
const HomeFeed = ({fetchingFunction,data}) => {
    useEffect(() => {
        fetchingFunction();
      }, []);
  return (
    <div className={styles.container}>
      <InfiniteScroll
      dataLength={data.length}
      next={fetchingFunction}
      hasMore={true} // Replace with a condition based on your data source
      loader={<Loading />}
      endMessage={<p>No more data to load.</p>}
    >
      {data.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </InfiniteScroll>  
      
    </div>
  );
};

export default HomeFeed;
