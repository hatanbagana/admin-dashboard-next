import React, { useEffect, useState } from "react";
import { usersList, productsList, handleTable } from "../services/TableService";
import {
  uploadImage,
  createData,
  deleteData,
  updateData,
  deleteFromFirebase,
} from "../services/TableService";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
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
  Button,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
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
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [val, setVal] = useState(true);
  const [temp, setTemp] = useState([]);
  const [imgsource, setImageSource] = useState(null);
  const [handledis, setHandleDis] = useState(false);
  console.log(imgsource);
  const handleOpen = () => setOpen(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);

  useEffect(() => {
    usersList().then((data) => setUsers(data));
    productsList().then((data) => setProducts(data));
  }, []);
  return (
    <>
      <TableContainer
        style={{
          width: "70vw",
          fontSize: "1.2rem",
          // border: "1px solid black",
          margin: "0 auto",
        }}
        component={Paper}
      >
        <Table arial-label="simple table">
          <TableHead>
            {props.list === "users" ? (
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Img</TableCell>
                <TableCell>
                  <div className="add_btn" style={{ width: "50px" }}>
                    <div className="btn" onClick={handleOpen}>
                      Add
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell>Img</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Recipe</TableCell>
                <TableCell>
                  <div className="add_btn" style={{ width: "50px" }}>
                    <div className="btn" onClick={handleOpen}>
                      Add
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableHead>

          <TableBody className="tableBody">
            {props.list === "users"
              ? users.map((list, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{list.Name}</TableCell>
                      <TableCell>{list.email}</TableCell>
                      <TableCell>{list.phone}</TableCell>
                      <TableCell>
                        <img src={`${list.imgSrc}`} alt="" />
                      </TableCell>
                      <TableCell>
                        <DeleteForeverOutlinedIcon
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            color: " rgb(37, 150, 190)",
                          }}
                          onClick={() => {
                            deleteData(list.id, "users").then((res) => {
                              if (res === "success") setVal(!val);
                            });
                          }}
                        />
                        <EditIcon
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            color: " rgb(37, 150, 190)",
                          }}
                          // onClick={() => console.log("hi")}
                          onClick={() => {
                            setTemp(list);
                            handleOpen1();
                          }}
                        />
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
                      <TableCell>{list.recipe}</TableCell>
                      <TableCell>
                        <DeleteForeverOutlinedIcon
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            color: " rgb(37, 150, 190)",
                          }}
                          onClick={() =>
                            deleteData(list.id, "products").then((res) => {
                              if (res === "success") setVal(!val);
                            })
                          }
                        />
                        <EditIcon
                          style={{
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            color: " rgb(37, 150, 190)",
                          }}
                          onClick={() => {
                            setTemp(list);
                            handleOpen1();
                          }}
                        />
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "20px" }}
          >
            Add new {props.list}
          </Typography>
          <Typography
            id="modal-modal-description"
            component="span"
            sx={{ mt: 2 }}
          >
            {props.list === "users" ? (
              <div className="add_form">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e.target[6].value);
                    createData(
                      {
                        Name: e.target[0].value,
                        email: e.target[2].value,
                        phone: e.target[4].value,
                        imgSrc: imgsource,
                      },
                      "users"
                    ).then((res) => {
                      if (res !== null) {
                        handleClose();
                      } else {
                        alert("err");
                      }
                    });
                  }}
                >
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Mail"
                    variant="outlined"
                  />
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                  <label htmlFor="" id="image">
                    Upload Image
                  </label>

                  <input
                    type="file"
                    onChange={async (e) => {
                      setHandleDis(true);
                      // console.log("asdasd");\
                      const data = await uploadImage(
                        e.target.files[0],
                        "users"
                      );
                      console.log(data);
                      setHandleDis(false);
                      setImageSource(data);
                    }}
                  />
                  <Button variant="contained" type="submit" disable={handledis}>
                    Submit
                  </Button>
                </form>
              </div>
            ) : (
              <div className="add_form">
                <form
                  action=""
                  onSubmit={(e) => {
                    createData(
                      {
                        productName: e.target[0].value,
                        price: e.target[2].value,
                        recipe: e.target[4].value,
                        imgSrc: imgsource,
                      },
                      "products"
                    ).then((res) => {
                      if (res !== null) {
                        handleClose();
                      }
                    });
                    e.preventDefault();
                    uploadImage(e.target[6].files[0], props.list);
                  }}
                >
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Product Name"
                    variant="outlined"
                  />
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                  />
                  <TextField
                    required
                    disabled={handledis}
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Recipe"
                    variant="outlined"
                  />
                  <label htmlFor="" id="image">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={async (e) => {
                      // console.log("asdasd");
                      const data = await uploadImage(
                        e.target.files[0],
                        "products"
                      );
                      setImageSource(data);
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={handledis}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            )}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit {props.list}
          </Typography>
          <Typography
            id="modal-modal-description"
            component="span"
            sx={{ mt: 2 }}
          >
            {props.list === "users" ? (
              <div className="edit_form">
                <form
                  action=""
                  onSubmit={(e) => {
                    updateData(
                      {
                        Name: e.target[0].value,
                        email: e.target[2].value,
                        phone: e.target[4].value,
                        imgSrc: imgsource,
                        id: temp.id,
                      },
                      "users"
                    ).then((res) => {
                      if (res !== null) {
                        handleClose();
                      }
                    });
                    e.preventDefault();
                    uploadImage(e.target[6].files[0], props.list);
                  }}
                >
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    defaultValue={`${temp.Name}`}
                  />
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Mail"
                    variant="outlined"
                    defaultValue={`${temp.email}`}
                  />
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    defaultValue={`${temp.phone}`}
                  />
                  <label htmlFor="" id="image">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={async (e) => {
                      // console.log("asdasd");
                      const data = await uploadImage(
                        e.target.files[0],
                        "users"
                      );
                      setImageSource(data);
                    }}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            ) : (
              <div className="edit_form">
                <form
                  action=""
                  onSubmit={(e) => {
                    updateData(
                      {
                        productName: e.target[0].value,
                        price: e.target[2].value,
                        recipe: e.target[4].value,
                        imgSrc: imgsource,
                        id: temp.id,
                      },
                      "products"
                    ).then((res) => {
                      if (res !== null) {
                        handleClose();
                      }
                    });
                    e.preventDefault();
                    uploadImage(e.target[6].files[0], props.list);
                  }}
                >
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Product Name"
                    variant="outlined"
                    defaultValue={`${temp.productName}`}
                  />
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    defaultValue={`${temp.price}`}
                  />
                  <TextField
                    sx={{ mb: 2, width: "100%" }}
                    id="outlined-basic"
                    label="Recipe"
                    variant="outlined"
                    defaultValue={`${temp.recipe}`}
                  />
                  <label htmlFor="" id="image">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={async (e) => {
                      // console.log("asdasd");
                      const data = await uploadImage(
                        e.target.files[0],
                        "products"
                      );
                      setImageSource(data);
                    }}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
