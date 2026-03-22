import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", icon: "🏡", label: "Home" },
  { to: "/profile", icon: "👩🏻‍💻", label: "Profile" },
  { to: "/projects", icon: "✨", label: "Projects" },
  { to: "/contact", icon: "💌", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            aria-label={item.label}
          >
            <span>{item.icon}</span>
          </NavLink>
        ))}
      </nav>

      <button className="theme-button" type="button" aria-label="Theme button">
        ☀️
      </button>
    </aside>
  );
}