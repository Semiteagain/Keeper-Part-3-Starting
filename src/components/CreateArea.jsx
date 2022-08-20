import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNotes((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
  }

  function addNewNote(event) {
    props.onAdd(newNote);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={newNote.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={newNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNewNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
