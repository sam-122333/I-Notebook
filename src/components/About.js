import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      This is about page and the name of page owner is {a.state.name} and class
      is {a.state.class} {a.state.channel}
    </div>
  );
};

export default About;
