import React, {useState} from "react";


const TodoList = () =>{
let [listItem, setListItem] = useState([]);
let [newItem, setNewItem] = useState("");

function addItems(event){
    event.preventDefault();

    if(newItem.trim !== ""){
        setListItem([...listItem, newItem]);
        setNewItem("");
    }    
}

function removeItem(index){
    let updatedList = ([...listItem]);
    updatedList.splice(index, 1);
    setListItem(updatedList);
}

    return(
        <div>
            <h1>To-Do-List</h1>
            <input type = "text" value = {newItem} onChange = {(event) => setNewItem(event.target.value)} />
            <button onClick = {addItems}>Add Todo</button>
            {
                listItem.map((item, index) =>(
                    <div key = {index}>
                        <ul>
                            <li>
                                <p>{item}</p>
                                <button onClick={() => removeItem(index)}>Delete</button>
                            </li>
                        </ul>
                       
                    </div>
                
                )

                )
            }
        </div>
    )
}
export default TodoList;