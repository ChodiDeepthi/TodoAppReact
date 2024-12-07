import styles from "./singleTodo.module.css"

export default function SingleTodo({item,todoList,setitem}){

    function handleDelete(item){
            setitem(todoList.filter((element)=>(item!=element)))
    }

    function handleTask(item){
        const li=todoList.map(ele=>ele==item?{...ele,status:!ele.status}:ele);
       
        li.sort((a,b)=>Number(a.status)-Number(b.status))
        setitem(li);
    
    }
    const classname=item.status?styles.completed:styles.item;
    return <div className={classname}><div className={styles.itemname} key={item.name}>{item.name}</div>
    <button className={styles.modrenbutton} onClick={()=>handleDelete(item)}>x</button>
    <button className={styles.modrenbutton2} onClick={()=>handleTask(item)}>Done</button>
    
    </div>

}
