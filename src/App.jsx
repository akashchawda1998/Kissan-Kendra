import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Routing from './routes/routing'
import CategoriesComponent from './components/CatagoriesComponent'
import { Provider } from 'react-redux'
import store from './features/store/Store'
import { Toaster } from 'react-hot-toast'


function App() {


  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <Routing />
      </Provider>

    </>
  )
}

export default App
