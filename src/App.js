import Home from "./Components/Home/Home";
import { ContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
