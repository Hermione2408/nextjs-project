import React, { useEffect, useState } from 'react';
import styles from './profileSection.module.css'; // Add your styles
import ProfileHeaderMob from '../../components/ProfileHeaderMob';
import ProfileStats from '../../components/ProfileStats';
import ProfileMain from '../ProfileMain';
import ViewSwitcher from "../ViewSwitcher/index";
import BookmarkPhotos from '../BookmarkPhotos';
import TaggedPhotos from '../TaggedPhotos';
import PhotosGridView from '../PhotosGridView';
import ProfileFeed from "../ProfileFeed/index"




const ProfileSection = ({ userData, isMobileView, selfUser }) => {
  const [view, setView] = useState('grid'); // grid or list
  const [selectedTab, setSelectedTab] = useState('grid')
  const [isFollowed, setIsFollowed] = useState(false)
  const switchFunction = (tab) => {
    setSelectedTab(tab)
  }
  const { username, name, bio, followed_by_user } = userData
  useEffect(() => {
    setIsFollowed(followed_by_user)
  }, [])
  console.log(selectedTab, userData, "SELECTED T")
  return (
    <div className={styles.container}>
      {/* Profile Information */}
      {isMobileView && <ProfileHeaderMob data={userData} />}
      <ProfileMain selfUser={selfUser} data={userData} followed_by_user={isFollowed} switchFollowed={(val) => setIsFollowed(val)} />

      {isFollowed || selfUser ? (
        <><ProfileStats data={userData} />
          <ViewSwitcher selectedTab={selectedTab} switchViewFunction={switchFunction} />

          {
            selectedTab == 'grid' ? <PhotosGridView user={userData} data={userData.photos} /> : (selectedTab == 'list' ? <ProfileFeed user={userData} data={userData.photos} /> : (selectedTab == 'tagged' ? <TaggedPhotos /> : <BookmarkPhotos />))
          }
        </>) : (
        <div style={{ textAlign: 'center' }}>
          <h3>This account is private, follow to see the photos !! </h3>
        </div>)
      }

    </div>
  );
};


export default ProfileSection;
