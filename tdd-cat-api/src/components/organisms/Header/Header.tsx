import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className="py-4 bg-slate-500">
      <ul className="flex justify-center space-x-40 text-lg text-gray-100">
        <li className="cursor-pointer hover:underline" onClick={() => handleNavigation('/')}>
          Home
        </li>
        <li className="cursor-pointer hover:underline" onClick={() => handleNavigation('/find')}>
          Buscar
        </li>
      </ul>
    </div>
  )
}

export default Header
