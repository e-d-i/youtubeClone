import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/VideoSection";
import SearchPage from "./components/SearchPage";
import Backdrop from "./components/Backdrop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <Router>
      <Header openSidebar={toggleSidebar} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="appMain">
                <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
                <Sidebar sidebar={sidebar} />
                <VideoSection />
              </div>
            </>
          }
        ></Route>
        <Route
          path="/search/:searchTerm"
          element={
            <>
              <div className="appMain">
                <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
                <Sidebar sidebar={sidebar} />
                <SearchPage />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
