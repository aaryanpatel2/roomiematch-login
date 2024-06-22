import Signup from './Signup.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login.jsx'
import Home from './Home.jsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
