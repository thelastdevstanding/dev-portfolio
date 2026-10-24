import { Link, NavLink } from "react-router";

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        Amina Ahmed
      </Link>
      <nav aria-label="Primary">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}