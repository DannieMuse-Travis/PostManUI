import React from 'react'
import { mainRoute } from './router/MainRoute'
import {RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <div>
       <RouterProvider router={mainRoute}/>
    </div>
  )
}

export default App