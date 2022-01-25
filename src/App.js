import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/HomePage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intake from "./pages/IntakePage";
import Dashboard from "./pages/DashboardPage";
import Training from "./pages/TrainingPage";
import Documentation from "./pages/DocumentationPage";
import Support from "./pages/SupportPage";
import Utilities from "./pages/UtilitiesPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="intake" element={<Intake />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="training" element={<Training />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="support" element={<Support />} />
        <Route path="utilities" element={<Utilities />} />
      </Routes>
    </div>
  );
}

export default App;