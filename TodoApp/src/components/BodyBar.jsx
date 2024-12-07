import TodoBar from "./TodoBar";
import { useState } from "react";
import Todos from "./todos";
import Footer from './Footer';
import styles from "./bodybar.module.css";
export default function BodyBar(){


    const [todoList,setitems]=useState([]);

    return (<div>
        <div className={styles.content}>
    < TodoBar todoList={todoList} setitems={setitems}/>

     <Todos todoList={todoList} setitems={setitems} />  
     </div>
     <Footer todoList={todoList}/>
    </div>
    
);
}