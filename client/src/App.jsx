import { Routes, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'
import Courses from './pages/Courses'
import Reports from './pages/Reports'
import Layout from './pages/Layout'
import { createContext, useState } from 'react'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'

export const ModalContext = createContext(null);

function App() {
  const [modal, setModal] = useState(null);

  return (
    <ModalContext.Provider value={setModal}>
      <Routes>
        <Route path='/' element={<Layout modal={modal}/>}>
          <Route path='reports' element={<Reports/>} />
          <Route path='reports/:id/courses' element={<Courses/>} />
          <Route path='reports/:id/calculator/:code' element={<Calculator/>} />
          <Route path='reports/:id/calculator' element={<Calculator/>} />
          <Route path='reports/:id/tasks' element={<Tasks/>} />
          <Route path='reports/:id/calendar' element={<Calendar/>} />
        </Route>
      </Routes>
    </ModalContext.Provider>
  )
}

export default App
