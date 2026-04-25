import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import api from "../services/api";

function LoginPage() {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        username: user,
        password: pass
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin";
    } catch (e) {
      alert("Hatalı giriş");
    }
  };

  return (
    <Box sx={{ maxWidth: 300, margin: "auto", mt: 10 }}>
      <Typography variant="h6">Admin Giriş</Typography>

      <TextField
        fullWidth
        label="Kullanıcı"
        margin="normal"
        onChange={e => setUser(e.target.value)}
      />

      <TextField
        fullWidth
        label="Şifre"
        type="password"
        margin="normal"
        onChange={e => setPass(e.target.value)}
      />

      <Button fullWidth variant="contained" onClick={handleLogin}>
        Giriş
      </Button>
    </Box>
  );
}

export default LoginPage;