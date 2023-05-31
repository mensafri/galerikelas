// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwx1-ZQmAGp8W-u125DOi6w7shsum9UIo",
  authDomain: "galeri-kelas.firebaseapp.com",
  projectId: "galeri-kelas",
  storageBucket: "galeri-kelas.appspot.com",
  messagingSenderId: "631029923220",
  appId: "1:631029923220:web:bd973517d78561033c2381",
  measurementId: "G-ZPGTXMTL2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const collection_name = "persons";

export const storage = getStorage(app);

export const inputPersons = async (nama, ig, imgUrl) => {
  try {
    await addDoc(collection(db, collection_name), {
      nama: nama,
      ig: ig,
      imgUrl: imgUrl,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const findPersons = async () => {
  const quotes_ref = await getDocs(collection(db, collection_name));

  const res = [];

  quotes_ref.forEach((person) => {
    res.push({
      id: person.id,
      ...person.data(),
    });
  });
  console.log(res);
  return res;
};
