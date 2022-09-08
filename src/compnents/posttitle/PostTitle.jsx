import React from "react";
import classes from "./PostTitle.module.css";
import { useMediaQuery } from "react-responsive";

const PostTitle = ({ user, photos, posts }) => {
  const isDeskTopOrMobile = useMediaQuery({ minWidth: 321 });
  if (!user || !photos) {
    return null;
  }
  const photo = photos.find((photo) => photo.albumId === user.id);
  const post = posts.find((item) => item.userId === user.id);

  return (
    <div className={classes.post_module}>
      {isDeskTopOrMobile ? (
        <img
          className={classes.post_module_photo}
          src={photo ? photo.url : ""}
          alt="картинка"
        />
      ) : null}
      <div key={user.id} className={classes.post_module_autor}>
        Autor: {user.name}
      </div>
      <div className={classes.post_module_company}>
        Company: {user.company.name}
      </div>
      <div className={classes.post_module_title}>
        Title:{post ? post.title : ""}
      </div>
      {isDeskTopOrMobile ? (
        <div className={classes.post_module_body}>{post ? post.body : ""}</div>
      ) : null}
    </div>
  );
};

export default PostTitle;
