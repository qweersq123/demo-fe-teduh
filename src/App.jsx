import './App.css';
import { useState } from 'react'
import Routes from "./route";
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

// supaya tidak double request

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer limit={3} autoClose={3000} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
