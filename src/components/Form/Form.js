import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const currentPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  useEffect(() => {
    if (currentPost) {
      setPostData(currentPost);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    console.log("Submitted ");
    e.preventDefault();

    if (currentId) {
      console.log("current id " + currentId);
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setPostData({});
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        autoComplete="false"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {(currentId ? "Editing" : "Creating") + " a post"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value,
            })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          color="primary"
          size="large"
          type="submit"
          fullWidth
          variant="contained"
        >
          Submit
        </Button>

        <Button
          className={classes.buttonSubmit}
          color="secondary"
          size="small"
          onClick={handleClear}
          fullWidth
          variant="contained"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
