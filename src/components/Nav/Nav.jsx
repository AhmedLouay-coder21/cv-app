import "./Nav.css"
import Button from "../Button/Button"

function Nav() {
  return (
    <header>
      <div className="container">
        <div id="logo">CV App</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Button name={"Save draft"} />
            </li>
            <li>
              <Button name={"Download PDF"} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Nav
