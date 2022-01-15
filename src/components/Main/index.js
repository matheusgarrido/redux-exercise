import { connect } from "react-redux";
import React from "react";
import "./style.scss";
import { reduxTypes } from "../../constants";

const Lesson = (props) => {
  const { module, lesson, changeLesson } = props;
  const click = () => changeLesson(module, lesson);
  return (
    <li key={lesson.id} className="main__lesson" onClick={click}>
      {lesson.title}
    </li>
  );
};

const Module = (props) => {
  const { module } = props;
  return (
    <div key={module.id}>
      {module.title}
      <ul>
        {module.lessons.map((lesson) => (
          <Lesson {...props} lesson={lesson} />
        ))}
      </ul>
    </div>
  );
};

const Main = ({ modules, currentModule, currentLesson, changeLesson }) => {
  return (
    <main className="main">
      <h1>Programação Web </h1>
      {modules.map((module) => (
        <Module module={module} changeLesson={changeLesson} />
      ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  modules: state.modules,
  currentModule: state.currentModule,
  currentLesson: state.currentLession,
});

const mapDispatchToProps = (dispatch) => ({
  changeLesson: (module, lesson) =>
    dispatch({
      type: reduxTypes.changeLesson,
      payload: { currentModule: module, currentLesson: lesson },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
