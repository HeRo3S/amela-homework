import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h6: {
      fontFamily: "Inter",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "164px",
          height: "61px",
          borderRadius: "0px",
          fontFamily: "Inter",
          backgroundColor: "#c9cbcb",
          color: "#000000",
        },
      },
    },
  },
});

export default theme;
