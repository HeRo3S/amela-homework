import { Box, Grid, Pagination, styled } from "@mui/material";
import SubjectCard from "../components/dashboard/SubjectCard";
import DashboardDrawer from "../components/dashboard/Drawer";

const drawerWidth = "289px";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: `calc(100% - ${drawerWidth})`,
  height: "1024px",
  backgroundColor: "#c4c4c4",
  flex: 1,
}));

const StyledCardsContainer = styled(Grid)(({ theme }) => ({
  padding: "50px 0",
  width: `calc(90%)`,
  maxHeight: "787px",
  backgroundColor: "#d9d9d9",
}));

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <DashboardDrawer width={drawerWidth}></DashboardDrawer>
      <StyledMainContainer>
        <StyledCardsContainer container>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>{" "}
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>{" "}
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>{" "}
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>{" "}
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectCard />
          </Grid>
        </StyledCardsContainer>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </StyledMainContainer>
    </Box>
  );
}
