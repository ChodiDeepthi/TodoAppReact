import SingleTodo from "./SingleTodo"
import styles from "./Todos.module.css"
export default function Todos({todoList,setitems}){

    
    return <div className={styles.list}>{todoList.map(item=><SingleTodo item={item} todoList={todoList} setitem={setitems}/>)}</div>


}