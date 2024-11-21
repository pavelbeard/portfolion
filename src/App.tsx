import "./style.css";
// @ts-ignore
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Stack from "./components/Stack";
import Title from "./components/Title";

import "./i18n";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="nearest" />
      <Header />
      <main className="flex flex-col xl:grid xl:grid-cols-[200px_1fr_200px]">
        <div className="col-start-2">
          <Title />
          <MainContent />
          <Stack />
          <ContactForm />
          <AboutMe />
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
