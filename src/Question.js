import React from "react";

function Question(props) {
  return (
    <div style={{ marginTop: 40 }}>
      <p>
        <b>Question {props.id}:</b> {props.question}
      </p>
      <p>Get ready to talk to an audience about this issue.</p>
    </div>
  );
}

export default Question;
