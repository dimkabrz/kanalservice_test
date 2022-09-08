import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Navbar from "./compnents/UI/navbar/Navbar";
import { useDispatch } from "react-redux";
import { setAuth } from "./pages/toolkit/ToolkitSlice";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setAuth(true));
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
