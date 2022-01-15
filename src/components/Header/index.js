import React from "react";
import { connect } from "react-redux";

const header = ({ module, lesson }) => {
  return (
    <header style={{ textAlign: "center" }}>
      {!!lesson.id ? (
        <>
          <h1>Módulo {module.title}</h1>
          <p>
            Aula {lesson.id}: {lesson.title}
          </p>
        </>
      ) : (
        <>
          <h1>Bem-vindo!</h1>
          <p>Selecione uma aula</p>
        </>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  module: state.currentModule,
  lesson: state.currentLesson,
});

export default connect(mapStateToProps)(header);
