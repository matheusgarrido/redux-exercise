import React from "react";
import { connect } from "react-redux";
import { modulesAndLessons } from "../../constants";

const header = (props) => {
  const module = "HTML";
  const lesson = "Aula 1";
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      {module} | {lesson}
    </div>
  );
};

const mapStateToProps = (state) => ({
  module: state.currentModule,
  lesson: state.currentLesson,
});

export default connect(mapStateToProps)(header);
