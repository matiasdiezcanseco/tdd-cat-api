interface IInput {
  onChange: (e: string) => void
  title?: string
}

const Input: React.FC<IInput> = ({}) => {
  return (
    <>
      <input className="border-[1px] rounded-md border-gray-600 p-2 bg-transparent" type="text" />
    </>
  )
}

export default Input
