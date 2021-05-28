import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const PostList = ({ post }) => {
  const SelectColor = (value) => {
    let colors = [
      "red",
      "yellow",
      "orange",
      "violet",
      "pink",
      "olive",
      "blue",
      "purple",
      "brown",
      "teal",
      "grey",
      "green",
      "black",
    ];

    let index = value %= 13 
    return colors[index]
  };

  return (
    <>
      <Card
        fluid
        as={Link}
        to={`/posts/${post.id}`}
        extra={`Total ${post.totalView} Views`}
        color={SelectColor(post.id)}
        header={post.title}
        meta={`Writed by ${post.author}`}
        description={post.content}
      />
      <br />
    </>
  );
};

export default PostList;
