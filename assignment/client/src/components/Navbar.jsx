import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s" alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/main">Main</Link></li>
            </ul>
        </nav>
    )
}
