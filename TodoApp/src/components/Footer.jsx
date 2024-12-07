import styles from './fotter.module.css'

export default function Footer({todoList}){
    const countco=todoList.filter(item=>item.status).length;

    return (
        
        <div className={styles.modrenfooter}>
            <span className={styles.totalfield}>Total tasks:{todoList.length}</span>
            <span className={styles.completedfeild }>Completed Tasks: {countco}</span>
        </div>
        
    );

}