import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";
import { Creators as lessonActions } from "../../redux/ducks/lessons";

const Footer = (props) => {
  const { firstLesson, previousLesson, nextLesson, lastLesson } = props;
  return (
    <footer>
      <ul className="buttons">
        <li onClick={() => firstLesson()}>Primeira Aula</li>
        <li onClick={() => previousLesson()}>Voltar Aula</li>
        <li onClick={() => nextLesson()}>Próxima Aula</li>
        <li onClick={() => lastLesson()}>Última Aula</li>
      </ul>
    </footer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(lessonActions, dispatch);

export default connect(null, mapDispatchToProps)(Footer);
