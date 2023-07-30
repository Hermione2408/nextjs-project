import styles from "./profileMain.module.css"
import Image from "next/image"
const ProfileMain = ({data})=>{

    console.log(data,"profile main")
    const {username,name,bio} = data
    const imageUrl = data.profile_image.medium
    return(
        <div className={styles.container}>
            <div className={styles.imageAndStats}>
                <div className={styles.profileImg}>
                <Image alt="profile" src={imageUrl} height={77} width={77} className={styles.image}/>
                </div>
                <div className={styles.stats}>
                    <div>{username}</div>
                    <div className={styles.buttonsContainer}>
                        <button><strong>Edit profile</strong></button>
                        <button><strong>View archive</strong></button>
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