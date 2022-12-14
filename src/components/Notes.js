import NoteItems from "./NoteItems";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import { useEffect } from "react";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []); // eslint-disable-next-line
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note, index) => {
          return <NoteItems note={note} index={index} key={note._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
