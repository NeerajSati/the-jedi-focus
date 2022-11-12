import "./App.css";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import SearchPage from "./SearchPage/SearchPage";
import VideoPage from "./VideoPage/VideoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/video/:videoId",
    element: (
      <>
        <NavBar />
        <VideoPage />
      </>
    ),
  },
  {
    path: "*",
    element: <SearchPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
