import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          type="text"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          type="text"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(note);
            setNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
