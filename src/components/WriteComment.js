import React from "react";
import { useInput } from "../hooks/useInput";
import { Header, Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions";
import { useParams } from "react-router";

const INITIAL_STATE = {
  name: "",
  commentBody: "",
};

const WriteComment = () => {
  const [inputs, setInputs, clearInputs] = useInput("comment", INITIAL_STATE);
  const { name, commentBody } = inputs;

  const { id } = useParams();

  const dispatch = useDispatch();

  let date = new Date();

  const data = {
    ...inputs,
    createdAt: date,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(id, data));
    clearInputs();
  };

  return (
    <>
      <Header as="h3">Leave Comment</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            name="name"
            placeholder="Your name"
            value={name}
            onChange={setInputs}
            required
          />
        </Form.Field>
        <Form.TextArea
          name="commentBody"
          placeholder="Your Commet"
          value={commentBody}
          onChange={setInputs}
          required
        />
        <Button
          content="Submit"
          labelPosition="left"
          icon="send"
          color="olive"
        />
      </Form>
    </>
  );
};

export default WriteComment;
