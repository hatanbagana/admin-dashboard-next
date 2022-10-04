const createUser = async (props) => {
  return await fetch("http://localhost:3000/api/admin/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};
const loginUser = async (props) => {
  return await fetch("http://localhost:3000/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};
const user_info = async (props) => {
  localStorage.setItem("token", props.data.id);
  localStorage.setItem("user", JSON.stringify(props.data));
  // console.log(  JSON.stringify(props.data));
};

export const userService = {
  createUser,
  loginUser,
  user_info,
};
