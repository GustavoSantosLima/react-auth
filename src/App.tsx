import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./RoutesProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
