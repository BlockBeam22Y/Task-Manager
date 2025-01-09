import { Routes, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'
import Courses from './pages/Courses'
import Reports from './pages/Reports'
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='reports' element={<Reports/>} />
        <Route path='reports/:id/courses' element={<Courses/>} />
        <Route path='reports/:id/calculator/:code' element={<Calculator/>} />
        <Route path='reports/:id/calculator' element={<Calculator/>} />
      </Route>
    </Routes>
  )
}

export default App
