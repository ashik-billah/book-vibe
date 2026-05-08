import { StrictMode } from "react";
//add
import { createRoot } from "react-dom/client";
//add
import "./index.css";
import { router } from "./routes/Routes";
//add
import { RouterProvider } from "react-router";
import BookProvider from "./context/BookContext";
//add
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
);
