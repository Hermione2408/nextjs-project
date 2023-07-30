import styles from './profileStats.module.css'
const ProfileStats = ({data})=>{
    console.log('stats',data)
    const mapper =[
        {key:'total_photos',name:"posts"},
        {key:"followers_count",name:"followers"},
        {key:"following_count",name:"following"}
    ]
    return(
        <div className={styles.container}>
            {mapper.map((el)=>{
                return(
                    <div className={styles.pair} key={el.key}>
                        <div className={styles.value}>
                               <strong>
                               {data[el.key]}
                                </strong> 
                            </div>
                        <div className={styles.key}>
                            {el.name}
                            </div>
                            
                    </div>
                )
            })}
            
        </div>
    )
}

export default ProfileStats