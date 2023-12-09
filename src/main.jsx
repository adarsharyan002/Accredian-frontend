import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { ApiProvider } from './context/api';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>

     <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApiProvider>
        
      
      <App />
      </ApiProvider>
    </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>,

)
