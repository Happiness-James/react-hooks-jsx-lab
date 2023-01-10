import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="about">
      <h2>About Me</h2>
      <p>Happiness is a young self-driven woman who is a student studying software engineering at Moringa School. She is able to communicate with people at all levels and get them to visualize her intentions.  She is highly motivated and enjoys challenges within a new or existing role, and feels flexible enough to meet the needs of any project given. She can understand programming beyond the constraints of the syntax, and also comprehend the logic behind how you should implement solutions to computing problems. </p>
      <img src={image} alt = "I made this"></img>
    </div>
  );
}

export default About;
