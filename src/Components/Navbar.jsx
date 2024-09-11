
import { useContext } from "react"
import MyContext from "./Context/MyContext"
import { Link } from "react-router-dom"


const Navbar = ( ) => {
  const { cart }=useContext(MyContext)
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(246, 246, 113)" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SHOPPING CART</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav" >
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>HOME</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div className= ""style={{width:"20%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Link to={"/cart"} className="btn btn-outline-dark">
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
        </Link>
      </div>
    </nav>
  )
  
}


export default Navbar
