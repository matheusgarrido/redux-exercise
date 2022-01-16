import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import * as lessonActions from "../../redux/actions/lessons";

const Footer = ({ dispatch }) => {
  return (
    <footer>
      <ul className="buttons">
        <li onClick={() => dispatch(lessonActions.firstLesson())}>
          Primeira Aula
        </li>
        <li onClick={() => dispatch(lessonActions.previouLesson())}>
          Voltar Aula
        </li>
        <li onClick={() => dispatch(lessonActions.nextLesson())}>
          Próxima Aula
        </li>
        <li onClick={() => dispatch(lessonActions.lastLesson())}>
          Última Aula
        </li>
      </ul>
    </footer>
  );
};

export default connect()(Footer);
