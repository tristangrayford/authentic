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
      <h1 className="header-title">Authentic</h1>
      <div className="nav-buttons">
        <button
          className={page === Page.MAIN ? "active" : ""}
          onClick={() => setPage(Page.MAIN)}
        >
          Main
        </button>
        <button
          className={page === Page.WHY ? "active" : ""}
          onClick={() => setPage(Page.WHY)}
        >
          Why
        </button>
        <button
          className={page === Page.ARGUMENTS ? "active" : ""}
          onClick={() => setPage(Page.ARGUMENTS)}
        >
          Arguments
        </button>
        <button
          className={page === Page.LINES ? "active" : ""}
          onClick={() => setPage(Page.LINES)}
        >
          Lines
        </button>
        <button
          className={page === Page.CONTRACTS ? "active" : ""}
          onClick={() => setPage(Page.CONTRACTS)}
        >
          Contracts
        </button>
        <button
          className={page === Page.IDENTIFYING_GEN_AI ? "active" : ""}
          onClick={() => setPage(Page.IDENTIFYING_GEN_AI)}
        >
          Identifying Gen AI
        </button>
        <button
          className={page === Page.CREATIVES ? "active" : ""}
          onClick={() => setPage(Page.CREATIVES)}
        >
          Creatives
        </button>
      </div>
    </div>
  );
}
