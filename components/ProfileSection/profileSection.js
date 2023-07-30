import React, { useState } from 'react';
import styles from './profileSection.module.css'; // Add your styles
import ProfileHeaderMob from '../../components/ProfileHeaderMob';
import ProfileStats from '../../components/ProfileStats';
import ProfileMain from '../ProfileMain';
import ViewSwitcher from "../ViewSwitcher/index";
import BookmarkPhotos from '../BookmarkPhotos';
import TaggedPhotos from '../TaggedPhotos';
import PhotosGridView from '../PhotosGridView';
import ProfileFeed from "../ProfileFeed/index"




const ProfileSection = ({userData}) => {
  const [view, setView] = useState('grid'); // grid or list
  const [selectedTab,setSelectedTab] = useState('list')

  const switchFunction = (tab)=>{
    setSelectedTab(tab)
  }
  console.log(selectedTab,"SELECTED T")
  return (
    <div className={styles.container}>
      {/* Profile Information */}
      <ProfileHeaderMob data={userData} />
      <ProfileMain data={userData} />
      <ProfileStats data={userData} />
      <ViewSwitcher selectedTab={selectedTab} switchViewFunction={switchFunction} />

      {
        selectedTab == 'grid'? <PhotosGridView data={userData.photos} /> : (selectedTab == 'list' ? <ProfileFeed data={userData.photos} /> : (selectedTab == 'tagged' ? <TaggedPhotos /> : <BookmarkPhotos />))
      }
      
    </div>
  );
};


export default ProfileSection;
