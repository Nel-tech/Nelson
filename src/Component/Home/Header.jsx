import "../../css/style.css";

export function Header() {
  return (
    <div className="nav-container">
      <h1 className="logo">Favour</h1>

      <navbar>
        <div className="container-link">
          <div>
            <a href="#home" className="nav-link">
              Home
            </a>
          </div>

          <div>
            <a href="#about" className="nav-link">
              About
            </a>
          </div>

          <div>
            <a href="#project" className="nav-link">
              Project
            </a>
          </div>

          <div>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </navbar>
    </div>
  );
}
