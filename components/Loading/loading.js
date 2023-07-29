import styles from './loading.module.css'
const Loading = () =>{
    return(
        <div className={styles.loader}>
        {<h4>Loading...</h4>}
      </div>
    )
}

export default Loading