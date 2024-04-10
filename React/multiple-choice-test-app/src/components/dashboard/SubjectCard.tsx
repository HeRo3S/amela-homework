import { Box, Card, Grid, Typography, styled } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ScoreOutlinedIcon from "@mui/icons-material/ScoreOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

const StyledCard = styled(Card)({
  width: "400px",
  height: "175px",
  marginBottom: "20px",
  backgroundColor: "#d9d9d9",
  border: "solid 1px",
  borderRadius: "4px",
});

const StyledGridContainer = styled(Grid)({
  padding: "0px 10px",
});

export default function SubjectCard() {
  return (
    <StyledCard>
      <StyledGridContainer container>
        <Grid item xs={12}>
          <Typography variant="h5">
            Kiểm tra an toàn bảo mật thông tin
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <TimerOutlinedIcon />
            <Typography variant="h6">7 phút</Typography>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
            <ScoreOutlinedIcon />
            <Typography variant="h6">200/250 điểm</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StarOutlinedIcon fontSize="large" />
          <StarOutlinedIcon fontSize="large" />
          <StarOutlinedIcon fontSize="large" />
          <StarOutlinedIcon fontSize="large" />
          <StarOutlineOutlinedIcon fontSize="large" />
        </Grid>
      </StyledGridContainer>
    </StyledCard>
  );
}
