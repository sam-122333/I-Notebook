import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6391a202536d8fce3ed00c7b",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "First Title",
      description: "this is my first description",
      tag: "super hero",
      date: "2022-12-08T08:36:18.096Z",
      __v: 0,
    },
    {
      _id: "6391a20e536d8fce3ed00c7e",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-08T08:36:30.598Z",
      __v: 0,
    },
    {
      _id: "6392c768324e084fd8446e8b",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:08.292Z",
      __v: 0,
    },
    {
      _id: "6392c769324e084fd8446e8d",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:09.390Z",
      __v: 0,
    },
    {
      _id: "6392c769324e084fd8446e8f",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:09.898Z",
      __v: 0,
    },
    {
      _id: "6392c76a324e084fd8446e91",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:10.231Z",
      __v: 0,
    },
    {
      _id: "6392c76a324e084fd8446e93",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:10.487Z",
      __v: 0,
    },
    {
      _id: "6392c76a324e084fd8446e95",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my second description",
      tag: "super hero",
      date: "2022-12-09T05:28:10.725Z",
      __v: 0,
    },
    {
      _id: "6395a7d63d82525e6deae736",
      user: "63918c33ccb49b3e6bcaabc7",
      title: "Second Title",
      description: "this is my secon   vcvgsdfd description",
      tag: "super hero",
      date: "2022-12-11T09:50:14.055Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
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
  const deleteNote = () => {};

  // Edit a note
  const editNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
