import Layout from '../../templates/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div
        data-testid="homepage-testid"
        className="flex flex-col items-center justify-center h-full"
      >
        <h1 className="text-5xl">Un lugar para los amantes de los gatos</h1>
        <p className="text-2xl">Encuentra tus razas favoritas</p>
      </div>
    </Layout>
  )
}

export default Home
