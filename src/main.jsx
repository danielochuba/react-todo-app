import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import TodoApp from '@/components/TodoApp'
import '@/styles/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
