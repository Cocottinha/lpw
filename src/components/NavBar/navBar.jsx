"use client"
import Link from "next/link"
import Button from "../Button/button"
import { UserAuth } from "@/context/AuthContext"
import { useEffect, useState } from "react"
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore"
import { firebaseConfig } from "@/app/firebase"
import { initializeApp } from "firebase/app"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const NavBar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const[name, setName] = useState("");
  const[email, setEmail] = useState("")
  const[admin, setAdmin] = useState("");

  const[users, setUsers] = useState([])

  const userCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers((data.docs.map((doc) => ({...doc.data(), id: doc.id}))))     
    }
    getUsers();
  },[])

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center px-1 text-2xl font-semibold whitespace-nowrap dark:text-white">FAETERJ</span>
          </Link>
          {!user ? (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" texto={"Log In"} handleSignIn={handleSignIn}>Log In</Button>
            </div>
          ) : (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bem vindo! {user.displayName}</div>
              <Button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" texto={"Log Out"} handleSignIn={handleSignOut}>Log In</Button>
            </div>
          )}

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/HomeAluno" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Atividades</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}