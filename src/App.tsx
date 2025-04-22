import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
export default App;
