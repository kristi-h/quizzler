import React from 'react'
import './style.css'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Intro from './pages/Intro'
import Questions, {loader as questionsLoader} from './pages/Questions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path="/" 
        element={<Intro />} 
      />
      <Route 
          path="/questions" 
          element={<Questions />} 
          loader={questionsLoader}
      />
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


