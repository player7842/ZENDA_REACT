import { Link } from "react-router-dom";

const MenuModulos = () => {
  return (
    <nav style={{ padding: "0.6rem 1rem", borderBottom: "1px solid #E8F5E1", background: "#F2FAF0" }}>
      <em style={{ color: "#636A72", marginRight: "0.5rem" }}>Módulos:</em>
      <Link to="/usuarios" style={{ margin: "0 0.5rem", color: "#39A900" }}>Usuarios</Link>
      <Link to="/proyectos" style={{ margin: "0 0.5rem", color: "#39A900" }}>Proyectos</Link>
      <Link to="/reportes" style={{ margin: "0 0.5rem", color: "#39A900" }}>Reportes</Link>
    </nav>
  );
};

export default MenuModulos;