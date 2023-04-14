import { Link, useNavigate } from "react-router-dom";
import '../adminHeader/AdminHeader.css'
import logo from "../../../assets/herbal.svg"
function AdminHeader() {
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const doLogout = () => {
        if (myuser !== null) {
          localStorage.removeItem("myuser");
          alert("logout successfully")
        }
      };
    return (
        <div className="container-fluid.no-gutters admin-header-container">
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark shadow p-3 mb-5" >
            <a className="navbar-brand" href="/admin"> <img src={logo} />Ayurvedic Medicine</a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/admin" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin/medicine/all" className="nav-link">Medicine</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/orders/status" className="nav-link">Orders</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/customer/all" className="nav-link">Users</Link>
                    </li>
                    <li className="nav-item active">
                        <button onClick={doLogout} ><Link to="/" className="nav-link">Logout</Link></button>
                    
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default AdminHeader;