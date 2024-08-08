'use client';
import { Box, Container } from "@mui/material";
import "./globals.css";
import AppBarComponent from "@/shared/components/AppBar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBarComponent />
          <Box m={"auto"} maxWidth={1400}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
