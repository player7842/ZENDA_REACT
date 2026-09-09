import { useParams, Link } from "react-router-dom";

const DetalleUsuario = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2 style={{ color: "#39A900" }}>Detalle del Usuario</h2>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
        Identificador único: <strong>{id}</strong>
      </p>
      <p>Aquí se mostrará toda la información del usuario: ficha asignada, rol, proyectos, tareas y avance.</p>
      <Link to="/usuarios" style={{ display: "inline-block", marginTop: "1rem", color: "#39A900" }}>
        ← Volver al listado
      </Link>
    </div>
  );
};

export default DetalleUsuario;