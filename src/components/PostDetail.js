import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
} from "semantic-ui-react";
import { getComments, getSinglePost } from "../redux/actions";
import Comments from "./Comments";
import DeleteModal from "./DeleteModal";

const PostDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePost(id));
    dispatch(getComments(id));
  }, []);

  const postDetails = useSelector((state) => state.postDetails); // array

  return (
    <Container textAlign="justified">
      <Grid>
        <GridRow>
          <GridColumn width="12">
            <Header as="h2">{postDetails.title}</Header>
          </GridColumn>
          <GridColumn width="4">
            <Button.Group>
              <Button color="olive" as={Link} to={`/posts/${postDetails.id}/edit`} content="Edit" />
              <Button.Or />
              <DeleteModal post={postDetails} />
            </Button.Group>
          </GridColumn>
        </GridRow>
      </Grid>

      {/* <p>Total {postDetails.totalView} Views </p> */}
      <Divider />
      <p>{postDetails.content}</p>
      <Comments />
    </Container>
  );
};

export default PostDetail;
