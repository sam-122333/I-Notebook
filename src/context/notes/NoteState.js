import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "harry",
    class: "10th",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({ name: "sherry", class: "12th", channel: "class" });
    }, 1000);
  };
  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
