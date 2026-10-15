import { NavLink } from 'react-router';
import '../index.css';

function Navbar(){

    return (
        <nav className ="navbar">
            <h3><NavLink to="/">Transaction View Page</NavLink></h3>

            <div className="navbar-links">
                <h5><NavLink to="/addTransaction">Add Transaction</NavLink></h5>
                <h5><NavLink to="/editTransaction">Edit Transaction</NavLink></h5>
            </div>
        </nav>
    )
}

export default Navbar;