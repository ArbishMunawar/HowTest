import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router";
import Root from './App.jsx'
import HomePage from './ui/pages/HomePage/index.jsx'
import RecommendedPage from './ui/pages/RecommendedPage/index.jsx';
import AllAuthorsPage from './ui/pages/AllAuthorsPage/index.jsx'
import RecommendedDetailsPage from './ui/pages/RecommendedDetailsPage/index.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/recommended", element: <RecommendedPage /> },
        { path: "/articles/:id", element: <RecommendedDetailsPage/>},
      { path: "/authors", element: <AllAuthorsPage /> },
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
