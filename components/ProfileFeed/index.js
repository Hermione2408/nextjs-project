import styles from "./profileFeed.module.css"
import HomeFeed from "../HomeFeed/homeFeed"
const ProfileFeed = ({data})=>{
    return(
        <div className={styles.container}>
            <HomeFeed data={data} />
        </div>
    )
}
export default ProfileFeed