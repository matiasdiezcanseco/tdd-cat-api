interface IInput {
  onChange: (e: string) => void
  title?: string
}

const Input: React.FC<IInput> = ({ onChange, title = '' }) => {
  return (
    <>
      <label>{title}</label>
      <input
        className="border-[1px] rounded-md border-gray-600 p-2 bg-transparent"
        type="text"
        onChange={(e: any) => onChange(e.target.value)}
      />
    </>
  )
}

export default Input
