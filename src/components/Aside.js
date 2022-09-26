import React from "react";
import { handleTable } from "../services/TableService";

export default function Aside(props) {
  return (
    <div className="aside">
      <div className="aside-logo">
        <img
          src="https://i.pinimg.com/originals/09/17/04/0917045fcee27f48e768680d1f800577.jpg"
          alt=""
        />
      </div>
      <div className="aside-sections">
        <div
          className="aside-section"
          onClick={() => props.handletype("products")}
        >
          Products
        </div>
        <div
          className="aside-section"
          onClick={() => props.handletype("users")}
        >
          Users
        </div>
      </div>
    </div>
  );
}
