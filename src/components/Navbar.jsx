import { Link } from "react-router-dom"
const Navbar= () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar