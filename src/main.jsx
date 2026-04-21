import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes/Routs.jsx'
import { ToastContainer } from 'react-toastify'
import BookProvider from './context/BookProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
    
    <ToastContainer />
  </StrictMode>,
)
