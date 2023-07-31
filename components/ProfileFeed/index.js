import styles from "./profileFeed.module.css"
import HomeFeed from "../HomeFeed/homeFeed"
const ProfileFeed = ({ data, user }) => {
    return (
        <div className={styles.container}>
            {data && data.length > 0 ?
                <HomeFeed user={user} data={data} showListView loadMore={false} />
                : (
                    <div>
                        No photos to show
                    </div>
                )
            }
        </div>
    )
}
export default ProfileFeed