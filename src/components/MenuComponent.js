import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import { Input, Menu, MenuItem, MenuMenu, Segment } from "semantic-ui-react";
import WritePost from "./WritePost";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import EditPost from "./EditPost";

const MenuComponent = () => {
  let location = useLocation()

  return (
    <div>
      <Menu pointing secondary>
        <MenuItem
          name="posts"
          active={"/" === location.pathname}
          as={Link}
          to="/"
        />
        <MenuItem
          name="write-post"
          active={"/write-post" === location.pathname}
          as={Link}
          to="/write-post"
        />
        <MenuMenu position="right">
          <Menu.Item>
            <Input focus icon="search" placeholder="Search..." />
          </Menu.Item>
        </MenuMenu>
      </Menu>

      <Segment>
        <Route path="/" exact component={Posts} />
        <Route path="/write-post" exact component={WritePost} />
        <Route path="/posts/:id" exact component={PostDetail} />
        <Route path="/posts/:id/edit" exact component ={EditPost} />
      </Segment>
    </div>
  );
};

export default MenuComponent;
