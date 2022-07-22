import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

function AddTodos() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input_container"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="btn_container">
        <button className="btn" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodos;
