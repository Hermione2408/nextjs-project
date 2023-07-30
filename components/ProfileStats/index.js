import styles from './profileStats.module.css'
const ProfileStats = ({data})=>{
    console.log('stats',data)
    const mapper =[
        {key:'total_collections',name:"Collections"},
        {key:"total_likes",name:"Likes"},
        {key:"total_photos",name:"Photos"}
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