import { ThemeProvider } from "@mui/material";
import ExamPage from "./pages/ExamPage.1";
import Login from "./pages/Login";
import theme from "./config/muiTheme";
import Dashboard from "./pages/Dashboard";
import ExamFinish from "./pages/ExamFinish";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExamFinish />
    </ThemeProvider>
  );
}

export default App;
