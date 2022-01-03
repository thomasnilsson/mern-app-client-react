import * as actions from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  console.log(action);
  switch (action.type) {
    case actions.DELETE:
      return posts.filter((post) => post._id !== action.payload.id);
    case actions.LIKE:
      return posts.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );
    case actions.FETCH_ALL:
      return action.payload;
    case actions.CREATE:
      return [...posts, action.payload];
    case actions.UPDATE:
      return posts.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );

    default:
      return posts;
  }
};

export default reducer;
