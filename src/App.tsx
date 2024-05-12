import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
function App() {

  return (
    <>
      <Provider store={store}>

        <Router>
          <Routes>
            <Route path="/" element={<h1> Hello</h1>} />
            <Route path="/login" element={<h1> Login</h1>} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
