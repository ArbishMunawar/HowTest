// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//   const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;
//   const [articles, setArticles] = useState([]);
//   const [books, setBooks] = useState([]);
// const [articlesLoading, setArticlesLoading] = useState(false);
// const [booksLoading, setBooksLoading] = useState(false);

//   // const getArticlesData = async () => {
//   //   try {
//   //     const { data } = await axios.get(backendUrl + "/api/v1/article/");
//   //     if (data.success) {
//   //       setArticles(data.articles);
//   //       console.log(data.articles)
//   //     } else {
//   //       toast.error(data.message);
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     toast.error(error.message);
//   //   }
//   // };

//   const getArticlesData = async () => {
//   try {
//     setArticlesLoading(true);
//     const { data } = await axios.get(backendUrl + "/api/v1/article/list");
//     console.log("API Response:", data); // check structure
//     // If your API returns an array directly, use:
//     setArticles(data);
//     // If it returns { success: true, articles: [...] } use:
//     // setArticles(data.articles || []);
//   } catch (error) {
//     console.error(error);
//     toast.error(error.message);
//   }finally {
//     setArticlesLoading(false);
//   }
// };

//  const getBooksData = async () => {
//   try {
//     setBooksLoading(true);
//     const { data } = await axios.get(backendUrl + "/api/v1/book/");
//     console.log("API  book Response:", data); // check structure
//     // If your API returns an array directly, use:
//     setBooks(data);

//   } catch (error) {
//     console.error(error);
//     toast.error(error.message);
//   }finally {
//     setBooksLoading(false);
//   }
// };
// useEffect(() => {
//   getArticlesData();
//   getBooksData();
// }, []);

//   return (

//     <AppContext.Provider value={{ articles,articlesLoading,booksLoading, getArticlesData, getBooksData, books }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const [articles, setArticles] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [booksLoading, setBooksLoading] = useState(false);
  const [authorLoading, setAuthorLoading] = useState(false);

  // Fetch Articles
  const getArticlesData = async () => {
    try {
      setArticlesLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/article/list`);
      setArticles(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setArticlesLoading(false);
    }
  };

  // Fetch Books
  const getBooksData = async () => {
    try {
      setBooksLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/book/`);
      setBooks(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setBooksLoading(false);
    }
  };

  // Fetch Authors
  const getAuthorsData = async () => {
    try {
      setAuthorLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/v1/author/`);
      setAuthors(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setAuthorLoading(false);
    }
  };



  useEffect(() => {
    getArticlesData();
    getBooksData();
    getAuthorsData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        books,
        authors,
        articles,
        articlesLoading,
        booksLoading,
        authorLoading,
        getArticlesData,
        getBooksData,
        getAuthorsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
