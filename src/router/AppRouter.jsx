import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginpage/LoginPage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import PostsPage from "../pages/postspage/PostsPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/postspage" element={<PostsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
