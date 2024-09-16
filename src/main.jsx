import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Article from './pages/Article.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/:classList/:name" element={<Article />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
