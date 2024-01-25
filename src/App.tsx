import React from "react";
import Todo from "./components/Todo";

const TodoItems=[{
    id:1,
    title:"clean home"
},{
    id:2,
    title:"cook"
},{
    id:3,
    title:"bath"
},{
    id:4,
    title:"read"
},{
    id:5,
    title:"dance"
},]
const App:React.FC=()=>{
return(
    <div>
        <Todo items={TodoItems}/>
        <Todo items={TodoItems}/>
    </div>
);
}
export default App;
