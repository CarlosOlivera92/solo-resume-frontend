import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@assets/styles/global.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from '@pages/Home/Home';

function App() {

  return (
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </Router>
  )
}

export default App
