import Header from '../../organisms/Header/Header'

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow bg-gray-300">{children}</div>
    </div>
  )
}

export default Layout
