import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import Questions from './components/Questions'
import Practise from './components/Practise'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/practise" element={<Practise />} />
      </Routes>
    </>
  )
}

export default App
