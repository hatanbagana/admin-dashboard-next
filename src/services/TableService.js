import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";
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
const storage = getStorage(app);
const db = getFirestore();
const imageListRef = ref(storage, "/images");

// const testUpload = () => {
//   const mountainsRef = ref(storage, "mountains.jpg");
//   const mountainImagesRef = ref(storage, "images/mountains.jpg");
//   uploadBytes(mountainsRef, file).then((snapshot) => {
//     console.log("Uploaded a blob or file!");
//   });
// };
const updateData = async (data, type) => {
  const docRef = doc(db, type, data.id);

  updateDoc(docRef, data)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
      return "aa";
    })
    .catch((error) => {
      console.log(error);
    });
};

const uploadImage = async (ImageUpload, name) => {
  return new Promise((resolve, reject) => {
    let picName = `${name}/${ImageUpload.name + v4()}`;
    console.log(picName);
    const metadata = {
      contentType: "image/jpeg",
    };
    if (ImageUpload == null) return;
    const imageRef = ref(storage, picName);
    uploadBytes(imageRef, ImageUpload).then((res) => {
      // console.log(res.ref);
      getDownloadURL(res.ref).then((url) => {
        console.log(url);
        resolve(url);
      });
      alert("Image uploaded");
      // return picName;
    });
  });

  // return;
};

const getImage = () => {
  listAll(imageListRef).then((res) => {
    console.log(res);
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        console.log(url);
      });
    });
  });
};

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

const createData = async (data, tableType) => {
  for (const key in data) {
    // console.log(`${key}: ${data[key]}`);
    if (!data[key]) return null;
  }
  const docRef = await addDoc(collection(db, tableType), data);
  return "aa";
};

const deleteData = async (id, type) => {
  const res = await deleteDoc(doc(db, type, id));
  return "success";
};

const deleteImage = () => {
  const desertRef = ref(storage, "images/desert.jpg");
};
const deleteFromFirebase = (url) => {
  //1.
  let pictureRef = storage.refFromURL(url);
  //2.
  pictureRef.delete().catch((err) => {
    console.log(err);
  });
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

export {
  usersList,
  handleTable,
  productsList,
  uploadImage,
  getImage,
  createData,
  deleteData,
  updateData,
  deleteFromFirebase,
};
