import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/student/Dashboard";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { AdminPanel } from "../layout/AdminPanel";
import { TeacherManagement } from "../pages/admin/TeacherManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/admin",
    element: <AdminPanel></AdminPanel>,
    children: [
      {
        index: true,
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "teachers",
        element: <TeacherManagement></TeacherManagement>,
      },
    ],
  },
]);
