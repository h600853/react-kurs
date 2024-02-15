import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          React kurs
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
