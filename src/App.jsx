import { useRoutes, Link } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

function App() {
  const element = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/new', element: <AddCreator /> },
  ])

  return (
    <div className="container">
      <section className="hero">
        <h1>CREATORVERSE</h1>
        <div className="hero-buttons">
          <Link to="/">View All Creators</Link>
          <Link to="/new">Add a Creator</Link>
        </div>
      </section>
      <main>{element}</main>
    </div>
  )
}

export default App