import Home from "../pages/HomePage.js";
import AboutUs from "../pages/AboutUsPage.js";
import Product from "../pages/ProductPage.js";
import Partner from "../pages/PartnerPage.js";
import Contact from "../pages/ContactPage.js";
import News from "../pages/NewPage.js";
import SingleProduct from "../pages/SingleProduct.js";
import SingleNew from "../pages/SingleNew.js";
import Checkout from "../pages/CheckoutPage.js";
import SearchResultPage from "../pages/SearchResultPage.js";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Information", component: AboutUs },
  { path: "/Product", component: Product },
  { path: "/Product/:title", component: SingleProduct },
  { path: "/News", component: News },
  { path: "/News/:tittle", component: SingleNew },
  { path: "/Partner", component: Partner },
  { path: "/Contact", component: Contact },
  { path: "/Checkout", component: Checkout },
  { path: "/search/:name", component: SearchResultPage },
];
export default publicRoutes;
