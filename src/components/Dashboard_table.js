import React, { useEffect, useState } from "react";
import { usersList, productsList, handleTable } from "../services/TableService";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Modal,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import ImageUpload from "./ImageUpload";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Dashboard_table(props) {
  // console.log(props.list);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    usersList().then((data) => setUsers(data));
    productsList().then((data) => setProducts(data));
  }, []);
  // handleTable.then((res) => console.log(res));
  // console.log(users);
  return (
    <>
      <div className="add_btn">
        <div className="btn" onClick={handleOpen}>
          Add
        </div>
      </div>
      <TableContainer style={{ width: "90vw" }} component={Paper}>
        <Table arial-label="simple table">
          <TableHead>
            {props.list === "users" ? (
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Img</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Img</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            )}
          </TableHead>

          <TableBody>
            {props.list === "users"
              ? users.map((list, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{list.Name}</TableCell>
                      <TableCell>{list.email}</TableCell>
                      <TableCell>{list.phone}</TableCell>
                      <TableCell>{list.imgSrc}</TableCell>
                      <TableCell>
                        <button>edit</button>
                      </TableCell>
                    </TableRow>
                  );
                })
              : products.map((list, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{list.productName}</TableCell>
                      <TableCell>{list.price}</TableCell>
                      <TableCell>
                        <button>edit</button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new {props.list}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="add_form">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(e.target[0].value);
                  console.log(e.target[2].value);
                  console.log(e.target[4].value);
                }}
              >
                <TextField
                  sx={{ mb: 2, width: "100%" }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ mb: 2, width: "100%" }}
                  id="outlined-basic"
                  label="Mail"
                  variant="outlined"
                />
                <TextField
                  sx={{ mb: 2, width: "100%" }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                {/* <ImageUpload cardName="Input Image" /> */}
                <button type="submit">asdsad</button>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
