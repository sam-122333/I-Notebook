import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:7000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all note
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MThjMzNjY2I0OWIzZTZiY2FhYmM3In0sImlhdCI6MTY3MDQ4MzEwNn0.C9p7y0CBEUXEN7m0g2yr01KqsYgKYK7rb3Yaf1rts7s",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MThjMzNjY2I0OWIzZTZiY2FhYmM3In0sImlhdCI6MTY3MDQ4MzEwNn0.C9p7y0CBEUXEN7m0g2yr01KqsYgKYK7rb3Yaf1rts7s",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "6395a7d625e6deae736",
      user: "63918c33ccb49bfse6bcaabc7",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-11T09:50:14.055Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
    console.log(newNote);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5MThjMzNjY2I0OWIzZTZiY2FhYmM3In0sImlhdCI6MTY3MDQ4MzEwNn0.C9p7y0CBEUXEN7m0g2yr01KqsYgKYK7rb3Yaf1rts7s",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // Logic to edit the clint
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
