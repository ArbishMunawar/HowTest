import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router";
import Root from './App.jsx'
import HomePage from './ui/pages/HomePage/index.jsx'
import RecommendedPage from './ui/pages/RecommendedPage/index.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/recommended", element: <RecommendedPage /> },
      // { path: "shop/", element: <ShopPage /> },
      // { path: "blog/", element: <BlogPage /> },
      // { path: "cart/", element: <Cart /> },
      // { path: "contact/", element: <ContactUs /> },
      // { path: "account/", element: <MyAccountPage /> },
      // // { path: "signin/", element: <SignIn /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />
    
  </StrictMode>,
)
