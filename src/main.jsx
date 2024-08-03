import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import About from './pages/about.jsx';
import Schedule from './pages/schedule.jsx';
import Blog from './pages/blog.jsx';
import Contact from './pages/contact.jsx';
import Service from './pages/service.jsx';





const main=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/service',
    element:<Service />

  }
  ,
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/schedule',
    element:<Schedule />
  },
  {
    path:'/blog',
    element:<Blog />
  },
  {
    path:'/contact',
    element:<Contact />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={main} />,
)
