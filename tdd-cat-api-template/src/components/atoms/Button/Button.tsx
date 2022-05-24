import Loading from '../Loading/Loading'

interface IButton {
  text: string
  onClick: () => void
  loading?: boolean
}

const Button: React.FC<IButton> = ({}) => {
  return (
    <button className="min-w-[80px] flex justify-center p-2 text-gray-200 rounded-md bg-slate-600"></button>
  )
}

export default Button
