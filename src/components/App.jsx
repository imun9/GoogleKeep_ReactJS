import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteh, index) => (
        <Note
          key={index}
          id={index}
          onChecked={deleteNote}
          title={noteh.title}
          content={noteh.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
