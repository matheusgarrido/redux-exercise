import { connect } from "react-redux";
import React from "react";
import "./style.scss";

const Main = ({ modules, currentModule, currentLession }) => {
  console.log(modules, currentModule, currentLession);
  return (
    <main className="main">
      <h1>Programação Web </h1>
      {modules.map((module) => (
        <div key={module.id}>
          {module.title}
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id} className="main__lesson">
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  modules: state.modules,
  currentModule: state.currentModule,
  currentLession: state.currentLession,
});

export default connect(mapStateToProps)(Main);
