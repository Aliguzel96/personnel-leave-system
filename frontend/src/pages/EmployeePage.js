import { useState } from "react";
import { useLeave } from "../hooks/useLeave";
import { FormControlLabel, Checkbox } from "@mui/material";

import dayjs from "dayjs";
import {
  LocalizationProvider,
  DatePicker
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

const initialForm = {
  fullName: "",
  leaveType: "ANNUAL",
  startDate: "",
  endDate: "",
  description: "",
  halfDay: false
};

function EmployeePage() {

  const [form, setForm] = useState(initialForm);
  const { create, loading, snackbar, setSnackbar } = useLeave();

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!form.fullName || !form.startDate || !form.endDate) {
      return "Zorunlu alanları doldur";
    }

    if (form.startDate > form.endDate) {
      return "Başlangıç tarihi bitişten sonra olamaz";
    }

    return null;
  };

  const calculateDays = () => {
    if (!form.startDate || !form.endDate) return 0;

    const start = new Date(form.startDate);
    const end = new Date(form.endDate);

    const diff = end - start;
    const days = diff / (1000 * 60 * 60 * 24);

    return days;
  };

  const shouldDisableDate = (date) => {
    const today = dayjs().startOf("day");

    // geçmiş günleri kapat
    if (date.isBefore(today)) return true;

    // hafta sonu kapat (0 = pazar, 6 = cumartesi)
    const day = date.day();
    if (day === 0 || day === 6) return true;

    return false;
  };

  const handleSubmit = async () => {

    const error = validate();

    if (error) {
      setSnackbar({
        open: true,
        message: error,
        severity: "error"
      });
      return;
    }

    await create(form);
    setForm(initialForm);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>

        {/* SNACKBAR */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        >
          <Alert severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        <Typography variant="h5">İzin Talebi</Typography>

        {/* AD SOYAD */}
        <TextField
          fullWidth
          label="Ad Soyad"
          margin="normal"
          value={form.fullName}
          onChange={e => handleChange("fullName", e.target.value)}
        />

        {/* İZİN TÜRÜ */}
        <TextField
          select
          fullWidth
          label="İzin Türü"
          margin="normal"
          value={form.leaveType}
          onChange={e => handleChange("leaveType", e.target.value)}
        >
          <MenuItem value="ANNUAL">Yıllık</MenuItem>
          <MenuItem value="SICK">Sağlık</MenuItem>
          <MenuItem value="PERSONAL">Mazeret</MenuItem>
        </TextField>

        {/* BAŞLANGIÇ */}
        <DatePicker
          label="Başlangıç"
          value={form.startDate ? dayjs(form.startDate) : null}
          onChange={(value) =>
            handleChange("startDate", value ? value.format("YYYY-MM-DD") : "")
          }
          shouldDisableDate={shouldDisableDate}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
        />

        {/* BİTİŞ */}
        <DatePicker
          label="Bitiş"
          value={form.endDate ? dayjs(form.endDate) : null}
          onChange={(value) =>
            handleChange("endDate", value ? value.format("YYYY-MM-DD") : "")
          }
          minDate={form.startDate ? dayjs(form.startDate) : dayjs()}
          shouldDisableDate={shouldDisableDate}
          slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={form.halfDay}
              onChange={(e) => handleChange("halfDay", e.target.checked)}
            />
          }
          label="Yarım Gün İzin"
        />


        {/* AÇIKLAMA */}
        <TextField
          fullWidth
          label="Açıklama"
          margin="normal"
          value={form.description}
          onChange={e => handleChange("description", e.target.value)}
        />

        {/* GÜN SAYISI */}
        {calculateDays() > 0 && (
          <Typography sx={{ mt: 2 }}>
            İzin süresi: {calculateDays()} gün
          </Typography>
        )}

        {/* SUBMIT */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </Button>

      </Box>
    </LocalizationProvider>
  );
}

export default EmployeePage;