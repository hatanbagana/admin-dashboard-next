const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Polls = require("../models/foods");
const Admin = require("../models/admin");
const Users = require("../models/users");
const Products = require("../models/products");

router.get("/products", (req, res) => {
  Products.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.get("/orders", (req, res) => {
  Polls.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.put("/users", (req, res) => {
  // console.log(JSON.parse(JSON.stringify(req.params)));
  console.log(req.body._id);
  Users.findOneAndUpdate(
    { _id: req.body._id },
    {
      name: req.body.name,
      mail: req.body.mail,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      img: req.body.img,
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          message: "success",
          data: data,
        });
      }
    }
  );
});
router.put("/products", (req, res) => {
  // console.log(JSON.parse(JSON.stringify(req.params)));
  console.log(req.body);
  Users.findOneAndUpdate(
    { _id: req.body._id },
    {
      name: req.body.name,
      price: req.body.price,
      recipe: req.body.recipe,
      img: req.body.img,
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          message: "success",
          data: data,
        });
      }
    }
  );
});

router.post("/foods", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newPoll = new Polls({
    _id: new mongoose.Types.ObjectId(),
    orderdate: reqBody.orderdate,
    orderNumber: reqBody.orderNumber,
    user: reqBody.user,
    order: reqBody.order,
    total: reqBody.total,
    card: reqBody.card,
    phoneNumber: reqBody.phoneNumber,
  });

  newPoll
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});

router.post("/login", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);

  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      data.map((e) => {
        if (e.mail == reqBody.email) {
          if (e.password == reqBody.password) {
            console.log("aaa");
            return res.json({
              message: "success",
              data: {
                mail: e.mail,
                id: e._id,
                name: e.name,
              },
            });
          }
        }
      });
    }
  });
});
router.post("/admin/login", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);

  Admin.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      data.map((e) => {
        if (e.mail == reqBody.email) {
          if (e.password == reqBody.password) {
            console.log("aaa");
            return res.json({
              message: "success",
              data: {
                mail: e.mail,
                id: e._id,
                name: e.name,
              },
            });
          }
        }
      });
    }
  });
});

router.post("/admin/register", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newAdmin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    mail: reqBody.mail,
    password: reqBody.password,
    name: reqBody.name,
  });

  newAdmin
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
router.post("/users", (req, res) => {
  // {
  //     "mail": "test@gmail.com",
  //     "password" : "testhatnaa",
  //     "name":"hatnaatest",
  //     "img": "neg source bga"

  // }
  const reqBody = req.body;

  console.log(reqBody);
  let newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    mail: reqBody.mail,
    password: reqBody.password,
    name: reqBody.name,
    img: reqBody.img,
    phoneNumber: reqBody.phoneNumber,
  });

  newUser
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
router.post("/products", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newProduct = new Products({
    _id: new mongoose.Types.ObjectId(),
    name: reqBody.name,
    price: reqBody.price,
    recipe: reqBody.recipe,
    img: reqBody.img,
  });

  newProduct
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
module.exports = router;
