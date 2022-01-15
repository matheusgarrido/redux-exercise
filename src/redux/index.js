import { createStore } from "redux";
import { modulesAndLessons, reduxTypes } from "../constants";

const initialState = {
  modules: modulesAndLessons,
  currentModule: {},
  currentLesson: {},
};

const reducer = (state = initialState, action) => {
  try {
    const { type, payload } = action;
    switch (type) {
      case reduxTypes.changeLesson:
        console.log(payload);
        return { ...state, ...payload };
    }
  } catch (e) {}
  return state;
};

const store = createStore(reducer);

export { store };
