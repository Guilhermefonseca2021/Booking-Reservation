import './header.css'

export default function Header() {
  return (
    <div className="navbar">
        <div className="container">
            <span className="logo">booking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
