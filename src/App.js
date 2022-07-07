import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import TaskTracker from './components/TaskTracker/TaskTracker'
import About from './components/About/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<TaskTracker/>}
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
