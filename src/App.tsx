import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
function App() {

  return (
    <>
      <Provider store={store}>

        <Router>
          <Routes>
            <Route path="/" element={<h1> Hello</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
