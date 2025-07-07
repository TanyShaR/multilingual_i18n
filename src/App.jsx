import { useState } from "react";
import "./App.css";
import { LanguageSwitch } from "./components/LanguageSwitch/LanguageSwitch";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState("de");
  return (
    <div className={S.container}>
      <Header language={language} />
      <Main className={S.main}/>
      <Footer />
    </div>
  );
}

export default App;
