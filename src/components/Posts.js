import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
import { Button, Container, Grid } from "semantic-ui-react";
import { getPosts } from "../redux/actions";
import Loading from "./Loading";
import PostList from "./PostList";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const { push } = useHistory();

  return (
    <>
      {loading ? (
        <Loading />
      ) : posts.length ? (
        <>
          <h2>Last Posts</h2>
          <Grid columns="three" stackable>
            <Grid.Row>
              {posts.map((post) => (
                <Grid.Column>
                  <PostList post={post} key={post.id} />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </>
      ) : (
        <Container textAlign="center">
          <h3>Opps! No post. write a now!</h3>
          <Button
            icon="add"
            color="olive"
            onClick={() => push("/write-post")}
          />
        </Container>
      )}
    </>
  );
};

export default Posts;
