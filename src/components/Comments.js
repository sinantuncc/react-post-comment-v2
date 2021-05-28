import moment from "moment";
import { useSelector } from "react-redux";
import { Header, Comment } from "semantic-ui-react";
import WriteComment from "./WriteComment";

const Comments = () => {
  const comments = useSelector((state) => state.comments);
  return (
    <>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>

        {comments.length ? (
          comments.map((comment) => (
            <Comment key={comment.id}>
              <Comment.Avatar src="" />
              <Comment.Content>
                <Comment.Author as="a">{comment.name}</Comment.Author>
                <Comment.Metadata>
                  <div>{moment(comment.createdAt).calendar()} </div>
                </Comment.Metadata>
                <Comment.Text>{comment.commentBody}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))
        ) : (
          <h4>No Comments</h4>
        )}
        <WriteComment />
      </Comment.Group>
    </>
  );
};

export default Comments;
