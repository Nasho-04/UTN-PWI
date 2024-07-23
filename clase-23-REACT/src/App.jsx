import React from "react"
import Chat from "./components/Chat/Chat.jsx"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import ContactList from "./components/ContactList/ContactList.jsx"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ContactList></ContactList>}></Route>
      <Route path="/chat/:id" element={<Chat></Chat>}></Route>
    </Routes>
    </>
  )
}

export default App
