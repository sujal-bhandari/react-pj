
import './App.css';
// import Navbar from './Navbar';
import Home from './Home';
import Hire from './Hire';
import Adopt from './Adopt';
import Navbar from './Navbar';
import Login from './Login';
import Apply from './Apply';
import Signup from './Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {path:"/",
      element:<><Navbar /><Home /></>
    },
    {path:"/hire",
      element:<><Navbar /><Hire /></>
    },
    {path:"/adopt",
      element:<><Navbar /><Adopt /></>
    },
    {path:"/login",
      element:<><Login /></>

    },
    {path:"/apply",
      element:<><Apply /></>

    },
    {
      path:"/signup",
      element:<><Signup /></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
