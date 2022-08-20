import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function upDateNote(newNote) {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={upDateNote} />
      {note.map((noteList, index) => {
        return (
          <Note key={index} title={noteList.title} content={noteList.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
