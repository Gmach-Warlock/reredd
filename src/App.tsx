import Root from './Root'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root /> } />
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
