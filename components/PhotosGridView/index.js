import styles from "./photosGridView.module.css"
import Image from "next/image"

const PhotosGridView = ({ data, user }) => {
    console.log(data, "Grid");

    return (
        <div className={styles.grid}>
            {data.map((photo) => (
                <div key={photo.id} className={styles.postGrid}>
                    <div className={styles.image}>
                        <img
                            src={photo.urls.small}
                            alt={photo.alt_description}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PhotosGridView
