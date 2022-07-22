import React, { useEffect } from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import Title from "./components/Titles";
import Todos from "./components/Todos";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    const queries = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(queries, (snapshot) => {
      let todoArray = [];
      snapshot.forEach((doc) => {
        todoArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTodos(todoArray);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  const handleEdit = async (todo, newTitle) => {
    await updateDoc(doc(db, "todos", todo.id), {
      title: newTitle,
    });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="App">
      <div>
        <Title />
        <AddTodos />
        <div className="todo_container">
          {todos.length ? (
            todos.map((todo) => (
              <Todos
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                toggleComplete={toggleComplete}
              />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>Add a Task...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
