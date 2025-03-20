import './App.css';
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';



const router = createRouter({routeTree})

function App() {


  return (
    <><RouterProvider router={router} /></>
  )
}

export default App
