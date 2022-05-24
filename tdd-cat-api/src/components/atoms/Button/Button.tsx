import Loading from '../Loading/Loading'

interface IButton {
  text: string
  onClick: () => void
  loading?: boolean
}

const Button: React.FC<IButton> = ({ text, onClick, loading = false }) => {
  return (
    <button
      className="min-w-[80px] flex justify-center p-2 text-gray-200 rounded-md bg-slate-600"
      onClick={() => onClick()}
    >
      {loading ? <Loading loading /> : text}
    </button>
  )
}

export default Button
