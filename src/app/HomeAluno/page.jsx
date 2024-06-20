"use client"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase";

export default function HomeAluno() {

  const [imgURL, setImageURL] = useState("")
  const [process, setProcess] = useState(0)

  const handleUpload = (event) => {
    event.preventDefault()

    const file = event.target[0]?.files[0]

    if(!file){
      return
    }
    const storageRef = ref(storage, `images/${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProcess(progress)
      },
      error =>{
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImageURL(url)
        })
      }
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleUpload}>
        <input type="file"/>
        <button type="submit">Enviar</button>
      </form>
      <br/>
      {!imgURL && <progress value={process} max="100"/>}
      {imgURL && <img src={imgURL}/>}
    </main>
  );
}
