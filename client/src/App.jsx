import Navbar from './components/layout/Navbar'
import Courses from './pages/Courses'
import Reports from './pages/Reports'

function App() {
  return (
    <div className='h-dvh flex flex-col'>
      <Navbar/>
      {/* <Reports/> */}
      <Courses/>
    </div>
  )
}

export default App
