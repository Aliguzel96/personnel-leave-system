import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import AdminPage from "./pages/AdminPage";
import { AppBar, Toolbar, Button } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Personel
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Yönetici
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Çıkış
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<EmployeePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;