import { createStore } from "redux";

const reducer = (state = null, action) => {
  console.log(state);
  console.log(action);
  return { value: "TESTE" };
};

const store = createStore(reducer);

export { store };
