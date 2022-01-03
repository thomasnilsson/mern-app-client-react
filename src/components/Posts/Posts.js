import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Grid, Typography } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <Typography variant="h3" style={{ color: "white" }}>
      No posts yet :(
    </Typography>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((p) => (
        <Grid key={p._id} item xs={12} sm={6}>
          <Post post={p} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
