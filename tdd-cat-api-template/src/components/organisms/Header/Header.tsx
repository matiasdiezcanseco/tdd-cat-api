import { useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <div className="py-4 bg-slate-500">
      <ul className="flex justify-center space-x-40 text-lg text-gray-100">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Buscar</li>
      </ul>
    </div>
  )
}

export default Header
