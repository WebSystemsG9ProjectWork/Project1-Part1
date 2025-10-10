import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from './pages/Navbar';
import { ToastProvider } from './context/ToastContext';
import Container from 'react-bootstrap/Container';
import SignIn from "./pages/SignIn";
import { Eye } from "lucide-react";
import './styles/gradient.css';
import { useTheme } from './context/ThemeContext';
import { Button } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import { LoadScript } from "@react-google-maps/api";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [locationPathName, setLocationPathName] = useState(location.pathname);
  const { theme, toggleTheme } = useTheme();

  const closeNavbar = (locationPathName) =>  {
    locationPathName != "" ? setLocationPathName(locationPathName) : "";
    setExpanded(false)
  };

  return (
    <ToastProvider>
        <Router>
         <Navbar/>
          <Routes path="/" element={<SignIn />}>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
    </ToastProvider>
  );
}

export default App;