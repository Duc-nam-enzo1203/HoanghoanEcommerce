import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosMockApi from "./api/mock-api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import categories from "./api/categories";
import news from "./api/news";
import { ToastContainer } from "react-toastify";
import publicRoutes from "./router";
import ScrollToTop from "./components/ScrollToTop";
import "./style/style.css";

// filebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhywXXJ401sIiII039xWEgFHjFOmK_6Js",
  authDomain: "hoanghoan-e2b92.firebaseapp.com",
  projectId: "hoanghoan-e2b92",
  storageBucket: "hoanghoan-e2b92.appspot.com",
  messagingSenderId: "537222021714",
  appId: "1:537222021714:web:85abe3376e018a51ab958b",
  measurementId: "G-H75PF5F2F9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//done
function App() {
  // Call Products API
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosMockApi.get("/Products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const Partners = [
    {
      name: "Công ty cơng phần marvella",
      img: "./img/doi-tac/marvella.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "Melissa Resort Hanoi Hotel",
      img: "./img/doi-tac/melissa.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "Tập đoàn khách sạn mường thanh",
      img: "./img/doi-tac/muong-thanh.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "Sheraton Hanoi Hotel",
      img: "./img/doi-tac/sheraton.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "Sunrise-sapa",
      img: "./img/doi-tac/sunrise-sapa.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "The-coffee-house",
      img: "./img/doi-tac/the-coffee-house.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
    {
      name: "Công ty cơng phần Vinpearl",
      img: "./img/doi-tac/vinpearl.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam natus labore cum quo quia vitae. Ut, in eveniet veniam aspernatur optio rerum autem provident itaque porro? Debitis nihil odio ipsum.",
    },
  ];

  // get news
  const [partners, setPartners] = useState(Partners);

  const [postsData, setPostsData] = useState(news);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage; // =6
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // = 6 - 3 = 3
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  // get products

  return (
    <div className="App">
      <Header renderPosts={news} />
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Page
                  renderProducts={products}
                  renderCategories={categories}
                  renderPartners={partners}
                  renderPosts={news}
                  loading={loading}
                />
              }
            />
          );
        })}
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
