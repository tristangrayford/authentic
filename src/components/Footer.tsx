export default function Footer() {
  return (
    <div className="footer">
      <button
        className="footer-title"
        onClick={() => window.open("https://tristangraywrites.com", "_blank")}
      >
        <p>A page by Tristan Gray</p>
        <p>
          He can be found at{" "}
          <a href="https://tristangraywrites.com">tristangraywrites.com</a>
        </p>
      </button>
    </div>
  );
}
