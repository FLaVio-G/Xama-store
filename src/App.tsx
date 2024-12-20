import Footer from "./components/Footer";
import Header from "./components/Header";
import KeepBanner from "./components/KeepBanner";

import Products from "./components/Products";

import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <KeepBanner />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
