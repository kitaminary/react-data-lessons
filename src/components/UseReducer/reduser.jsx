export const initialState = {
  name: "",
  number: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    default:
      return state;
  }
}
