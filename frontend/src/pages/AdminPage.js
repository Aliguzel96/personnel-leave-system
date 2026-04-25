import { useLeave } from "../hooks/useLeave";
import {
  Table, TableRow, TableCell, TableHead, TableBody,
  Button, Chip, Container, Typography,
  Snackbar, Alert
} from "@mui/material";

const calculateDays = (item) => {

  if (item.halfDay) return "Yarım Gün";

  const start = new Date(item.startDate);
  const end = new Date(item.endDate);

  const diff = end - start;
  let days = diff / (1000 * 60 * 60 * 24);

  if (days === 0) days = 1;

  return `${days} gün`;
};

function getColor(status) {
  if (status === "APPROVED") return "success";
  if (status === "REJECTED") return "error";
  return "default";
}

function AdminPage() {

  const { data, updateStatus, snackbar, setSnackbar } = useLeave();

  return (
    <>
      {/* 🔥 GLOBAL SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Container>
        <Typography variant="h5" sx={{ mt: 3 }}>
          İzin Talepleri
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>İsim</TableCell>
              <TableCell>Tarih</TableCell>
              <TableCell>Süre</TableCell>
              <TableCell>Durum</TableCell>
              <TableCell>Aksiyon</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>

                <TableCell>
                  {item.startDate} - {item.endDate}
                </TableCell>

                <TableCell>{calculateDays(item)}</TableCell>

                <TableCell>
                  <Chip
                    label={item.status}
                    color={getColor(item.status)}
                  />
                </TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => updateStatus(item.id, "APPROVED")}
                    disabled={item.status === "APPROVED"}
                    sx={{ mr: 1 }}
                  >
                    Onayla
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => updateStatus(item.id, "REJECTED")}
                    disabled={item.status === "REJECTED"}
                  >
                    Reddet
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

export default AdminPage;