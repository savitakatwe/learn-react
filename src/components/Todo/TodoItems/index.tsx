import React from "react";
import "./style.css"
interface ITodoItemProps{
    title:string;
}

const TodoItems:React.FC<ITodoItemProps>=(props)=>{
    return (
        <li>
            {props.title}
        </li>
    );
}
export default TodoItems;
