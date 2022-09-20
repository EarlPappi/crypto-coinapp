import { Route, Routes } from "react-router-dom";
import About from "./Components/Directory/About/About";
import Contact from "./Components/Directory/Contact/Contact";
import Dashboard from "./Components/Directory/Dashboard/Dashboard";
import Exchange from "./Components/Directory/Exchange/Exchange";
import Statistics from "./Components/Directory/Statistics/Statistics";
import Portfolio from "./Components/Directory/Portfolio/Portfolio";
import Home from "./Components/Home/Home";
import { ContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> }>
            <Route index element={ <Dashboard/> }/>
            <Route path="dashboard" element={ <Dashboard/> }/>
            <Route path="exchange" element={ <Exchange/> }/>
            <Route path="statistics" element={ <Statistics/> }/>
            <Route path="portfolio" element={ <Portfolio/> }/>
            <Route path="about-us" element={ <About/> }/>
            <Route path="contact-us" element={ <Contact/> }/>
          </Route>
        </Routes>

        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
