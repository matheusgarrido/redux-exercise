import { reduxTypes } from "../../constants";

export const changeLesson = (module, lesson) => ({
  type: reduxTypes.changeLesson,
  payload: { currentModule: module, currentLesson: lesson },
});

export const firstLesson = () => ({ type: reduxTypes.firstLesson });

export const lastLesson = () => ({ type: reduxTypes.lastLesson });

export const previouLesson = () => ({ type: reduxTypes.previousLesson });

export const nextLesson = () => ({ type: reduxTypes.nextLesson });
