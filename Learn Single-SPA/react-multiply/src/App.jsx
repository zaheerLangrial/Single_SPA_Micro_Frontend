import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
// ]);


function App({children}) {
  return (
      <main>
        <ul>
          <li>
            <Link to={'/contact'} >Contact</Link>
          </li>
        </ul>
        {children}
      </main>
  )
}

export default App