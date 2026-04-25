import { useState, useEffect } from "react";
import {
  createLeave,
  getLeaves,
  updateLeaveStatus
} from "../services/leaveService";

export function useLeave() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const fetchLeaves = async () => {
    try {
      const res = await getLeaves();
      setData(res.data);
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Veriler alınamadı",
        severity: "error"
      });
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const create = async (form) => {
    setLoading(true);

    try {
      await createLeave(form);

      setSnackbar({
        open: true,
        message: "Talep oluşturuldu",
        severity: "success"
      });

      fetchLeaves();

    } catch (e) {
      setSnackbar({
        open: true,
        message: e.response?.data || "Hata oluştu",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await updateLeaveStatus(id, status);
      fetchLeaves();
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Güncelleme hatası",
        severity: "error"
      });
    }
  };

  return {
    data,
    loading,
    snackbar,
    setSnackbar,
    create,
    updateStatus
  };
}