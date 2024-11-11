import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Navbar from './Navbar';
// import Hire from './Hire';
// import Home from './Home';
// import Adopt from './Adopt';
// import Login from './Login';
import App from './App';
// import Apply from './Apply';
// ReactDOM.render(<>
// <App />
// </>,document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);