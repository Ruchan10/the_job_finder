import React,{useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import BookmarkPage from "./components/Bookmark";
import ApplicationPage from "./components/apaplications_page";
import AddJob from "./components/AddJob";
import HomePage from "./components/home_page";
import LoginPage from "./components/login_page";
import SignupPage from "./components/signup_page";
import { RequireAuth } from "./utils/RequireAuth";
import { AuthProvider } from "./utils/authContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
    
    const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
    setLoading(false);
  }, []);
if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={authenticated ? (
                <HomePage />
              ) : (
              <RequireAuth>
                <HomePage />
              </RequireAuth>)
            }
          />
          <Route
            path="/application"
            element={authenticated ? (
                <ApplicationPage />
              ) : (
              <RequireAuth>
                <ApplicationPage />
              </RequireAuth>)
            }
          />
          <Route
            path="/bookmark"
            element={authenticated ? (
                <BookmarkPage />
              ) : (
              <RequireAuth>
                <BookmarkPage />
              </RequireAuth>)
            }
          />
          <Route
            path="/addjob"
            element={authenticated ? (
                <AddJob />
              ) : (
              <RequireAuth>
                <AddJob />
              </RequireAuth>)
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
