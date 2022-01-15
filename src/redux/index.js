import { createStore } from "redux";
import { modulesAndLessons } from "../constants";

const initialState = {
  modules: modulesAndLessons,
  currentModule: {},
  currentLesson: {},
};

const reducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

const store = createStore(reducer);

export { store };
