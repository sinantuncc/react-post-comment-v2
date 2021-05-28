import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { useInput } from "../hooks/useInput";
import { addPost } from "../redux/actions";

const INITIAL_STATE = {
  author: "",
  title: "",
  content: "",
};

const WritePost = () => {
  const [inputs, setInputs, clearInputs] = useInput("inputs", INITIAL_STATE);

  const { author, title, content } = inputs;

  const dispatch = useDispatch();

  let date = new Date();

  const data = {
    ...inputs,
    totalView: 0,
    createdAt: date
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(data, clearInputs));
  };

  return (
    <>
      <h2>Write a Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Author</label>
          <input name="author" value={author} onChange={setInputs} required />
        </Form.Field>
        <Form.Field>
          <label>Post Title</label>
          <input name="title" value={title} onChange={setInputs} required />
        </Form.Field>
        <Form.TextArea
          label="Post Content"
          name="content"
          value={content}
          onChange={setInputs}
          required
        />
        <Button content="Add Post" icon="add" color="olive" />
        <Button
          content="Clear All"
          icon="remove"
          color="black"
          onClick={clearInputs}
        />
      </Form>
    </>
  );
};

export default WritePost;
