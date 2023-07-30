import styles from './profileHeaderMob.module.css'
import SettingsIcon from "../../assets/img/svg/settings.svg";
import AddUser from "../../assets/img/svg/add-user.svg"

import Image from 'next/image';
const ProfileHeaderMob = ({data})=>{
    console.log(data)
    const {username} = data
    return (
    <div className={styles.headerContainer}>
        <Image src={SettingsIcon} alt='settings icon' height={24} width={24}/>
        <strong>{username}</strong>
        <Image src={AddUser} alt='add user' height={24} width={24}/>
    </div>)
}
export default ProfileHeaderMob