const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};
const getCat = async () => {
  return await fetch("https://dev-api.mstars.mn/api/cats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};
// const getUsers = async () => {
//   return await fetch("http://localhost:3000/api/users", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify(),
//   });
// };
const getUsers = async () => {
  return await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};
const getProducts = async () => {
  return await fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};
const createData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
};
const updateData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
};

export const otherServices = {
  getAllFood,
  getCat,
  getUsers,
  getProducts,
  createData,
  updateData,
};

/*
     1. GET https://dev-api.mstars.mn/api/cat/food/catyamarnegid/0
     2. POST https://dev-api.mstars.mn/api/basket
     2.1 {
        "food_id" : "6182420fc0d7632762f7755a",
        "user_email" : "andyerdene@gmail.com",
        "quantity": -10,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkMmFjOWY1YzFiMDI2NDE4NTY0Nzk4IiwiZW1haWwiOiJraGFuZ2Fpa2h1dUBnbWFpbC5jb20iLCJpYXQiOjE2NDIzOTAyODYsImV4cCI6MTY0MjM5NzQ4Nn0.yWfyscjbVlTC6GcTD76CDW4g-cG9uuuptVqYdgdlkuc"
        }
     3. POST https://dev-api.mstars.mn/api/basket-info
     3.1 {
        "user_email": "andyerdene@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkMmFjOWY1YzFiMDI2NDE4NTY0Nzk4IiwiZW1haWwiOiJraGFuZ2Fpa2h1dUBnbWFpbC5jb20iLCJpYXQiOjE2NDI0MzU3ODgsImV4cCI6MTY0MjQ0Mjk4OH0.diX9JO-7szd3epM0ZJjvOI59Cd7uUCOprAMT-KjLPDY"
        }
    
     4. GET https://dev-api.mstars.mn/api/cats
     5. GET https://dev-api.mstars.mn/api/cat/food/618b4838d9ba304e7d5c83dd/6182248ec0d7632762f77542
     6. GET https://dev-api.mstars.mn/api/cat/618b4838d9ba304e7d5c83dd
     7. GET https://dev-api.mstars.mn/api/orders
     7.1 {
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkMmFjOWY1YzFiMDI2NDE4NTY0Nzk4IiwiZW1haWwiOiJraGFuZ2Fpa2h1dUBnbWFpbC5jb20iLCJpYXQiOjE2NDczMzQwOTQsImV4cCI6MTY0NzM0MTI5NH0.JRXNKWp8l6q9g23e4CxsThHQ6tqPDSHQh6hxOZ7Vp4s"
       }
     8. POST https://dev-api.mstars.mn/admin/register
     8.1     {
            "email" : "khangaikhuu@gmail.com",
            "password" : "testtest",
            "name": "khangaikhuu",
            "address" : "bayangol duureg 1st khoroo"
        }
     9. POST https://dev-api.mstars.mn/admin/login
     9.1 {
          "email": "khangaikhuu@gmail.com",
          "password" : "test"
        }
    */
