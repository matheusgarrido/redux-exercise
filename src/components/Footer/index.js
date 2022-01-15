import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import { reduxTypes } from "../../constants";

const Footer = ({ dispatch }) => {
  const firstLesson = () => {
    dispatch({ type: reduxTypes.firstLesson });
  };
  const lastLesson = () => {
    dispatch({ type: reduxTypes.lastLesson });
  };
  const previouLesson = () => {
    dispatch({ type: reduxTypes.previousLesson });
  };
  const nextLesson = () => {
    dispatch({ type: reduxTypes.nextLesson });
  };
  return (
    <footer>
      <ul className="buttons">
        <li onClick={firstLesson}>Primeira Aula</li>
        <li onClick={previouLesson}>Voltar Aula</li>
        <li onClick={nextLesson}>Próxima Aula</li>
        <li onClick={lastLesson}>Última Aula</li>
      </ul>
    </footer>
  );
};

export default connect()(Footer);
