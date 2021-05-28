import { api } from "../api/api";

export const getPosts = () => (dispatch) => {
  api()
    .get("/posts")
    .then((res) =>
      dispatch({
        type: "GET_POSTS_SUCCESS",
        payload: res.data,
      })
    )
    .catch(() => {
      dispatch({
        type: "ERRORS",
        payload: "An error occurred while retrieving data.",
      });
    });
};

export const getSinglePost = (id) => (dispatch) => {
  api()
    .get(`/posts/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_SINGLE_POST_SUCCESS",
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: "ERRORS",
        payload: "An error occurred while retrieving data.",
      });
    });
};

export const getComments = (id) => (dispatch) => {
  api()
  .get(`/posts/${id}/comments`)
  .then(res=>{
    dispatch({
      type: "GET_COMMENTS_SUCCESS",
      payload : res.data
    })
  })
  .catch(() => {
    dispatch({
      type: "ERRORS",
      payload: "An error occurred while retrieving comments.",
    });
  });
}

export const addPost = (data, clearInputs) => (dispatch) => {
  api()
    .post("/posts", data)
    .then((res) => {
      dispatch({
        type: "ADD_POST",
        payload: res.data,
      });
      clearInputs();
    })
    .catch(() => {
      dispatch({
        type: "ERRORS",
        payload: "An error occurred while adding data.",
      });
    });
};

export const addComment= (id, data) => dispatch => {
  api()
  .post(`/posts/${id}/comments`, data)
  .then(res=>{
    dispatch({
      type: "ADD_COMMENT",
      payload: res.data
    })
  })
  .catch(() => {
    dispatch({
      type: "ERRORS",
      payload: "An error occurred while adding data.",
    });
  });
}

export const updatePost = (id, data, setInputs, push) => dispatch =>{
  api()
  .put(`/posts/${id}`, data)
  .then(res=>{
    dispatch({
      type: "UPDATE_POST",
      payload: res.data
    })
    setInputs("")
    push(`/posts/${id}`)
  })
  .catch(() => {
    dispatch({
      type: "ERRORS",
      payload: "An error occurred while updating post.",
    });
  });
}

export const updateTotalView = (id, data) => (dispatch) => {
  api()
    .put(`/posts/${id}`, data)
    .then((res) => {
      dispatch({
        type: "UPDATE_TOTAL_VİEW",
        payload: res.data
      });
      console.log(res.data)
    });
};

export const deletePost = (id, push) => dispatch => {
  api()
  .delete(`/posts/${id}`)
  .then(()=>{
    dispatch({
      type: "DELETE_POST_SUCCESS",
      payload: id
    })
    push("/")
  })
  .catch(() => {
    dispatch({
      type: "ERRORS",
      payload: "An error occurred while deleting post.",
    });
  });
}