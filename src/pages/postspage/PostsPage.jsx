import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./PostsPage.module.css";
import PostTitle from "../../compnents/posttitle/PostTitle";
import { useSelector } from "react-redux";

const PostsPage = () => {
  const isAuth = useSelector((state) => state.toolkit.isAuth);
  const [posts, setPosts] = useState([{ title: "" }]);
  const [users, setUsers] = useState([
    { title: "", body: "", company: { name: "" } },
  ]);
  const [photos, setPhotos] = useState([]);
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setPhotos(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts();
    getUsers();
    getPhotos();
  }, []);
  return (
    <>
      {isAuth ? (
        <div className={classes.posts}>
          {users.map((user) => (
            <PostTitle
              posts={posts}
              user={user}
              photos={photos}
              key={user.id + 1}
            />
          ))}
        </div>
      ) : (
        <div className={classes.posts}>
          <h2>
            У вас нет доступа к данной странице, необходимо зарегистрироваться
          </h2>
        </div>
      )}
    </>
  );
};

export default PostsPage;
