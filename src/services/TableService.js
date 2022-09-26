import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  deleteDoc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAp98ZLrNuaGzMWv53xewmGTsRrNVybp_g",
  authDomain: "admin-dashboard-525c0.firebaseapp.com",
  projectId: "admin-dashboard-525c0",
  storageBucket: "admin-dashboard-525c0.appspot.com",
  messagingSenderId: "458518491279",
  appId: "1:458518491279:web:83546c3f3f1c54d9ea00fa",
  measurementId: "G-1ZXG3J2GF8",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore();

const usersList = async () => {
  const usersSnap = await getDocs(collection(db, "users"));

  const usersList = usersSnap.docs.map((doc) => {
    const id = doc.id;
    return {
      id,
      ...doc.data(),
    };
  });
  return usersList;
};

const productsList = async () => {
  const productsSnap = await getDocs(collection(db, "products"));
  const productsList = productsSnap.docs.map((doc) => {
    const id = doc.id;
    return {
      id,
      ...doc.data(),
    };
  });
  return productsList;
};

const handleTable = (props) => {
  //   console.log(props);
  return props ? "users" : "products";
};

export { usersList, handleTable, productsList };
