import './component.css'
import {Link} from "react-router-dom"
function Header(props){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to ="/home" className="navbar-brand">Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to ="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to ="/feed" className="nav-link">Feed</Link>
          </li>
          <li className="nav-item">
          <Link to ="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <span className="navbar-text">
          <Link to ="/" className="nav-link">Login</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header;