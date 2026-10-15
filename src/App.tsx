import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/pages/Main";
import Why from "./components/pages/Why";
import Arguments from "./components/pages/Arguments";
import Lines from "./components/pages/Lines";
import Contracts from "./components/pages/Contracts";
import IdentifyingGenAI from "./components/pages/IdentifyingGenAI";
import Creatives from "./components/pages/Creatives";
import { Page } from "./utils/Page";

function App() {
  const [page, setPage] = useState<Page>(Page.MAIN);

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <div className="content">
        {page === Page.MAIN && <Main />}
        {page === Page.WHY && <Why />}
        {page === Page.ARGUMENTS && <Arguments />}
        {page === Page.LINES && <Lines />}
        {page === Page.CONTRACTS && <Contracts />}
        {page === Page.IDENTIFYING_GEN_AI && <IdentifyingGenAI />}
        {page === Page.CREATIVES && <Creatives />}
      </div>
    </div>
  );
}

export default App;
