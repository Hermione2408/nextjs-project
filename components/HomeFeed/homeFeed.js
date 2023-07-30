import React, { useEffect, useState, useRef } from 'react';
import styles from './homeFeed.module.css';
import Card from '../ui-components/Card/card';
import CardDesktop from '../ui-components/CardDesktop/index';
import Loading from '../Loading/loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomeFeed = ({fetchingFunction, data, isMobileView}) => {
    console.log(isMobileView,"MOB")
  return (
    <>
    {isMobileView?
      (
        <div className={styles.container} id='scrollableDiv'>
      <InfiniteScroll
      dataLength={data.length}
      next={fetchingFunction}
      hasMore={true}
      loader={<Loading />}
      endMessage={<p>No more data to load.</p>}
      scrollableTarget="scrollableDiv"
    >
      {data.map((post) => {
        return <Card key={post.id} post={post} id={post.id} />;
      })}
    </InfiniteScroll>  
    </div>):(
      <div className={styles.scrollableContainerDesktop} id='scrollableDivDesktop'>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchingFunction}
        hasMore={true}
        loader={<Loading />}
        endMessage={<p>No more data to load.</p>}
        scrollableTarget="scrollableDivDesktop"
      > 
        <div className={styles.masonry}>
          {data.map((post) => {
            return (
              <div className={styles.masonryCardWrapper}>
                <CardDesktop key={post.id} post={post} id={post.id} />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
    )}
    </>
  );
};

export default HomeFeed;
