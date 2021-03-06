import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";

const ToDo = () => {
  const [list, setList] = useState([
    { id: 1, text: "To Learn NodeJS" },
    { id: 2, text: "To Learn MongoDB" },
  ]);
  const [toDo, setToDo] = useState("");
  const [showError, setShowError] = useState(false);

  const generateId = () => {
    if (list && list.length) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const displayError = () => {
    setShowError(true);
    const clearTimer = setTimeout(() => setShowError(false), 3000);
    return () => clearTimeout(clearTimer);
  };
  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      displayError();
      return;
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="ToDo">
      <h1 className="ToDo-Refresh">*Refresh to change background animation..*</h1>
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">Todo List</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
          })}
        </div>

        <div className="ToDoInput">
          <input
            type="text"
            placeholder="Add your todo.."
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
        <div className="ToDo-ErrorContainer">{showError && <p>Please enter a todo!</p>}</div>
      </div>
    </div>
  );
};

export default ToDo;
