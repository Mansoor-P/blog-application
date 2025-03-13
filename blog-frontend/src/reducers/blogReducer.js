export const initialState = {
  blogs: [],
  loading: true,
  error: null,
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, blogs: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
