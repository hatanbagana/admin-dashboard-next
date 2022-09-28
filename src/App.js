import "./styles/App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import Test from "./components/test";
import UploadTest from "./components/UploadTest";
import { useEffect, useState } from "react";
import { getImage } from "./services/TableService";
function App() {
  const [type, setType] = useState("users");
  const handleType = (val) => {
    setType(val);
  };
  console.log(type);
  useEffect(() => {
    console.log("aa");
  }, []);
  return (
    <div className="app">
      <Aside handletype={(val) => handleType(val)} />
      <Header />
      <Main list={type} />

      {/* <UploadTest /> */}
    </div>
    // <Test />
  );
}

export default App;
