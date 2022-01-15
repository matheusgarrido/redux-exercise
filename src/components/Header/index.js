import React from "react";
import { connect } from "react-redux";
import { modulesAndLessons } from "../../constants";

const header = ({ state }) => {
  const module = "HTML";
  const lesson = "Aula 1";
  console.log(state);
  return (
    <div style={{ textAlign: "center" }}>
      {module} | {lesson}
    </div>
  );
};

export default connect((state) => ({
  state: state,
}))(header);
