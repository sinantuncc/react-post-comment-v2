const INITIAL_STATE = {
  posts: [],
  errors: "",
  loading: true,
  postDetails: { title: "", author: "", content: "", totalView: 0 },
  comments: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //get operations
    case "GET_POSTS_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "GET_SINGLE_POST_SUCCESS":
      return { ...state, postDetails: action.payload, loading: false };
    case "GET_COMMENTS_SUCCESS":
      return { ...state, comments: action.payload, loading: false };

    // post operations
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, action.payload] };

    //Update operations
    case "UPDATE_TOTAL_VİEW":
      return {
        ...state,
        postDetails: { ...state.postDetails, totalView: action.payload },
      };
    case "UPDATE_POST":
      return {
        ...state,
        postDetails: { ...state.postDetails, ...action.payload },
      };

    //delete operations
    case "DELETE_POST_SUCCESS":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    // errors operations
    case "ERRORS":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default reducers;
