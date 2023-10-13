import { useEffect, useState } from "react";
import Buttons from "./pages/Buttons";
import EditButton from "./pages/EditButton";
import CustomizeButton from "./pages/CustomizeButton";
import { useRoutes, Link } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Buttons />,
    },
    {
      path: "/edit/:id",
      element: <EditButton />,
    },
    {
      path: "/customize",
      element: <CustomizeButton />,
    },
  ]);

  return (
    <div className="m-3 mb-7">
      <div className="p-2 my-3 bg-gray-300 rounded-md">
        <Link to="/customize" className="btn btn-ghost normal-case text-xl">
          Customize Your Button
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          View Buttons
        </Link>
      </div>
      {element}
    </div>
  );
}

export default App;
