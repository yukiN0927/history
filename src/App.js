import Top from "./page/Top";
import * as React from "react";
import ListItemMenu from "./common/ListItemMenu";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

function App() {
  const { page } = useSelector((state) => state.history);
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ListItemMenu />
      </Grid>
      <Grid item xs={8}>
        {page === "Top" && <Top />}
      </Grid>
    </Grid>
  );
}

export default App;
