import styles from "./photosGridView.module.css"

const PhotosGridView = ({post})=>{
    return(
        <div className={styles.grid}>
            <div className={styles.postGrid}>
        grid VIEW
    {/* <img src={post.image} alt={post.caption} /> */}
  </div>
        </div>
        
    )
}
export default PhotosGridView