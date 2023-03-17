import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import Questions from './components/Questions'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  )
}

export default App
