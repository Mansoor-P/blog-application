export const initialState = {
  loading: false,
  blogs: [],
  error: null,
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: action.payload || [],
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
