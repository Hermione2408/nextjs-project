import React, { useEffect, useState, useRef } from 'react';
import styles from './homeFeed.module.css';
import Card from '../ui-components/Card/card';
import CardDesktop from '../ui-components/CardDesktop/index';
import Loading from '../Loading/loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import EmptyState from '../ui-components/EmptyState';
const HomeFeed = ({fetchingFunction, data, isMobileView,loadMore=true,showListView}) => {
    console.log(isMobileView,"MOB")
    const [columnData,setColumnData] = useState([])
    const [openModalId, setOpenModalId] = useState(null);
  const handleCardClick = (id) => {
    setOpenModalId(id);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };
  useEffect(()=>{
    let width = window.innerWidth
    let totalColumns = Math.floor(width/300)
    const distributeElements = (array, columns) => {
      let result = Array.from({ length: columns }, () => []);
      for(let i = 0; i < array.length; i++) {
          result[i % columns].push(array[i]);
      }
      return result;
  }
  
  const columns = distributeElements(data, totalColumns);
  setColumnData(columns)
  },[window.innerWidth,data])
  if (data.length === 0) {
    return <EmptyState message="No photos available." />
  }else{
  return (
    <>
    {(isMobileView || showListView)?
      (
        <div className={styles.container} id='scrollableDiv'>
      <InfiniteScroll
      dataLength={data.length}
      next={fetchingFunction}
      hasMore={loadMore}
      loader={<Loading />}
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
        hasMore={loadMore}
        loader={<Loading />}
        scrollableTarget="scrollableDivDesktop"
        scrollThreshold={"200px"}
      > 
        <div className={styles.masonry}>
        {columnData.map((col, i) => (
                <div key={i} className={styles.column}>
                  {col.map((post) => (
                    <div key={post.id} className={styles.masonryCardWrapper}>
                <CardDesktop post={post} id={post.id} onClick={handleCardClick} onCloseModal={handleCloseModal} isOpen={openModalId === post.id} />
                    </div>
                  ))}
                </div>
              ))}
        </div>
      </InfiniteScroll>
    </div>
    )}
    </>
  );
 }
};

export default HomeFeed;
