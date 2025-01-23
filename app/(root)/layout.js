import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Typography, Box, Container, CssBaseline, Alert } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import AccountAccess from "./AccountAccess";
import "../globals.css";
import Wireframe from "@/components/Wireframe";
import theme from "@/themes/main";
import Image from "next/image";

export const metadata = {
  title: "ReadyUp",
  description: "A learning tool for students",
};

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "900"],
  style: ["italic", "normal"],
});

const Header = () => {
  return (
    <Box component="header" pt={2} pb={5}>
      <Container maxWidth={false} sx={{ mb: 2 }}>
        <AccountAccess />
        <Typography
          variant="h1"
          position="relative"
          width={250}
          height={78}
          mt={[2, 0]}
          sx={{
            pointerEvents: "none",
            userSelect: "none",
            marginInline: ["auto", "initial"],
            filter: "drop-shadow(2px 4px 6px black);",
          }}
        >
          <Image src="/images/logo.png" fill alt="Logo" />
        </Typography>
      </Container>

      <Alert
        severity="warning"
        variant="filled"
        sx={{ justifyContent: "center" }}
      >
        Welcome to{" "}
        <Typography variant="span" fontWeight={700}>
          ReadyUp
        </Typography>
        . This app is currently in very early stages of development. Thank you
        for your patience as we sort things out.
      </Alert>
    </Box>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Wireframe />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body className={`antialiased`}>
            <Box
              width="100vw"
              height="100vh"
              position="fixed"
              bgcolor="background.primary"
              overflow="auto"
            >
              <CssBaseline />
              <Header />
              <Box component="main">{children}</Box>
            </Box>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
