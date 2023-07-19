import React from "react";
import { Route, Routes } from "react-router-dom";
import BookmarkPage from "./components/Bookmark";
import ApplicationPage from "./components/apaplications_page";
import AddJob from "./components/AddJob";
import HomePage from "./components/home_page";
import LoginPage from "./components/login_page";
import SignupPage from "./components/signup_page";
import { RequireAuth } from "./utils/RequireAuth";
import { AuthProvider } from "./utils/authContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/application"
            element={
              <RequireAuth>
                <ApplicationPage />
              </RequireAuth>
            }
          />
          <Route
            path="/bookmark"
            element={
              <RequireAuth>
                <BookmarkPage />
              </RequireAuth>
            }
          />
          <Route
            path="/addjob"
            element={
              <RequireAuth>
                <AddJob />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
