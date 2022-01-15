import { modulesAndLessons, reduxTypes } from "../../constants";

const initialState = {
  modules: modulesAndLessons,
  currentModule: {},
  currentLesson: {},
};

const changeLesson = (state, payload) => {
  if (payload.currentLesson === state.currentLesson)
    return { ...state, currentLesson: {}, currentModule: {} };
  return { ...state, ...payload };
};

const firstLesson = (state) => {
  const newState = { ...state };
  newState.currentModule = state.modules[0];
  newState.currentLesson = state.modules[0].lessons[0];
  return newState;
};

const lastLesson = (state) => {
  const newState = { ...state };
  const { modules } = state;
  newState.currentModule = modules[modules.length - 1];
  const { lessons } = newState.currentModule;
  newState.currentLesson = lessons[lessons.length - 1];
  return newState;
};

const nextLesson = (state) => {
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

const previousLesson = (state) => {
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

const reducer = (state = initialState, action) => {
  try {
    const { type, payload } = action;
    switch (type) {
      case reduxTypes.changeLesson:
        return changeLesson(state, payload);
      case reduxTypes.firstLesson:
        return firstLesson(state);
      case reduxTypes.lastLesson:
        return lastLesson(state);
      case reduxTypes.previousLesson:
        return previousLesson(state);
      case reduxTypes.nextLesson:
        return nextLesson(state);
    }
  } catch (e) {}
  return state;
};

export default reducer;
