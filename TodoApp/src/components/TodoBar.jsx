import { useState } from "react"
import SingleTodo from "./SingleTodo";

import styles from "./form.module.css"

export default function TodoBar({todoList,setitems}){

    const [todo,settodo]=useState({name:"",status:false});
    


    function handleSubmit(e){
        e.preventDefault();
        setitems([...todoList,todo])
        settodo({name:"",status:false})
    }

        return (<div>

        <form className={styles.todoform} onSubmit={handleSubmit} >

            <div className={styles.inputcontainer}>
                <input className={styles.modreninput} type="text" value={todo.name} placeholder="enter todo item " onChange={(e)=>settodo({...todo,name:e.target.value})}/>

                <button className={styles.modrenbutton} type="submit">Add</button>
            </div>
        </form>
    
        </div>);
}


