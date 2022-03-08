import React, { useState} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [getInput, setInput] = useState("");
  const [getItems, setItems] = useState([]);
  const [getEditIndex, setEditIndex] = useState(0);
  const [getEdit, setEdit] = useState(false);
  const [getAlert, setAlert] = useState("");
  const [getAlertClass, setAlertCLass] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    if (getInput !== "") {
      if (getEdit === true) {
        const newArr = getItems.map((item, i) => {
          if (i === getEditIndex) {
            return getInput;
          }
          return item;
        })
        setItems(newArr);
        setAlert("Value changed");
        setAlertCLass("alert-message-add alert");
      } else {
        setItems([...getItems, getInput]);
        setAlert("Item added to the List");
        setAlertCLass("alert-message-add alert");
      }
      e.target.reset();
      setInput("");
      setEdit(false);
      
    }
  }

  function handleInput(e) {
    setInput(e.target.value)
    
  }

  function handleRemove(itemIndex) {
    const newArr = getItems.filter((item, i) => i !== itemIndex);
    if (getEdit === false) {
      setItems(newArr);
      setAlert("Item removed");
      setAlertCLass("alert-message-remove alert");
    }
  }

  function handleClearItems() {
    setItems([]);
    setAlert("Empty List");
    setAlertCLass("alert-message-remove alert");
  }
  
  function handleEdit(e, index) {
    const item = e.currentTarget.parentNode.parentNode.innerText;
    setInput(item);
    setEdit(true);
    setEditIndex(index);
    setAlert("Edit Item");
    setAlertCLass("alert-message-edit alert");
  }

  return (
    <div className="container">
      <div className="grocery-heading">
        <h1>Grocery List</h1>
        <img src="illustration.svg" alt="shopping cart illustration"></img>
        <div className="grocery-heading-line"></div>
      </div>
      <div className="grocery-content">
        <Alert getAlert={getAlert} setAlert={setAlert} alertClass={getAlertClass}/>
        <form className="grocery-form" onSubmit={handleSubmit}>
          <input onChange={handleInput} value={getInput} type="text" aria-label="enter grocery item" placeholder="e.g. eggs"></input>
          <button type="submit" value="submit">{getEdit ? "Edit" : "Submit"}</button>
        </form>
        {getItems.length !== 0 && <div className="grocery-content-separator"></div>}
        <List item={getItems} removeItem={handleRemove} editItem={handleEdit} canEdit={getEdit}/>
        {getItems.length !== 0 && <button className="clear-button" type="button" value="clear items" onClick={handleClearItems}>Clear Items</button>}
      </div>
      
    </div>
    
  )
}

export default App
