import { RouterProvider } from "react-router-dom";
import "./app.css";
import { router } from "./routes/routes";

export function App() {
  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}
