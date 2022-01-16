import { createActions, createReducer } from "reduxsauce";
import { modulesAndLessons } from "../../constants";

//Types and actions (creators)
export const { Types, Creators } = createActions({
  changeLesson: ["currentModule", "currentLesson"],
  firstLesson: [],
  lastLesson: [],
  previousLesson: [],
  nextLesson: [],
});

//Reducers
const initialState = {
  modules: modulesAndLessons,
  currentModule: {},
  currentLesson: {},
};

const changeLesson = (state = initialState, action) => {
  const { currentModule, currentLesson } = action;
  if (currentLesson === state.currentLesson)
    return { ...state, currentLesson: {}, currentModule: {} };
  return { ...state, currentLesson, currentModule };
};

const firstLesson = (state = initialState, action) => {
  const newState = { ...state };
  newState.currentModule = state.modules[0];
  newState.currentLesson = state.modules[0].lessons[0];
  return newState;
};

const lastLesson = (state = initialState, action) => {
  const newState = { ...state };
  const { modules } = state;
  newState.currentModule = modules[modules.length - 1];
  const { lessons } = newState.currentModule;
  newState.currentLesson = lessons[lessons.length - 1];
  return newState;
};

const nextLesson = (state = initialState, action) => {
  const newState = { ...state };
  const { currentLesson, currentModule, modules } = state;
  if (!!currentModule.id) {
    const indexLesson = currentModule.lessons.findIndex(
      (l) => l.id === currentLesson.id
    );
    if (currentModule.lessons.length !== indexLesson + 1)
      newState.currentLesson = currentModule.lessons[indexLesson + 1];
    else if (modules.length !== currentModule.id) {
      newState.currentModule = modules[currentModule.id];
      newState.currentLesson = newState.currentModule.lessons[0];
    }
  }
  return newState;
};

const previousLesson = (state = initialState, action) => {
  const newState = { ...state };
  const { currentLesson, currentModule, modules } = state;
  if (!!currentModule.id) {
    const indexLesson = currentModule.lessons.findIndex(
      (l) => l.id === currentLesson.id
    );
    if (indexLesson > 0)
      newState.currentLesson = currentModule.lessons[indexLesson - 1];
    else if (currentModule.id > 1) {
      newState.currentModule = modules[currentModule.id - 2];
      const { lessons } = newState.currentModule;
      newState.currentLesson = lessons[lessons.length - 1];
    }
  }
  return newState;
};

export default createReducer(initialState, {
  [Types.CHANGE_LESSON]: changeLesson,
  [Types.FIRST_LESSON]: firstLesson,
  [Types.LAST_LESSON]: lastLesson,
  [Types.PREVIOUS_LESSON]: previousLesson,
  [Types.NEXT_LESSON]: nextLesson,
});
