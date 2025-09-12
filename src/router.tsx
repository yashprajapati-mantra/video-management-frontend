import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
      </div>
    ),
  },
]);

export default router;
