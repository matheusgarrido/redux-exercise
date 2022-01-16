import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";
import { Actions as lessonActions } from "../../redux/ducks/lessons";

const Footer = ({ firstLesson, previouLesson, nextLesson, lastLesson }) => {
  return (
    <footer>
      <ul className="buttons">
        <li onClick={() => firstLesson()}>Primeira Aula</li>
        <li onClick={() => previouLesson()}>Voltar Aula</li>
        <li onClick={() => nextLesson()}>Próxima Aula</li>
        <li onClick={() => lastLesson()}>Última Aula</li>
      </ul>
    </footer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(lessonActions, dispatch);

export default connect(null, mapDispatchToProps)(Footer);
