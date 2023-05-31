import React, { useState } from "react";
import { inputPersons, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function InputPersons() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  const [nama, setNama] = useState("");
  const [ig, setIg] = useState("");

  const handleChangeName = (e) => {
    setNama(e.target.value);
  };

  const handleChangeIg = (e) => {
    setIg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return null;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        e.target[0].value = "";
        getDownloadURL(storageRef).then((downloadURL) => {
          setImgUrl(downloadURL);
          inputPersons(nama, ig, downloadURL);
        });
      }
    );
    setNama("");
    setIg("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="mb-10">Input Persons</h1>
      <form
        className="flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          className="border-solid border-2 border-sky-500 rounded p-3 m-4"
        />
        <input
          type="text"
          className="border-solid border-2 border-sky-500 rounded p-3 m-4"
          value={nama}
          placeholder="Masukkan Nama"
          onChange={handleChangeName}
        />
        <input
          type="text"
          className="border-solid border-2 border-sky-500 rounded p-3 m-4"
          value={ig}
          placeholder="Masukkan Instagram"
          onChange={handleChangeIg}
        />
        <progress value={progressPercent} max="100" className="mt-5" />
        <button
          type="submit"
          className="border-solid border-2 border-sky-500 mt-7 p-2 rounded-lg"
        >
          upload to firebase
        </button>
      </form>
      <img alt="" src={imgUrl} />
      <p>{imgUrl}</p>
    </div>
  );
}
