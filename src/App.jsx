
import { Route, Routes } from "react-router-dom"
import TesterList from './pages/TesterList'
import Navbar from './components/Navbar'
import TesterView from "./pages/TesterView"
function App() {


  return (

    <div className="container vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<TesterList />} />
        <Route path="/:id" element={<TesterView />} />
      </Routes>

    </div >


  )
}

export default App
