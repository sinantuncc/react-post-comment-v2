import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { deletePost } from "../redux/actions";

function DeleteModal({ post }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const {push} = useHistory()

  const handleClick = () => {
    dispatch(deletePost(post.id, push));
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="tiny"
      trigger={<Button color="red" >Delete</Button>}
    >
      <Header>
        <Icon name="trash alternate outline" />
        Delete Post
      </Header>
      <Modal.Content>
        <p>Are you sure you want to delete the post <b>'{post.title}'</b>?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="arrow left" /> No
        </Button>
        <Button color="red" inverted onClick={handleClick}>
          <Icon name="remove" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteModal;
