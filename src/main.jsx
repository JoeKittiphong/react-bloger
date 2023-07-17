import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import Home from '../pages/Home.jsx'
import AddPost from '../pages/AddPost.jsx'
import Content from '../pages/Content.jsx'
import { RecoilRoot } from 'recoil'
import EditPost from '../pages/EditPost.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/addPost",
    element: <AddPost />
  },
  {
    path: "/content",
    element: <Content />
  },
  {
    path : "/editPost",
    element : <EditPost/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
)
