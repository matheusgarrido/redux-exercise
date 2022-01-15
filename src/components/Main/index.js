import { connect } from "react-redux";
import React from "react";
import "./style.scss";
import { reduxTypes } from "../../constants";

const Lesson = (props) => {
  const { module, lesson, changeLesson, currentLesson } = props;
  const click = () => changeLesson(module, lesson);
  return (
    <li
      className={`main__lesson ${
        !!currentLesson && currentLesson.id === lesson.id ? "main__current" : ""
      }`}
      onClick={click}
    >
      {lesson.title}
    </li>
  );
};

const Module = (props) => {
  const { module, currentModule } = props;
  return (
    <div>
      <p className={currentModule.id === module.id ? "main__current" : ""}>
        {module.title}
      </p>
      <ul>
        {module.lessons.map((lesson) => (
          <Lesson {...props} lesson={lesson} key={lesson.id} />
        ))}
      </ul>
    </div>
  );
};

const Main = (props) => {
  const { modules } = props;
  return (
    <main className="main">
      <h1>Programação Web </h1>
      {modules.map((module) => (
        <Module {...props} module={module} key={module.id} />
      ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  modules: state.lessons.modules,
  currentModule: state.lessons.currentModule,
  currentLesson: state.lessons.currentLesson,
});

const mapDispatchToProps = (dispatch) => ({
  changeLesson: (module, lesson) =>
    dispatch({
      type: reduxTypes.changeLesson,
      payload: { currentModule: module, currentLesson: lesson },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
