import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/student/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },
]);
