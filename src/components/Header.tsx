import { Page } from "../utils/Page";

export default function Header({
  page,
  setPage,
}: {
  page: Page;
  setPage: (page: Page) => void;
}) {
  return (
    <div className="header">
      <button className="header-title" onClick={() => setPage(Page.MAIN)}>
        <h1>Authentic</h1>
      </button>
      <div className="nav-buttons">
        <button
          className={page === Page.MAIN ? "active" : ""}
          onClick={() => setPage(Page.MAIN)}
        >
          <h3>Welcome</h3>
        </button>
        <button
          className={page === Page.WHY ? "active" : ""}
          onClick={() => setPage(Page.WHY)}
        >
          <h3>Why Not Use GenAI</h3>
        </button>
        <button
          className={page === Page.CREATIVES ? "active" : ""}
          onClick={() => setPage(Page.CREATIVES)}
        >
          <h3>For Creatives</h3>
        </button>
        <button
          className={page === Page.ORGANISATIONS ? "active" : ""}
          onClick={() => setPage(Page.ORGANISATIONS)}
        >
          <h3>For Organisations</h3>
        </button>
        <button
          className={page === Page.ARGUMENTS ? "active" : ""}
          onClick={() => setPage(Page.ARGUMENTS)}
        >
          <h3>GenAI Arguments</h3>
        </button>
        <button
          className={page === Page.LINES ? "active" : ""}
          onClick={() => setPage(Page.LINES)}
        >
          <h3>Lines in the Sand</h3>
        </button>
        <button
          className={page === Page.CONTRACTS ? "active" : ""}
          onClick={() => setPage(Page.CONTRACTS)}
        >
          <h3>Anti-AI Contracts</h3>
        </button>
        <button
          className={page === Page.IDENTIFYING_GEN_AI ? "active" : ""}
          onClick={() => setPage(Page.IDENTIFYING_GEN_AI)}
        >
          <h3>Identifying Gen AI</h3>
        </button>
      </div>
    </div>
  );
}
