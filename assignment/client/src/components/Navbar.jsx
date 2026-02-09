import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div>MyLogo</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/main">Main</Link></li>
            </ul>
        </nav>
    )
}
