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
   
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
