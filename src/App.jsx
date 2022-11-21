
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TesterList from './pages/TesterList'
import TesterView from "./pages/TesterView"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TesterList />} />
        <Route path="/:id" element={<TesterView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
