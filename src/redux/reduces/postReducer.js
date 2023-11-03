const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      console.log(action.payload); // log the payload to the console
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default postReducer;