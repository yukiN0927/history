import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import { Actions } from "../state/ducks/history";

function ListItemMenu() {
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem
        button
        style={{ height: "100px" }}
        onClick={() => {
          dispatch(Actions.setPage("Top"));
        }}
      >
        <ListItemText primary="movie" />
      </ListItem>
      <Divider />
      <ListItem
        button
        style={{ height: "100px" }}
        onClick={() => {
          dispatch(Actions.setPage("test"));
        }}
      >
        <ListItemText primary="test" />
      </ListItem>
    </List>
  );
}

export default ListItemMenu;
