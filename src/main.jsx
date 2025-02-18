import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "../public/assets/scss/main.scss"
import App from './App.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
