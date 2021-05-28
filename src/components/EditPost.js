import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import { getSinglePost, updatePost } from "../redux/actions";

const EditPost = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);

  const post = useSelector((state) => state.postDetails);

  const INITIAL_STATE = {
    author: post.author,
    title: post.title,
    content: post.content,
  };

  const [inputs, setInputs] = useState(INITIAL_STATE);

  const { author, title, content } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(post.id, inputs, setInputs, push));
  };

  return (
    <>
      <h2>Edit Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Author</label>
          <input name="author" value={author} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Post Title</label>
          <input name="title" value={title} onChange={handleChange} />
        </Form.Field>
        <Form.TextArea
          label="Post Content"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <Button content="Update Post" icon="edit" color="olive" />
      </Form>
    </>
  );
};

export default EditPost;
