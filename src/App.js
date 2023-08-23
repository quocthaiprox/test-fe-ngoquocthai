import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from './components/Header';
import Todo from './page/Todo';
const Layout = () => {
  return (
    <div className='bg-neutral-100'>
      <Header/>
      <ScrollRestoration />
      <Outlet/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />
      }
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
