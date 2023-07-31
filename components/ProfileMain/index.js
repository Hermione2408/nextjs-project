import styles from "./profileMain.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
const ProfileMain = ({data,followed_by_user,switchFollowed})=>{

    console.log(data,"profile main")
    const router = useRouter()
    const path = router.query.id
    const {username,name,bio} = data
    const imageUrl = data && data.profile_image &&  data.profile_image.medium

    const getButton1text = ()=>{
        return path=='me' ? "Edit profile" : (followed_by_user ? 'Following' : 'Follow')
    }
    const getButton2text = ()=>{
        return path=='me' ? "View archive" : (followed_by_user ? 'Message' : '')
    }
    const isFollowButton = getButton1text() == "Follow"
    return(
        <div className={styles.container}>
            <div className={styles.imageAndStats}>
                <div className={styles.profileImg}>
                <Image alt="profile" src={imageUrl} height={77} width={77} className={styles.image}/>
                </div>
                <div className={styles.stats}>
                    <div>{username}</div>
                    <div className={styles.buttonsContainer}>
                        {getButton1text()&&<button onClick={()=>switchFollowed(!followed_by_user)} className={isFollowButton && styles.followButton}><strong>{getButton1text()}</strong></button>}
                        {getButton2text() &&<button><strong>{getButton2text()}</strong></button>}
                    </div>
                </div>
            </div>
            <div className={styles.bio}>
                <div>
                    <strong>
                    {name}
                    </strong>
                </div>
                <div>
                    {bio}
                </div>
            </div>
        </div>
    )
}

export default ProfileMain