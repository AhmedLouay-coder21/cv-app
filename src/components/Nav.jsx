import "./Nav.css"
import NavButton from "./NavButton"

function Nav() {
  return (
    <header>
      <div className="container">
        <div id="logo">CV App</div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavButton name={"Save draft"} />
            </li>
            <li>
              <NavButton name={"Download PDF"} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Nav
