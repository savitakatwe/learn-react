import React from "react";
import TodoItems from "./TodoItems";

import "./style.css"

interface ITodoItemsProp{
    id:number;
    title:string;
}
interface IProps{
   items: ITodoItemsProp[];
}

const Todo:React.FC<IProps>=(props:IProps)=>{
    return (
        <div className="todo-container">
            <ol>
                {
                    props.items.map(item => <TodoItems key={item.id} title={item.title}/>)
                }
            </ol>
        </div>
    );
}
export default Todo;
