import styles from "./profileFeed.module.css"
import HomeFeed from "../HomeFeed/homeFeed"
const ProfileFeed = ({data})=>{
    return(
        <div className={styles.container}>
            {data && data.length>0?
                <HomeFeed data={data} showListView loadMore={false} />
                :(
                    <div>
                        No photos to show
                        </div>
                )
            }
        </div>
    )
}
export default ProfileFeed