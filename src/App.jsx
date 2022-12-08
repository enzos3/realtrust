import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Proyects from "./components/proyects/Proyects";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Introduction />
      <Services />
      <About />
      <Testimonials />
      <Proyects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
