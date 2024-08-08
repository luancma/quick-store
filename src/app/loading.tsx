import { Box, CircularProgress } from "@mui/material";

export default function LoadingHome() {
  return (
    <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <CircularProgress color="primary" sx={{
        zIndex: 2000
      }} />
    </Box>
  );
}