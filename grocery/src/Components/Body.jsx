import React, { useReducer, useState } from "react";
import "./Body.css";
import GroceryItem from "./GroceryItem";

function Body({setAnimation}) {
    
  const [items, setItems] = useState(
    localStorage.getItem("Grocery-Item") === null
      ? []
      : localStorage.getItem("Grocery-Item").split(",")
  );

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add": {
        if(!task)
            {
                setAnimation(true)
                setTimeout(() => {
                    setAnimation(false);
                  }, 4000);
            }
        const updatedState = []
        if(action.payload)
        {
            updatedState = [...state, action.payload];
            setItems(updatedState);
            localStorage.setItem("Grocery-Item", [updatedState]);
            setTask("")
        }
        
        
        
        return updatedState;
      }
      case "Delete": {
        const filteredState = state.filter(
          (_, index) => index !== action.payload
        );
        setItems(filteredState);

        if(filteredState.length===0)
        {
            localStorage.clear();
        }
        else{
            localStorage.setItem("Grocery-Item", filteredState);
        }
       
        return filteredState;

      }
    }
    
  };

  const [task, setTask] = useState("");

  const [state, dispatch] = useReducer(reducer, items);

  const textEditor = (e) => {

    
    setTask(e.target.value);
  };

  return (
    <div className="body-div">
      <p style={{ fontSize: "20px" }}>Grocery Bud</p>
      <input
        type="text"
        className="text-input"
        value={task}
        onChange={(e) => textEditor(e)}
      ></input>
      <button
        className="add-button"
        onClick={() => dispatch({ type: "Add", payload: task })}
      >
        Add Item
      </button>

      <div>
        {items !== null &&
          items.length > 0 &&
          items.map((items, index) => (
            <GroceryItem key={index} items={items} onDelete={()=>(dispatch({type:"Delete",payload:index}))} />
          ))}
      </div>
    </div>
  );
}

export default Body;
