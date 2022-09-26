import React from "react";
import { Grid, Item, TableRow, TableCell } from "@mui/material";

export default function Test() {
  return (
    <div>
      <TableRow>
        <TableCell style={{ height: "100vh", backgroundColor: "red" }}>
          1
        </TableCell>
        <TableCell>
          <TableRow
            style={{ height: "100px", width: "1200px", backgroundColor: "red" }}
          >
            2
          </TableRow>
          <TableRow>3</TableRow>
        </TableCell>
      </TableRow>
    </div>
  );
}
