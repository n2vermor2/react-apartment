import Homepage from './components/pages/homepage/Homepage'
import Listpage from './components/pages/listpage/Listpage';
import Singlepage from './components/pages/singlepage/Singlepage';
import {
  createBrowserRouter,
  RouterProvider,
}   from 'react-router-dom'
import Layout from './layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<Listpage/>
        },
        {
          path:"/:id",
          element:<Singlepage/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App