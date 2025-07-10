import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SearchProvider } from "./hooks/searchContet.jsx";
import {createBrowserRouter,RouterProvider} from "react-router";
import Root from './App.jsx'
import HomePage from './ui/pages/HomePage/index.jsx'
import RecommendedPage from './ui/pages/RecommendedPage/index.jsx';
import AllAuthorsPage from './ui/pages/AllAuthorsPage/index.jsx'
import RecommendedDetailsPage from './ui/pages/RecommendedDetailsPage/index.jsx';
import AllOnlineBooks from './ui/pages/AllOnlineBooks/index.jsx';
import AllOnlineBooksDeatils from './ui/pages/AllOnlineBooksDetails/index.jsx';
import EachBookDetail from './ui/pages/EachBookDetail/index.jsx';
import SearchResultsPage from './ui/pages/SearchResultPage/index.jsx';
import Login from './ui/pages/LoginPage/index.jsx';
import SignUpPage from './ui/pages/SignUpPage/index.jsx';
import CategoriesPage from './ui/pages/CategoriesPage/index.jsx';
import AuthorDeatilsSection from './ui/pages/AuthorDetailsPage/index.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path:"/", element: <HomePage /> },
      { path: "/recommended", element: <RecommendedPage /> },
      { path: "/categories/:category", element: <CategoriesPage /> },
      { path: "/articles/:id", element: <RecommendedDetailsPage/>},
      { path: "/authors", element: <AllAuthorsPage /> },
      { path: "/author/:id", element: <AuthorDeatilsSection /> },
      { path: "/books", element: <AllOnlineBooks /> },
      { path: "/booksdetail/:category", element: <AllOnlineBooksDeatils /> },
      { path: "/book/:id", element: <EachBookDetail /> },
      { path: "/search", element: <SearchResultsPage  /> },
      { path: "/login", element: <Login /> },
      { path: "/login/signup", element: <SignUpPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <SearchProvider>
    <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>,
)
