import MainRoutes from "./AllRoutes/MainRoutes";
import LargeWithAppLinksAndSocial from "./Components/Footer";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProdcutText from "./Components/ProdcutText";

function App() {
  return (
    <div className="App">
      {/* <LargeWithAppLinksAndSocial /> */}

      {/* <Navbar /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
