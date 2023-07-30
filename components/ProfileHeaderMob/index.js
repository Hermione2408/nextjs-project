import styles from './profileHeaderMob.module.css'
const ProfileHeaderMob = ({user})=>{
    return (
    <div className={styles.headerContainer}>
        <img src={""} atl="Settings" />
        <div>username</div>
        <div>add icon</div>
    </div>)
}
export default ProfileHeaderMob