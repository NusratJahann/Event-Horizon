import { RouterProvider } from "react-router-dom";
import "./app.css";
import { router } from "./routes/routes";
import { VenueProvider } from "./Contexts/ProductContext";

function App() {
  return (
      <div>
        <VenueProvider><RouterProvider router={router}></RouterProvider></VenueProvider>
      </div>
  );
}

export default App;
