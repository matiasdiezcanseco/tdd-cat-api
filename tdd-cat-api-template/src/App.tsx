import { Navigate, Route, Routes } from 'react-router-dom'
import Find from './components/pages/Find/Find'
import Home from './components/pages/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find" element={<Find />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
