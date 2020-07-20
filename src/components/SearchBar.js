import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    margin: "10px 20px 0 20px",
    display: "flex",
    alignItems: "center",
    minWidth: 300,
    maxWidth: 300
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function CustomizedInputBase({
  OnSubmit,
  onButtonClick,
  visibility
}) {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const formSubmit = e => {
    e.preventDefault();
    e.target.getElementsByTagName("input")[0].blur();
    if (!term) return;
    if (!term.trim()) return;
    OnSubmit(term);
    setTerm("");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Button
        variant="contained"
        style={
          visibility
            ? { margin: "10px 0 0 10px", marginRight: "auto" }
            : { display: "none" }
        }
        color="primary"
        onClick={() => onButtonClick()}
      >
        Get All Users
      </Button>
      <form onSubmit={formSubmit} style={{ marginLeft: "auto" }}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Users..."
            inputProps={{ "aria-label": "Search Users..." }}
            value={term}
            required
            onChange={e => setTerm(e.target.value)}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </form>
    </div>
  );
}
