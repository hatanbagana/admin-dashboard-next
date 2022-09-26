import React, { useEffect, useState } from "react";
import Dashboard_table from "./Dashboard_table";
import { usersList, productsList } from "../services/TableService";
// console.log(usersList, productsList);

export default function Main(props) {
  return (
    <div>
      <Dashboard_table list={props.list} />
    </div>
  );
}
