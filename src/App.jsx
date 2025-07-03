import './App.css'
import Routing from './routes/Routing'
import { Provider } from 'react-redux'
import store from './features/store/Store'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './utils/ScrollToTop'



function App() {


  return (
    <>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop/>
        <Routing />
      </Provider>

    </>
  )
}

export default App
